import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  Volume2,
  VolumeX,
  Music,
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Bookmark,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Sliders,
  ChevronDown,
  Layers,
  BookOpen,
  FileText,
  Mic,
  Headphones,
  AlertTriangle,
  Award,
  Zap,
  Info,
  Maximize,
  Minimize,
  Flame,
  Star,
  MessageSquare,
  PenTool,
  Infinity as InfinityIcon,
  Clock,
  Target,
  TrendingUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { 
  PianoKnowledgeItem, 
  KnowledgeCategoryType, 
  getPianoKnowledgeItems, 
  getNextTopic, 
  getTopicsCatalogForCategory,
  TopicCatalogItem
} from '../utils/pianoKnowledgeAdapter';
import { PIANO_SONGS, PianoSong, getSongById } from '../utils/melodySongs';
import { pianoAudio } from '../utils/pianoAudio';
import { VocabWord } from '../types';

interface ActiveTile {
  instanceId: string;
  item: PianoKnowledgeItem;
  lane: number;
  yProgress: number;
  isHit: boolean;
  note: string;
  songIndex: number;
}

interface RippleEffect {
  id: number;
  lane: number;
  x: number;
  y: number;
  timestamp: number;
}

interface FloatingNote {
  id: number;
  lane: number;
  symbol: string;
  x: number;
  y: number;
  color: string;
}

interface PianoTilesGameProps {
  initialCategory?: KnowledgeCategoryType;
  initialTopicId?: number | string;
  bookmarkedWords?: string[];
  onToggleBookmark?: (id: string) => void;
  learnedWords?: string[];
  onToggleLearned?: (id: string) => void;
  onOpenWordPopup?: (word: VocabWord) => void;
}

// Get today's key string for persistent daily tracking (YYYY-MM-DD)
function getTodayDateKey(): string {
  const now = new Date();
  return `ielts_tracker_${now.getFullYear()}_${now.getMonth() + 1}_${now.getDate()}`;
}

export const PianoTilesGame: React.FC<PianoTilesGameProps> = ({
  initialCategory = 'grammar-mastery',
  initialTopicId = 1,
  bookmarkedWords = [],
  onToggleBookmark,
  learnedWords = [],
  onToggleLearned,
  onOpenWordPopup
}) => {
  // --- Game State ---
  const [category, setCategory] = useState<KnowledgeCategoryType>(initialCategory);
  const [topicId, setTopicId] = useState<number | string>(initialTopicId);
  const [knowledgeItems, setKnowledgeItems] = useState<PianoKnowledgeItem[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  const [selectedSong, setSelectedSong] = useState<PianoSong>(PIANO_SONGS[0]);
  const [songNoteIndex, setSongNoteIndex] = useState<number>(0);

  // Play Mode: 'step' (Tile drops when key is pressed - study mode) vs 'flow' (Tiles flow continuously)
  const [playMode, setPlayMode] = useState<'flow' | 'step'>('flow');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [fallSpeed, setFallSpeed] = useState<number>(() => {
    const saved = localStorage.getItem('piano_game_fall_speed');
    return saved ? parseFloat(saved) : 1.0;
  });

  const handleSetSpeed = (newSpeed: number) => {
    setFallSpeed(newSpeed);
    localStorage.setItem('piano_game_fall_speed', newSpeed.toString());
  };

  const [activeTiles, setActiveTiles] = useState<ActiveTile[]>([]);
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [floatingNotes, setFloatingNotes] = useState<FloatingNote[]>([]);
  const [pressedLanes, setPressedLanes] = useState<{ [key: number]: boolean }>({ 0: false, 1: false, 2: false, 3: false });

  // Game Statistics & Streaks
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [notesPlayed, setNotesPlayed] = useState<number>(() => {
    const saved = localStorage.getItem(`${getTodayDateKey()}_notes`);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [wordsMastered, setWordsMastered] = useState<number>(0);

  // Real-Time Daily Playtime Tracker (in seconds)
  const [playtimeSeconds, setPlaytimeSeconds] = useState<number>(() => {
    const saved = localStorage.getItem(`${getTodayDateKey()}_playtime`);
    return saved ? parseInt(saved, 10) : 0;
  });

  // Audio / Speech Settings
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState<boolean>(true);

  // Visual Theme & Modals
  const [gameTheme, setGameTheme] = useState<'pastel' | 'cyber' | 'sakura' | 'galaxy' | 'sunset'>('pastel');
  const [selectedInspectItem, setSelectedInspectItem] = useState<PianoKnowledgeItem | null>(null);
  const [showTopicModal, setShowTopicModal] = useState<boolean>(false);
  const [showSongModal, setShowSongModal] = useState<boolean>(false);
  const [songCategoryFilter, setSongCategoryFilter] = useState<string>('all');
  const [songSearchQuery, setSongSearchQuery] = useState<string>('');
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [showBandDashboard, setShowBandDashboard] = useState<boolean>(false);
  const [topicFilter, setTopicFilter] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // Milestone / Auto Next Topic Notification
  const [milestoneMessage, setMilestoneMessage] = useState<string | null>(null);

  // Refs for animation loop
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const nextSpawnTimeRef = useRef<number>(0);
  const itemIndexRef = useRef<number>(0);
  const songIndexRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(true);
  const activeTilesRef = useRef<ActiveTile[]>([]);

  itemIndexRef.current = currentItemIndex;
  songIndexRef.current = songNoteIndex;
  isPlayingRef.current = isPlaying;
  activeTilesRef.current = activeTiles;

  // 1. Playtime Live Stopwatch Ticking
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaytimeSeconds(prev => {
        const next = prev + 1;
        localStorage.setItem(`${getTodayDateKey()}_playtime`, next.toString());
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Save notes played today
  useEffect(() => {
    localStorage.setItem(`${getTodayDateKey()}_notes`, notesPlayed.toString());
  }, [notesPlayed]);

  // Format playtime into HH:MM:SS
  const formatPlaytime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const hStr = hours < 10 ? `0${hours}` : `${hours}`;
    const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const sStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${hStr}h ${mStr}m ${sStr}s`;
  };

  // 2. Load Knowledge Items when Category or Topic ID changes
  useEffect(() => {
    const items = getPianoKnowledgeItems(category, topicId);
    setKnowledgeItems(items);
    setCurrentItemIndex(0);
    setActiveTiles([]);
    itemIndexRef.current = 0;
  }, [category, topicId]);

  // 3. Spawn next knowledge tile
  const spawnTile = useCallback(() => {
    if (knowledgeItems.length === 0) return;

    const currentIdx = itemIndexRef.current;
    if (currentIdx >= knowledgeItems.length) {
      handleAutoAdvanceTopic();
      return;
    }

    const item = knowledgeItems[currentIdx];
    const song = selectedSong;
    const note = song.notes[songIndexRef.current % song.notes.length];
    const lane = currentIdx % 4;

    const newTile: ActiveTile = {
      instanceId: `${item.id}-${Date.now()}-${Math.random()}`,
      item,
      lane,
      yProgress: 0,
      isHit: false,
      note,
      songIndex: songIndexRef.current
    };

    setActiveTiles(prev => [...prev.slice(-25), newTile]);
    setCurrentItemIndex(prev => prev + 1);
    setSongNoteIndex(prev => prev + 1);
  }, [knowledgeItems, selectedSong]);

  // 4. Auto-Advance to Next Topic (Endless 10-Hour Marathon Flow)
  const handleAutoAdvanceTopic = useCallback(() => {
    const next = getNextTopic(category, topicId);
    setMilestoneMessage(`🎉 Chúc Mừng Bạn! Đang tự động chuyển tiếp sang: ${next.nextTitle}`);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 }
    });
    pianoAudio.playSuccessChime();

    setTimeout(() => {
      setCategory(next.nextCategory);
      setTopicId(next.nextTopicId);
      setMilestoneMessage(null);
    }, 2800);
  }, [category, topicId]);

  // 5. Hit / Tap Note Action
  const handleHitNote = useCallback((laneIndex: number, specificTileId?: string) => {
    const currentList = activeTilesRef.current;
    let targetTile: ActiveTile | undefined;

    if (specificTileId) {
      targetTile = currentList.find(t => t.instanceId === specificTileId && !t.isHit);
    } else {
      const laneTiles = currentList.filter(t => t.lane === laneIndex && !t.isHit);
      if (laneTiles.length > 0) {
        targetTile = laneTiles.sort((a, b) => b.yProgress - a.yProgress)[0];
      }
    }

    setPressedLanes(prev => ({ ...prev, [laneIndex]: true }));
    setTimeout(() => {
      setPressedLanes(prev => ({ ...prev, [laneIndex]: false }));
    }, 150);

    if (playMode === 'step' && !targetTile) {
      spawnTile();
    }

    const song = selectedSong;
    const note = targetTile ? targetTile.note : song.notes[songIndexRef.current % song.notes.length];

    pianoAudio.playPianoNote(note, 1.8, 0.9);
    triggerVisualFX(laneIndex);

    if (targetTile) {
      const hitTile = targetTile;
      setActiveTiles(prev => prev.map(t => t.instanceId === hitTile.instanceId ? { ...t, isHit: true } : t));

      if (isTtsEnabled) {
        pianoAudio.speakEnglish(hitTile.item.englishText);
      }

      setScore(prev => prev + 100 + combo * 10);
      setCombo(prev => {
        const next = prev + 1;
        setMaxCombo(m => Math.max(m, next));
        return next;
      });
      // STRICT ANTI-SPAM: Only count towards 6000 daily notes upon successful knowledge tile hit
      setNotesPlayed(prev => prev + 1);
      setWordsMastered(prev => prev + 1);

      if (playMode === 'step') {
        setTimeout(() => spawnTile(), 300);
      }
    } else {
      // EMPTY / SPAM TAP: DO NOT count notesPlayed! Reset combo
      setSongNoteIndex(prev => prev + 1);
      setCombo(0);
    }
  }, [playMode, selectedSong, isTtsEnabled, combo, spawnTile]);

  // 6. Visual Effects
  const triggerVisualFX = (laneIndex: number) => {
    const newRipple: RippleEffect = {
      id: Date.now() + Math.random(),
      lane: laneIndex,
      x: 50,
      y: 85,
      timestamp: Date.now()
    };
    setRipples(prev => [...prev.slice(-8), newRipple]);

    const musicSymbols = ['🎵', '🎶', '✨', '⭐', '💫', '🎹'];
    const colors = ['#06b6d4', '#ec4899', '#a855f7', '#fbbf24', '#34d399', '#f43f5e'];
    const newNote: FloatingNote = {
      id: Date.now() + Math.random(),
      lane: laneIndex,
      symbol: musicSymbols[Math.floor(Math.random() * musicSymbols.length)],
      x: 25 + Math.random() * 50,
      y: 80,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setFloatingNotes(prev => [...prev.slice(-12), newNote]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      setRipples(prev => prev.filter(r => now - r.timestamp < 600));
      setFloatingNotes(prev => prev.filter(n => now - n.id < 1200));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  // 7. Falling Loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (isPlayingRef.current && playMode === 'flow') {
        const spawnInterval = 3.8 / fallSpeed;
        if (currentTime >= nextSpawnTimeRef.current) {
          spawnTile();
          nextSpawnTimeRef.current = currentTime + (spawnInterval * 1000);
        }

        const movement = 12 * fallSpeed * delta;
        setActiveTiles(prev => {
          return prev
            .map(tile => ({
              ...tile,
              yProgress: tile.yProgress + movement
            }))
            .filter(tile => tile.yProgress <= 115);
        });
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [playMode, fallSpeed, spawnTile]);

  useEffect(() => {
    if (knowledgeItems.length > 0 && activeTiles.length === 0) {
      spawnTile();
      if (playMode === 'flow') {
        setTimeout(() => spawnTile(), 1900);
      }
    }
  }, [knowledgeItems, playMode, spawnTile]);

  // 8. Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'd' || key === 'a' || key === '1') {
        e.preventDefault();
        handleHitNote(0);
      } else if (key === 'f' || key === 's' || key === '2') {
        e.preventDefault();
        handleHitNote(1);
      } else if (key === 'j' || key === '3') {
        e.preventDefault();
        handleHitNote(2);
      } else if (key === 'k' || key === 'l' || key === '4') {
        e.preventDefault();
        handleHitNote(3);
      } else if (e.code === 'Space') {
        e.preventDefault();
        const currentList = activeTilesRef.current.filter(t => !t.isHit);
        if (currentList.length > 0) {
          const lowest = currentList.sort((a, b) => b.yProgress - a.yProgress)[0];
          handleHitNote(lowest.lane, lowest.instanceId);
        } else {
          handleHitNote(Math.floor(Math.random() * 4));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleHitNote]);

  // Controls
  const handleToggleMute = () => {
    const next = !isAudioMuted;
    setIsAudioMuted(next);
    pianoAudio.setMuted(next);
  };

  const handleToggleTts = () => {
    const next = !isTtsEnabled;
    setIsTtsEnabled(next);
    pianoAudio.setTtsEnabled(next);
  };

  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullScreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullScreen(false);
    }
  };

  // Theme styling
  const themeStyles = {
    pastel: {
      bg: 'linear-gradient(135deg, #1e152a 0%, #15182e 50%, #1c2237 100%)',
      laneBg: 'rgba(255, 255, 255, 0.03)',
      laneBorder: 'rgba(168, 85, 247, 0.15)',
      tileGradient: 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
      tileQuestionGradient: 'linear-gradient(180deg, #d97706 0%, #b45309 100%)',
      tileHitGradient: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
      tileGlow: '0 0 22px rgba(168, 85, 247, 0.5)',
      hitLineColor: '#ec4899',
      keyBg: '#2a2245',
      accentColor: '#c084fc'
    },
    cyber: {
      bg: 'linear-gradient(135deg, #050b14 0%, #0a1128 50%, #001f3f 100%)',
      laneBg: 'rgba(6, 182, 212, 0.04)',
      laneBorder: 'rgba(6, 182, 212, 0.2)',
      tileGradient: 'linear-gradient(180deg, #0284c7 0%, #06b6d4 100%)',
      tileQuestionGradient: 'linear-gradient(180deg, #f59e0b 0%, #d97706 100%)',
      tileHitGradient: 'linear-gradient(180deg, #10b981 0%, #06b6d4 100%)',
      tileGlow: '0 0 22px rgba(6, 182, 212, 0.6)',
      hitLineColor: '#06b6d4',
      keyBg: '#0e2238',
      accentColor: '#38bdf8'
    },
    sakura: {
      bg: 'linear-gradient(135deg, #2b111f 0%, #1f142b 50%, #291522 100%)',
      laneBg: 'rgba(244, 63, 94, 0.04)',
      laneBorder: 'rgba(244, 63, 94, 0.2)',
      tileGradient: 'linear-gradient(180deg, #f43f5e 0%, #fb7185 100%)',
      tileQuestionGradient: 'linear-gradient(180deg, #ea580c 0%, #c2410c 100%)',
      tileHitGradient: 'linear-gradient(180deg, #ec4899 0%, #f43f5e 100%)',
      tileGlow: '0 0 20px rgba(244, 63, 94, 0.5)',
      hitLineColor: '#fb7185',
      keyBg: '#3b1828',
      accentColor: '#fda4af'
    },
    galaxy: {
      bg: 'linear-gradient(135deg, #090314 0%, #110926 50%, #0d0622 100%)',
      laneBg: 'rgba(192, 132, 252, 0.04)',
      laneBorder: 'rgba(192, 132, 252, 0.2)',
      tileGradient: 'linear-gradient(180deg, #7c3aed 0%, #c084fc 100%)',
      tileQuestionGradient: 'linear-gradient(180deg, #b45309 0%, #78350f 100%)',
      tileHitGradient: 'linear-gradient(180deg, #8b5cf6 0%, #ec4899 100%)',
      tileGlow: '0 0 25px rgba(192, 132, 252, 0.6)',
      hitLineColor: '#c084fc',
      keyBg: '#1f103d',
      accentColor: '#e9d5ff'
    },
    sunset: {
      bg: 'linear-gradient(135deg, #1c1015 0%, #291717 50%, #21131a 100%)',
      laneBg: 'rgba(245, 158, 11, 0.04)',
      laneBorder: 'rgba(245, 158, 11, 0.2)',
      tileGradient: 'linear-gradient(180deg, #ea580c 0%, #f59e0b 100%)',
      tileQuestionGradient: 'linear-gradient(180deg, #b91c1c 0%, #991b1b 100%)',
      tileHitGradient: 'linear-gradient(180deg, #10b981 0%, #f59e0b 100%)',
      tileGlow: '0 0 20px rgba(245, 158, 11, 0.5)',
      hitLineColor: '#f59e0b',
      keyBg: '#3d2013',
      accentColor: '#fde68a'
    }
  };

  const curTheme = themeStyles[gameTheme];

  // Milestone Gates Calculation
  const TARGET_NOTES = 6000;
  const TARGET_PLAYTIME_SECONDS = 36000; // 10 hours
  const progressNotesPercent = Math.min(100, Math.round((notesPlayed / TARGET_NOTES) * 100));
  const progressTimePercent = Math.min(100, Math.round((playtimeSeconds / TARGET_PLAYTIME_SECONDS) * 100));
  const overallBandGain = (Math.min(1.0, notesPlayed / TARGET_NOTES) * 0.5).toFixed(2);

  const gates = [
    { gate: 1, name: "Gate 1: Phản Xạ Speaking Part 1 & 2", notes: 1500, time: "2.5h", gain: "+0.10 Band", passed: notesPlayed >= 1500 },
    { gate: 2, name: "Gate 2: Cấu Trúc Writing Task 1 & 2", notes: 2700, time: "4.5h", gain: "+0.20 Band", passed: notesPlayed >= 2700 },
    { gate: 3, name: "Gate 3: Tư Duy Vĩ Mô & Listening", notes: 4200, time: "7.0h", gain: "+0.30 Band", passed: notesPlayed >= 4200 },
    { gate: 4, name: "Gate 4: 8 Cấu Trúc & Bẫy Lỗi 5.0-8.5", notes: 5400, time: "9.0h", gain: "+0.40 Band", passed: notesPlayed >= 5400 },
    { gate: 5, name: "Gate 5: Master 1000 Q&A Hoàn Mỹ", notes: 6000, time: "10.0h", gain: "+0.50 Band", passed: notesPlayed >= 6000 }
  ];

  const topicsCatalog = getTopicsCatalogForCategory(category);
  const filteredCatalog = topicsCatalog.filter(t => 
    t.title.toLowerCase().includes(topicFilter.toLowerCase()) ||
    t.titleEn.toLowerCase().includes(topicFilter.toLowerCase())
  );

  const filteredSongs = PIANO_SONGS.filter(s => {
    const matchesCat = songCategoryFilter === 'all' || s.category === songCategoryFilter;
    const matchesSearch = s.title.toLowerCase().includes(songSearchQuery.toLowerCase()) ||
                          s.author.toLowerCase().includes(songSearchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(songSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col h-full w-full select-none overflow-hidden text-white font-sans"
      style={{ background: curTheme.bg }}
    >
      {/* 1. TOP HEADER / STATS & LIVE DAILY PLAYTIME HUD */}
      <div className="flex items-center justify-between px-3 py-2 bg-black/60 border-b border-white/10 backdrop-blur-md z-30 flex-wrap gap-2">
        {/* Left: Topic Selector & 100 Famous Songs Selector */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowTopicModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-left transition group shadow-md"
            title="Đổi chủ đề bài học / 5 Trụ cột tri thức / 1000 Q&A"
          >
            <Layers className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                {category === 'grammar-mastery' && '🏛️ 8 Cấu Trúc Ngữ Pháp (GRA 8.5+)'}
                {category === 'connectors-matrix' && '🔗 Ma Trận Từ Nối Cohesion (CC)'}
                {category === 'paraphrase-matrix' && '📚 Bảng Paraphrase Thay Thế (LR)'}
                {category === 'spoken-idioms' && '🎙️ Thành Ngữ Tự Nhiên (Speaking 7.5+)'}
                {category === 'listening-phonology' && '🎧 Ngữ Âm Nối Âm & Bẫy Listening'}
                {category === 'qa-speaking' && `🎙️ Speaking Q&A Gói ${topicId}/25`}
                {category === 'qa-writing' && `✍️ Writing Q&A Gói ${topicId}/25`}
                {category === 'qa-master' && `♾️ Master 1000 Q&A Giai Đoạn ${topicId}/34`}
                {category === 'chapter' && `📖 Chương ${topicId}/100 • Novel`}
                {category === 'mistakes' && `Bẫy Lỗi 5.0 - 8.0`}
                {category === 'vocab-vault' && `Kho Từ Vựng Nhóm ${topicId}`}
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[140px] sm:max-w-[200px]">
                {knowledgeItems[0]?.topicTitle || 'Chủ Đề Đang Học'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
          </button>

          {/* 100 Famous Piano Songs Selector Button */}
          <button
            onClick={() => setShowSongModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-400/40 text-left transition group shadow-md"
            title="Chọn bài nhạc Piano (100 bài: Rush E, Ánh Trăng Beethoven, Anime, Ghibli, Nhạc Phim, Pop)"
          >
            <Music className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-pink-300 uppercase tracking-wider">
                🎵 Giai Điệu (100 Bài)
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[120px] sm:max-w-[170px]">
                {selectedSong.title}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-pink-300 group-hover:text-white" />
          </button>

          {/* Daily Playtime Stopwatch Live Tracker */}
          <div 
            onClick={() => setShowBandDashboard(true)}
            className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/40 text-xs font-mono font-bold text-indigo-200 transition shadow-md group"
            title="Nhấn để xem Bảng Đo Đạc Mốc Đạt +0.5 Band Hôm Nay"
          >
            <Clock className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>⏱️ {formatPlaytime(playtimeSeconds)}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-indigo-400 text-black font-extrabold group-hover:scale-105 transition">
              +{overallBandGain} Band
            </span>
          </div>
        </div>

        {/* Center: Band +0.5 Milestone Bar */}
        <div 
          onClick={() => setShowBandDashboard(true)}
          className="cursor-pointer flex items-center gap-3 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-xl border border-white/10 transition"
          title="Bảng đo lường 5 Cổng Mốc (KPI Gates) đạt +0.5 Band"
        >
          <div className="flex items-center gap-1.5">
            <Target className="w-4 h-4 text-emerald-400" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-[10px] font-bold">
                <span className="text-gray-300">Mục tiêu +0.5 Band Hôm Nay:</span>
                <span className="text-emerald-300 font-mono">{progressNotesPercent}% ({notesPlayed}/6,000 Nốt)</span>
              </div>
              <div className="w-36 h-1.5 bg-gray-700 rounded-full overflow-hidden mt-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${progressNotesPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-lg border border-white/10">
            <Flame className={`w-3.5 h-3.5 ${combo > 5 ? 'text-amber-400 animate-bounce' : 'text-gray-400'}`} />
            <span className="text-xs font-extrabold text-amber-300 font-mono">{combo}x</span>
          </div>
        </div>

        {/* Right: Controls & Prominent 1-Click Speed Bar */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* PROMINENT DIRECT SPEED SELECTOR (1-CLICK SWITCH) */}
          <div className="flex items-center bg-black/70 p-1 rounded-xl border border-cyan-500/30 gap-1 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-1 pl-1.5 pr-1 text-[11px] font-black text-amber-400">
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden md:inline uppercase tracking-wider">Tốc độ:</span>
            </div>
            {[
              { val: 0.5, label: '0.5x', title: 'Thong thả' },
              { val: 1.0, label: '1x', title: 'Chuẩn' },
              { val: 1.5, label: '1.5x', title: 'Nhanh' },
              { val: 2.0, label: '2x', title: 'Siêu tốc' },
              { val: 3.0, label: '🔥 3x', title: 'Phản xạ 3X' },
              { val: 10.0, label: '💥 10x', title: 'Thần tốc 10X' }
            ].map(sp => {
              const isActive = fallSpeed === sp.val;
              return (
                <button
                  key={sp.val}
                  onClick={() => handleSetSpeed(sp.val)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-black transition-all transform active:scale-95 cursor-pointer select-none ${
                    isActive
                      ? sp.val === 10
                        ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white shadow-lg shadow-rose-600/50 ring-2 ring-white scale-105 animate-pulse'
                        : sp.val === 3
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/50 ring-2 ring-white scale-105'
                          : sp.val >= 2
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-500/40 ring-2 ring-purple-300 scale-105'
                            : 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 ring-2 ring-cyan-200 scale-105'
                      : 'bg-white/5 hover:bg-white/20 text-gray-300 hover:text-white border border-white/5'
                  }`}
                  title={`Bấm để chuyển ngay sang Tốc độ ${sp.label} (${sp.title})`}
                >
                  {sp.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPlayMode(prev => prev === 'flow' ? 'step' : 'flow')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition ${
                playMode === 'step' 
                  ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/20' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              }`}
              title="Chế độ 'Chờ Phím' (Gõ phím mới rơi nốt câu tiếp theo) vs 'Rơi Tự Do' (Trôi liên tục)"
            >
              {playMode === 'step' ? '🎯 Chờ Phím' : '🌊 Rơi Tự Do'}
            </button>

            <button
              onClick={handleToggleTts}
              className={`p-1.5 rounded-lg border transition ${
                isTtsEnabled 
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                  : 'bg-white/5 border-white/10 text-gray-500'
              }`}
              title={isTtsEnabled ? 'Đang BẬT đọc phát âm tiếng Anh chuẩn khi gõ' : 'Đang TẮT phát âm'}
            >
              <Volume2 className="w-4 h-4" />
            </button>

            <button
              onClick={handleToggleMute}
              className={`p-1.5 rounded-lg border transition ${
                !isAudioMuted 
                  ? 'bg-pink-500/20 border-pink-400 text-pink-300' 
                  : 'bg-white/5 border-white/10 text-gray-500'
              }`}
              title={!isAudioMuted ? 'Đang BẬT âm thanh tiếng đàn Piano' : 'Đang TẮT âm thanh đàn'}
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Music className="w-4 h-4" />}
            </button>

            <button
              onClick={handleAutoAdvanceTopic}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
              title="Chuyển ngay sang gói tiếp theo"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowSettingsModal(true)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
              title="Cài đặt giao diện & phím bấm"
            >
              <Sliders className="w-4 h-4" />
            </button>

            <button
              onClick={handleToggleFullScreen}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
              title="Toàn màn hình"
            >
              {isFullScreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MILESTONE / CONGRATULATIONS BANNER */}
      {milestoneMessage && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-r from-cyan-600 via-indigo-600 to-pink-600 px-6 py-2.5 rounded-2xl shadow-2xl border border-white/30 text-white text-center font-bold text-sm animate-bounce">
          {milestoneMessage}
        </div>
      )}

      {/* 3. MAIN PIANO GAME LANES (4 LANES) WITH FULL UNTRUNCATED CARDS */}
      <div className="relative flex-1 flex flex-row w-full max-w-6xl mx-auto overflow-hidden">
        {[0, 1, 2, 3].map((laneIndex) => {
          const laneKeys = ['D', 'F', 'J', 'K'];
          const isPressed = pressedLanes[laneIndex];

          return (
            <div
              key={laneIndex}
              onClick={() => handleHitNote(laneIndex)}
              className="relative flex-1 h-full border-r last:border-r-0 flex flex-col justify-end cursor-pointer transition-colors"
              style={{
                backgroundColor: isPressed ? 'rgba(255, 255, 255, 0.12)' : curTheme.laneBg,
                borderColor: curTheme.laneBorder
              }}
            >
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background: `radial-gradient(ellipse at 50% 80%, ${curTheme.accentColor} 0%, transparent 70%)`
                }}
              />

              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-gray-500 font-mono font-bold text-xs pointer-events-none opacity-40">
                Làn {laneIndex + 1}
              </div>

              {/* ACTIVE FALLING TILES (100% UNTRUNCATED TEXT) */}
              {activeTiles
                .filter(tile => tile.lane === laneIndex)
                .map((tile) => {
                  const isHit = tile.isHit;
                  const item = tile.item;
                  const isQuestion = item.itemType === 'qa-question' || item.itemType === 'mastery-rule';

                  return (
                    <div
                      key={tile.instanceId}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHitNote(laneIndex, tile.instanceId);
                      }}
                      className="absolute left-1.5 right-1.5 rounded-2xl p-3 shadow-2xl transition-transform flex flex-col justify-between border cursor-pointer select-none"
                      style={{
                        top: `${tile.yProgress}%`,
                        background: isHit 
                          ? curTheme.tileHitGradient 
                          : isQuestion 
                            ? curTheme.tileQuestionGradient 
                            : curTheme.tileGradient,
                        borderColor: isHit ? '#10b981' : isQuestion ? '#fbbf24' : 'rgba(255, 255, 255, 0.35)',
                        boxShadow: isHit ? '0 0 30px rgba(16, 185, 129, 0.8)' : isQuestion ? '0 0 25px rgba(245, 158, 11, 0.6)' : curTheme.tileGlow,
                        transform: `translateY(-50%) ${isHit ? 'scale(0.96)' : 'scale(1)'}`,
                        opacity: isHit ? 0.85 : 1,
                        zIndex: 10
                      }}
                    >
                      {/* Step Badge */}
                      <div className="flex items-center justify-between gap-1 mb-1.5 flex-wrap">
                        {item.qaStepBadge ? (
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border flex items-center gap-1 ${
                            isQuestion 
                              ? 'bg-amber-400 text-black border-amber-300 font-extrabold shadow-sm' 
                              : item.qaCurrentStep === 1 
                                ? 'bg-cyan-400 text-black border-cyan-300' 
                                : item.qaCurrentStep === 2 
                                  ? 'bg-blue-400 text-black border-blue-300' 
                                  : item.qaCurrentStep === 3 
                                    ? 'bg-purple-400 text-black border-purple-300' 
                                    : item.qaCurrentStep === 4 
                                      ? 'bg-pink-400 text-black border-pink-300' 
                                      : 'bg-emerald-400 text-black border-emerald-300'
                          }`}>
                            <Sparkles className="w-2.5 h-2.5" />
                            {item.qaStepBadge}
                          </span>
                        ) : (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-black/40 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                            {item.band || 'Band 8.5+'}
                          </span>
                        )}

                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/20 text-white">
                            🎵 {tile.note}
                          </span>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedInspectItem(item);
                            }}
                            className="p-1 rounded-full bg-black/30 hover:bg-black/60 text-white/90 hover:text-white transition"
                            title="Xem chi tiết giải nghĩa chuyên sâu"
                          >
                            <Info className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Main English Text (NO TRUNCATION, FULL WRAP) */}
                      <div className="my-1">
                        <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug break-words drop-shadow-md">
                          {item.englishText}
                        </h4>
                        {item.phonetic && (
                          <div className="text-[11px] font-mono text-cyan-200/90 mt-0.5">
                            {item.phonetic} {item.pos && <span className="italic text-white/70">({item.pos})</span>}
                          </div>
                        )}
                      </div>

                      {/* Vietnamese Translation (NO TRUNCATION, FULL WRAP) */}
                      <div className="mt-1.5 pt-1.5 border-t border-white/20">
                        <p className="text-[11px] sm:text-xs text-yellow-100 font-medium leading-relaxed break-words">
                          🇻🇳 {item.vietnameseText}
                        </p>
                      </div>

                      {isHit && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-emerald-300 animate-ping pointer-events-none" />
                      )}
                    </div>
                  );
                })}

              {/* HIT LINE */}
              <div 
                className="absolute left-0 right-0 z-20 pointer-events-none flex items-center justify-center"
                style={{
                  bottom: '75px',
                  height: '4px',
                  backgroundColor: curTheme.hitLineColor,
                  boxShadow: `0 0 15px ${curTheme.hitLineColor}`
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              </div>

              {/* RIPPLE EFFECTS */}
              {ripples
                .filter(r => r.lane === laneIndex)
                .map((ripple) => (
                  <div
                    key={ripple.id}
                    className="absolute pointer-events-none rounded-full border-2 border-cyan-400 animate-ping"
                    style={{
                      bottom: '75px',
                      left: '50%',
                      width: '120px',
                      height: '120px',
                      transform: 'translate(-50%, 50%)',
                      zIndex: 25
                    }}
                  />
                ))}

              {/* FLOATING NOTES */}
              {floatingNotes
                .filter(n => n.lane === laneIndex)
                .map((note) => (
                  <div
                    key={note.id}
                    className="absolute pointer-events-none font-bold text-lg animate-bounce"
                    style={{
                      bottom: `${100 - note.y + 10}%`,
                      left: `${note.x}%`,
                      color: note.color,
                      textShadow: `0 0 10px ${note.color}`,
                      transition: 'all 1s ease-out',
                      zIndex: 26
                    }}
                  >
                    {note.symbol}
                  </div>
                ))}

              {/* LANE BOTTOM KEY BUTTON */}
              <div
                className="relative z-30 h-18 py-2 flex flex-col items-center justify-center border-t transition-all"
                style={{
                  backgroundColor: isPressed ? curTheme.accentColor : curTheme.keyBg,
                  borderColor: curTheme.laneBorder,
                  transform: isPressed ? 'scale(0.96)' : 'scale(1)'
                }}
              >
                <span className="text-[10px] font-mono text-gray-300">Phím</span>
                <span className="text-xl font-black text-white tracking-widest leading-none my-0.5">
                  [{laneKeys[laneIndex]}]
                </span>
                <span className="text-[9px] text-gray-400">
                  {laneIndex === 0 && 'Do (C)'}
                  {laneIndex === 1 && 'Mi (E)'}
                  {laneIndex === 2 && 'Sol (G)'}
                  {laneIndex === 3 && 'Do (C5)'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. INTERACTIVE VIRTUAL PIANO KEYBOARD */}
      <div className="w-full max-w-6xl mx-auto px-2 py-2 bg-black/60 border-t border-white/10 flex items-center justify-center gap-1 z-30 overflow-x-auto no-scrollbar">
        {[
          { note: 'C4', key: 'A', lane: 0, isBlack: false },
          { note: 'C#4', key: 'W', lane: 0, isBlack: true },
          { note: 'D4', key: 'S', lane: 0, isBlack: false },
          { note: 'D#4', key: 'E', lane: 1, isBlack: true },
          { note: 'E4', key: 'D', lane: 1, isBlack: false },
          { note: 'F4', key: 'F', lane: 1, isBlack: false },
          { note: 'F#4', key: 'T', lane: 2, isBlack: true },
          { note: 'G4', key: 'G', lane: 2, isBlack: false },
          { note: 'G#4', key: 'Y', lane: 2, isBlack: true },
          { note: 'A4', key: 'H', lane: 2, isBlack: false },
          { note: 'A#4', key: 'U', lane: 3, isBlack: true },
          { note: 'B4', key: 'J', lane: 3, isBlack: false },
          { note: 'C5', key: 'K', lane: 3, isBlack: false },
          { note: 'D5', key: 'L', lane: 3, isBlack: false }
        ].map((k) => (
          <button
            key={k.note}
            onClick={() => handleHitNote(k.lane)}
            className={`relative rounded-b-lg font-mono text-[10px] font-bold transition-all flex flex-col justify-end items-center pb-1 ${
              k.isBlack 
                ? 'w-7 h-14 bg-slate-900 text-cyan-300 border border-cyan-500/40 -mx-3.5 z-20 hover:bg-slate-800 active:bg-cyan-600' 
                : 'w-10 h-20 bg-white/90 text-slate-900 border border-slate-300 shadow-md z-10 hover:bg-white active:bg-cyan-200'
            }`}
          >
            <span className="text-[9px] opacity-75">{k.note}</span>
            <span className="font-extrabold text-[11px]">{k.key}</span>
          </button>
        ))}
      </div>

      {/* 5. DAILY +0.5 BAND DASHBOARD & MILESTONE GATES MODAL */}
      {showBandDashboard && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowBandDashboard(false)}
        >
          <div 
            className="w-full max-w-2xl bg-slate-900/95 border border-cyan-500/40 rounded-3xl p-6 shadow-2xl text-white max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  🎯 LỘ TRÌNH ĐẠT +0.5 BAND HÔM NAY
                </span>
                <h3 className="text-xl font-black text-white mt-1 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" /> Bảng Đo Đạc 5 Cổng Mốc (KPI Gates)
                </h3>
              </div>
              <button
                onClick={() => setShowBandDashboard(false)}
                className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold"
              >
                Đóng
              </button>
            </div>

            {/* Top Score Summary Cards */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center">
                <div className="text-[10px] text-indigo-300 font-bold uppercase mb-1">Thời Gian Chơi Hôm Nay</div>
                <div className="text-base sm:text-lg font-mono font-black text-indigo-200">{formatPlaytime(playtimeSeconds)}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Mục tiêu: 10 Tiếng</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center">
                <div className="text-[10px] text-cyan-300 font-bold uppercase mb-1">Tổng Nốt Đã Đánh</div>
                <div className="text-base sm:text-lg font-mono font-black text-cyan-200">{notesPlayed} / 6,000</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Tiến độ: {progressNotesPercent}%</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center">
                <div className="text-[10px] text-emerald-300 font-bold uppercase mb-1">Mức Tăng Ước Tính</div>
                <div className="text-base sm:text-lg font-mono font-black text-emerald-300">+{overallBandGain} Band</div>
                <div className="text-[10px] text-emerald-400/80 mt-0.5">Mục tiêu: +0.50 Band</div>
              </div>
            </div>

            {/* 5 Milestone Gates Roadmap */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Trạng Thái 5 Cổng Mốc Đạt Chuẩn:</h4>
              {gates.map((g) => (
                <div 
                  key={g.gate}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                    g.passed 
                      ? 'bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-500/10' 
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      g.passed ? 'bg-emerald-500 text-black' : 'bg-white/10 text-gray-400'
                    }`}>
                      {g.passed ? <CheckCircle2 className="w-5 h-5" /> : `G${g.gate}`}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>{g.name}</span>
                        {g.passed && <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">HOÀN THÀNH</span>}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        Chỉ tiêu: <span className="text-cyan-300 font-mono font-bold">{g.notes} Nốt</span> ({g.time} học tập)
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-xs font-mono font-black ${g.passed ? 'text-emerald-300' : 'text-gray-400'}`}>
                      {g.gain}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tip Footer */}
            <div className="mt-5 p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Bí quyết đạt chuẩn:</strong> Khi đạt đủ <strong>6,000 nốt (10 tiếng)</strong> và vượt qua cả 5 Gate, toàn bộ 1,000 câu mẫu và 8 cấu trúc ngữ pháp Band 8.5+ sẽ ngấm sâu thành phản xạ tự nhiên giúp bạn chắc chắn nâng +0.5 Band!
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 6. TOPIC SELECTION MODAL (INCLUDING 5 CORE MASTERY PILLARS) */}
      {showTopicModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowTopicModal(false)}
        >
          <div 
            className="w-full max-w-4xl bg-slate-900/95 border border-white/20 rounded-2xl p-6 max-h-[85vh] flex flex-col shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2 text-cyan-400">
                  <Layers className="w-5 h-5" /> Danh Mục Toàn Bộ Kiến Thức IELTS (1000 Q&A + 5 Trụ Cột Cốt Lõi)
                </h3>
                <p className="text-xs text-gray-400">
                  Chọn chủ đề để luyện phím đàn song ngữ và củng cố toàn diện 4 kỹ năng
                </p>
              </div>
              <button
                onClick={() => setShowTopicModal(false)}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
              >
                Đóng
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-3 border-b border-white/10 no-scrollbar">
              <button
                onClick={() => setCategory('grammar-mastery')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'grammar-mastery' ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>🏛️ 8 Cấu Trúc Ngữ Pháp 8.5+</span>
              </button>

              <button
                onClick={() => setCategory('connectors-matrix')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'connectors-matrix' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>🔗 Ma Trận Từ Nối Cohesion</span>
              </button>

              <button
                onClick={() => setCategory('paraphrase-matrix')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'paraphrase-matrix' ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>📚 Bảng Paraphrase Thay Thế</span>
              </button>

              <button
                onClick={() => setCategory('spoken-idioms')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'spoken-idioms' ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>🎙️ Thành Ngữ Spoken Idioms</span>
              </button>

              <button
                onClick={() => setCategory('listening-phonology')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'listening-phonology' ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>🎧 Ngữ Âm Nối Âm & Bẫy Listening</span>
              </button>

              <button
                onClick={() => setCategory('qa-speaking')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'qa-speaking' ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>🎙️ 500 Speaking Q&A</span>
              </button>

              <button
                onClick={() => setCategory('qa-writing')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'qa-writing' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>✍️ 500 Writing Q&A</span>
              </button>

              <button
                onClick={() => setCategory('chapter')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'chapter' ? 'bg-cyan-500 text-black' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>100 Chương Novel</span>
              </button>

              <button
                onClick={() => setCategory('mistakes')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'mistakes' ? 'bg-amber-500 text-black' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Bẫy Lỗi 5.0-8.0</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Tìm nhanh theo chủ đề tiếng Việt hoặc tiếng Anh..."
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Topics Grid */}
            <div className="overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 flex-1">
              {filteredCatalog.map((t) => {
                const isSelected = t.id === topicId;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTopicId(t.id);
                      setShowTopicModal(false);
                    }}
                    className={`p-3 rounded-xl text-left border transition flex flex-col justify-between ${
                      isSelected 
                        ? 'bg-cyan-500/20 border-cyan-400 shadow-lg shadow-cyan-500/20' 
                        : 'bg-white/5 hover:bg-white/10 border-white/10'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {t.categoryName}
                        </span>
                        <span className="text-[10px] text-cyan-300 font-mono font-bold">
                          ID: {t.id}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white line-clamp-1 mb-0.5">
                        {t.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 italic line-clamp-1">
                        {t.titleEn}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-gray-400 mt-2">
                      <span>🎵 Giai điệu học tập</span>
                      <span className="text-amber-300 font-bold">{t.itemCount} Nốt đàn</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 7. SETTINGS MODAL */}
      {showSettingsModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowSettingsModal(false)}
        >
          <div 
            className="w-full max-w-md bg-slate-900/95 border border-white/20 rounded-2xl p-6 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="text-base font-bold flex items-center gap-2 text-cyan-400">
                <Sliders className="w-5 h-5" /> Tùy Chỉnh Game Đàn Piano
              </h3>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs"
              >
                Đóng
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-gray-300 block mb-1.5">Giao diện màu (Theme):</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'pastel', label: '🌸 Pastel Magic Tiles' },
                    { id: 'cyber', label: '⚡ Cyber Neon Dark' },
                    { id: 'sakura', label: '🌺 Cherry Blossom' },
                    { id: 'galaxy', label: '🌌 Midnight Galaxy' },
                    { id: 'sunset', label: '🌇 Lo-Fi Sunset' }
                  ].map((th) => (
                    <button
                      key={th.id}
                      onClick={() => setGameTheme(th.id as any)}
                      className={`p-2 rounded-xl text-left border transition ${
                        gameTheme === th.id ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold' : 'bg-white/5 border-white/10 text-gray-300'
                      }`}
                    >
                      {th.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Falling Speed Multipliers */}
              <div>
                <label className="font-bold text-gray-300 block mb-1.5 flex items-center justify-between">
                  <span>Tốc độ rơi phím nốt đàn (Falling Speed):</span>
                  <span className={`font-mono font-black text-xs px-2 py-0.5 rounded-full border ${
                    fallSpeed >= 10 
                      ? 'bg-rose-500/20 border-rose-400 text-rose-300 animate-pulse' 
                      : fallSpeed >= 3 
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                        : 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                  }`}>
                    {fallSpeed}x {fallSpeed === 10 ? '💥 THẦN TỐC' : fallSpeed === 3 ? '🔥 PHẢN XẠ 3X' : ''}
                  </span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-2">
                  {[
                    { val: 0.5, label: '0.5x', desc: 'Thong thả' },
                    { val: 1.0, label: '1.0x', desc: 'Tiêu chuẩn' },
                    { val: 1.5, label: '1.5x', desc: 'Nhanh' },
                    { val: 2.0, label: '2.0x', desc: 'Siêu tốc' },
                    { val: 3.0, label: '3.0x', desc: 'Phản xạ 3X' },
                    { val: 10.0, label: '10x', desc: 'Thần tốc 10X' }
                  ].map((sp) => (
                    <button
                      key={sp.val}
                      onClick={() => handleSetSpeed(sp.val)}
                      className={`p-2 rounded-xl text-center border transition flex flex-col items-center justify-center ${
                        fallSpeed === sp.val
                          ? sp.val === 10
                            ? 'bg-rose-500/30 border-rose-400 text-rose-300 font-black shadow-lg shadow-rose-500/30 ring-1 ring-rose-400'
                            : sp.val === 3
                              ? 'bg-amber-500/30 border-amber-400 text-amber-300 font-black shadow-lg shadow-amber-500/30 ring-1 ring-amber-400'
                              : 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="font-mono font-black text-xs">{sp.label}</span>
                      <span className="text-[9px] opacity-75">{sp.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-300 block mb-1">Tốc độ đọc phát âm tiếng Anh (TTS):</label>
                <input 
                  type="range" 
                  min="0.7" 
                  max="1.3" 
                  step="0.05" 
                  defaultValue="0.95"
                  onChange={(e) => pianoAudio.setTtsRate(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-cyan-300">⌨️ Phím tắt chơi đàn trên bàn phím:</div>
                <div className="text-gray-300 text-[11px]">• 4 Làn chuẩn: <span className="text-amber-300 font-mono font-bold">D, F, J, K</span> hoặc <span className="text-amber-300 font-mono font-bold">1, 2, 3, 4</span></div>
                <div className="text-gray-300 text-[11px]">• Phím cách: <span className="text-amber-300 font-mono font-bold">Spacebar</span> (Gõ nốt gần nhất)</div>
                <div className="text-gray-300 text-[11px]">• Phím Piano thật: <span className="text-amber-300 font-mono font-bold">A, W, S, E, D, F, T, G, Y, H, U, J, K</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. DEEP INSPECTION POPUP MODAL FOR KNOWLEDGE ITEM */}
      {selectedInspectItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedInspectItem(null)}
        >
          <div 
            className="w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl text-white max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {selectedInspectItem.qaStepBadge || selectedInspectItem.categoryLabel}
                </span>
                <h3 className="text-lg font-black text-white mt-1 leading-snug">
                  {selectedInspectItem.englishText}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => pianoAudio.speakEnglish(selectedInspectItem.englishText)}
                  className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 transition"
                  title="Phát âm tiếng Anh"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedInspectItem(null)}
                  className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold"
                >
                  Đóng
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                <div className="text-[10px] font-bold text-cyan-400 uppercase mb-1">Nghĩa tiếng Việt</div>
                <div className="text-sm font-bold text-yellow-200 leading-relaxed">
                  {selectedInspectItem.vietnameseText}
                </div>
              </div>

              {selectedInspectItem.exampleSentence && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Câu ví dụ / Ngữ cảnh ứng dụng</div>
                  <div className="text-xs text-gray-200 italic font-serif">
                    "{selectedInspectItem.exampleSentence}"
                  </div>
                  {selectedInspectItem.exampleSentenceVi && (
                    <div className="text-[11px] text-gray-400 mt-1">
                      🇻🇳 {selectedInspectItem.exampleSentenceVi}
                    </div>
                  )}
                </div>
              )}

              {selectedInspectItem.collocations && selectedInspectItem.collocations.length > 0 && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Collocations & Cụm từ ghi điểm Band 8.5+</div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedInspectItem.collocations.map((col, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-medium">
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedInspectItem.explanation && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Phân tích & Hướng dẫn chiến lược</div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {selectedInspectItem.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 9. 100 FAMOUS PIANO SONGS SELECTOR MODAL */}
      {showSongModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowSongModal(false)}
        >
          <div 
            className="w-full max-w-4xl bg-slate-900/95 border border-pink-500/40 rounded-2xl p-6 max-h-[85vh] flex flex-col shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  🎵 KHO 100 BẢN NHẠC PIANO BẤT HỦ
                </span>
                <h3 className="text-xl font-black text-white mt-1 flex items-center gap-2">
                  <Music className="w-5 h-5 text-pink-400" /> Chọn Bản Nhạc Đàn Yêu Thích
                </h3>
                <p className="text-xs text-gray-400">
                  Giai điệu Rush E, Ánh Trăng Beethoven, Anime Ghibli, Nhạc Phim Bom Tấn & Pop Ballad Quốc Tế
                </p>
              </div>
              <button
                onClick={() => setShowSongModal(false)}
                className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold"
              >
                Đóng
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-3 border-b border-white/10 no-scrollbar">
              {[
                { id: 'all', label: 'Tất Cả (100 Bài)', color: 'bg-white/10 text-white' },
                { id: 'meme', label: '⚡ Meme & Cực Nhanh (Rush E...)', color: 'bg-amber-500 text-black' },
                { id: 'classical', label: '🎹 Cổ Điển (Ánh Trăng, Elise...)', color: 'bg-indigo-500 text-white' },
                { id: 'anime', label: '🌸 Anime & Ghibli (Laputa, Spirited...)', color: 'bg-pink-500 text-white' },
                { id: 'movie', label: '🎬 Nhạc Phim (Interstellar, Pirates...)', color: 'bg-teal-500 text-white' },
                { id: 'pop', label: '💖 Pop & Ballad (Yiruma, JVKE...)', color: 'bg-rose-500 text-white' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSongCategoryFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    songCategoryFilter === cat.id 
                      ? `${cat.color} shadow-lg font-black` 
                      : 'bg-white/5 hover:bg-white/10 text-gray-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Tìm tên bài hát hoặc tác giả (Rush E, Moonlight, Beethoven, Ghibli, Yiruma, Adele...)..."
                value={songSearchQuery}
                onChange={(e) => setSongSearchQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
              />
            </div>

            {/* Song Grid */}
            <div className="overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 flex-1">
              {filteredSongs.map((song) => {
                const isSelected = selectedSong.id === song.id;
                return (
                  <button
                    key={song.id}
                    onClick={() => {
                      setSelectedSong(song);
                      setSongNoteIndex(0);
                      setShowSongModal(false);
                      pianoAudio.playPianoNote(song.notes[0], 1.5, 0.9);
                    }}
                    className={`p-3 rounded-2xl text-left border transition flex flex-col justify-between ${
                      isSelected
                        ? 'bg-pink-500/20 border-pink-400 shadow-lg shadow-pink-500/20 ring-1 ring-pink-400'
                        : 'bg-white/5 hover:bg-white/10 border-white/10'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                          {song.categoryLabel}
                        </span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                          song.difficulty === 'Cực Hạn' ? 'bg-red-500/30 text-red-300 border-red-500/50' :
                          song.difficulty === 'Nhanh' ? 'bg-amber-500/30 text-amber-300 border-amber-500/50' :
                          song.difficulty === 'Vừa' ? 'bg-blue-500/30 text-blue-300 border-blue-500/50' :
                          'bg-emerald-500/30 text-emerald-300 border-emerald-500/50'
                        }`}>
                          {song.difficulty}
                        </span>
                      </div>
                      <h4 className="text-xs font-black text-white line-clamp-1 mb-0.5">
                        {song.title}
                      </h4>
                      <p className="text-[11px] text-pink-200/80 italic line-clamp-1 mb-1">
                        ✍️ {song.author}
                      </p>
                      <p className="text-[10px] text-gray-400 line-clamp-2">
                        {song.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-gray-400 mt-2">
                      <span>🎹 {song.notes.length} Nốt phím</span>
                      {isSelected ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Đang chơi
                        </span>
                      ) : (
                        <span className="text-pink-300 font-bold hover:underline">
                          Chọn bài này →
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
