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
  Infinity as InfinityIcon
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
  lane: number; // 0, 1, 2, 3
  yProgress: number; // 0 (top) to 100 (bottom hit line)
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

export const PianoTilesGame: React.FC<PianoTilesGameProps> = ({
  initialCategory = 'qa-speaking',
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
  const [fallSpeed, setFallSpeed] = useState<number>(0.9); // Slower gentle speed so learner can read full text

  const [activeTiles, setActiveTiles] = useState<ActiveTile[]>([]);
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [floatingNotes, setFloatingNotes] = useState<FloatingNote[]>([]);
  const [pressedLanes, setPressedLanes] = useState<{ [key: number]: boolean }>({ 0: false, 1: false, 2: false, 3: false });

  // Game Statistics & Streaks
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [notesPlayed, setNotesPlayed] = useState<number>(0);
  const [wordsMastered, setWordsMastered] = useState<number>(0);

  // Audio / Speech Settings
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState<boolean>(true);

  // Visual Theme & Details Modal
  const [gameTheme, setGameTheme] = useState<'pastel' | 'cyber' | 'sakura' | 'galaxy' | 'sunset'>('pastel');
  const [selectedInspectItem, setSelectedInspectItem] = useState<PianoKnowledgeItem | null>(null);
  const [showTopicModal, setShowTopicModal] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
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

  // 1. Load Knowledge Items when Category or Topic ID changes
  useEffect(() => {
    const items = getPianoKnowledgeItems(category, topicId);
    setKnowledgeItems(items);
    setCurrentItemIndex(0);
    setActiveTiles([]);
    itemIndexRef.current = 0;
  }, [category, topicId]);

  // 2. Spawn next knowledge tile
  const spawnTile = useCallback(() => {
    if (knowledgeItems.length === 0) return;

    const currentIdx = itemIndexRef.current;
    if (currentIdx >= knowledgeItems.length) {
      // Reached end of current topic -> Trigger smooth transition to NEXT TOPIC!
      handleAutoAdvanceTopic();
      return;
    }

    const item = knowledgeItems[currentIdx];
    const song = selectedSong;
    const note = song.notes[songIndexRef.current % song.notes.length];

    // Distribute across 4 lanes sequentially / pleasantly
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

    setActiveTiles(prev => [...prev.slice(-10), newTile]);
    setCurrentItemIndex(prev => prev + 1);
    setSongNoteIndex(prev => prev + 1);
  }, [knowledgeItems, selectedSong]);

  // 3. Auto-Advance to Next Topic (Endless 10-Hour Marathon Flow)
  const handleAutoAdvanceTopic = useCallback(() => {
    const next = getNextTopic(category, topicId);
    setMilestoneMessage(`🎉 Chúc Mừng Bạn! Đang tự động chuyển tiếp sang: ${next.nextTitle}`);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 }
    });
    pianoAudio.playSuccessChime();

    // Auto-advance after a gentle delay without stopping the game
    setTimeout(() => {
      setCategory(next.nextCategory);
      setTopicId(next.nextTopicId);
      setMilestoneMessage(null);
    }, 2800);
  }, [category, topicId]);

  // 4. Hit / Tap Note Action
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

    // Lane press visual feedback
    setPressedLanes(prev => ({ ...prev, [laneIndex]: true }));
    setTimeout(() => {
      setPressedLanes(prev => ({ ...prev, [laneIndex]: false }));
    }, 150);

    // If step mode and no tile in lane, spawn next tile on hit!
    if (playMode === 'step' && !targetTile) {
      spawnTile();
    }

    // Determine note to play
    const song = selectedSong;
    const note = targetTile ? targetTile.note : song.notes[songIndexRef.current % song.notes.length];

    // Play Piano Sound
    pianoAudio.playPianoNote(note, 1.8, 0.9);

    // Trigger visual ripple & floating music notes
    triggerVisualFX(laneIndex);

    if (targetTile) {
      const hitTile = targetTile;
      setActiveTiles(prev => prev.map(t => t.instanceId === hitTile.instanceId ? { ...t, isHit: true } : t));

      // Speak English text (TTS)
      if (isTtsEnabled) {
        pianoAudio.speakEnglish(hitTile.item.englishText);
      }

      // Update scores & combos
      setScore(prev => prev + 100 + combo * 10);
      setCombo(prev => {
        const next = prev + 1;
        setMaxCombo(m => Math.max(m, next));
        return next;
      });
      setNotesPlayed(prev => prev + 1);
      setWordsMastered(prev => prev + 1);

      // In step mode, spawn next sentence/note upon hitting
      if (playMode === 'step') {
        setTimeout(() => spawnTile(), 300);
      }
    } else {
      setNotesPlayed(prev => prev + 1);
      setSongNoteIndex(prev => prev + 1);
    }
  }, [playMode, selectedSong, isTtsEnabled, combo, spawnTile]);

  // 5. Visual Effects (Ripple wave rings & Floating symbols)
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

  // Clean up expired ripples & floating notes
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      setRipples(prev => prev.filter(r => now - r.timestamp < 600));
      setFloatingNotes(prev => prev.filter(n => now - n.id < 1200));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  // 6. Smooth Animation Loop for Falling Tiles
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

        // Gentle falling movement (adjusted for clear reading without rush)
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

  // Initial spawn
  useEffect(() => {
    if (knowledgeItems.length > 0 && activeTiles.length === 0) {
      spawnTile();
      if (playMode === 'flow') {
        setTimeout(() => spawnTile(), 1900);
      }
    }
  }, [knowledgeItems, playMode, spawnTile]);

  // 7. Keyboard Shortcuts (D, F, J, K | 1, 2, 3, 4 | Space | Piano Keys)
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

  // Theme styling configurations
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

  const topicsCatalog = getTopicsCatalogForCategory(category);
  const filteredCatalog = topicsCatalog.filter(t => 
    t.title.toLowerCase().includes(topicFilter.toLowerCase()) ||
    t.titleEn.toLowerCase().includes(topicFilter.toLowerCase())
  );

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col h-full w-full select-none overflow-hidden text-white font-sans"
      style={{ background: curTheme.bg }}
    >
      {/* 1. TOP HEADER / STATS HUD */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-white/10 backdrop-blur-md z-30">
        {/* Left: Topic Selector & Song Selector */}
        <div className="flex items-center gap-2">
          {/* Topic Switcher Button */}
          <button
            onClick={() => setShowTopicModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-left transition group shadow-md"
            title="Đổi bộ câu hỏi / chủ đề (500 Speaking Q&A, 500 Writing Q&A, 100 Chương Novel)"
          >
            <Layers className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                {category === 'qa-speaking' && `🎙️ Speaking Q&A Gói ${topicId}/25`}
                {category === 'qa-writing' && `✍️ Writing Q&A Gói ${topicId}/25`}
                {category === 'qa-master' && `♾️ Master 1000 Q&A Giai Đoạn ${topicId}/34`}
                {category === 'chapter' && `📖 Chương ${topicId}/100 • Novel`}
                {category === 'writing' && `Writing Lab ${topicId}/100`}
                {category === 'speaking' && `Speaking ${topicId}/100`}
                {category === 'listening' && `Listening ${topicId}/100`}
                {category === 'mistakes' && `Bẫy Lỗi 5.0 - 8.0`}
                {category === 'vocab-vault' && `Kho Từ Vựng Nhóm ${topicId}`}
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[170px] sm:max-w-[240px]">
                {knowledgeItems[0]?.topicTitle || 'Chủ Đề 1000 Q&A'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
          </button>

          {/* Song Melody Selector */}
          <div className="relative group hidden sm:block">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-pink-300 transition"
              title="Đổi bản nhạc Piano đang chơi"
            >
              <Music className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span className="truncate max-w-[120px]">{selectedSong.title}</span>
            </button>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col w-56 bg-slate-900/95 backdrop-blur-md border border-white/15 rounded-xl p-1.5 shadow-2xl z-50">
              <div className="text-[10px] font-bold text-gray-400 px-2 py-1 uppercase">Giai Điệu Piano</div>
              {PIANO_SONGS.map(song => (
                <button
                  key={song.id}
                  onClick={() => {
                    setSelectedSong(song);
                    setSongNoteIndex(0);
                  }}
                  className={`text-left px-2.5 py-1.5 rounded-lg text-xs transition flex flex-col ${
                    selectedSong.id === song.id ? 'bg-pink-500/20 text-pink-300 font-bold' : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>🎵 {song.title}</span>
                  <span className="text-[10px] text-gray-400">{song.author}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Progress & Combo Counter */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-xl border border-white/10">
            <Flame className={`w-4 h-4 ${combo > 5 ? 'text-amber-400 animate-bounce' : 'text-gray-400'}`} />
            <span className="text-xs font-extrabold text-amber-300">
              {combo} <span className="text-[10px] font-normal text-gray-400">COMBO</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-white/5 px-3 py-1 rounded-xl border border-white/10">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-extrabold text-cyan-300">
              {notesPlayed} <span className="text-[10px] font-normal text-gray-400">NỐT ĐÀN</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-white/5 px-3 py-1 rounded-xl border border-white/10">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-extrabold text-emerald-300">
              {currentItemIndex}/{knowledgeItems.length} <span className="text-[10px] font-normal text-gray-400">TIẾN ĐỘ</span>
            </span>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1.5">
          {/* Play Mode: Flow vs Step */}
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

          {/* Speed Selector */}
          <div className="relative group">
            <button
              className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-cyan-300 transition"
              title="Tốc độ rơi nốt"
            >
              {fallSpeed <= 0.7 && '🐢 0.7x'}
              {fallSpeed > 0.7 && fallSpeed <= 1.0 && '🚶 1.0x'}
              {fallSpeed > 1.0 && fallSpeed <= 1.5 && '🏃 1.5x'}
              {fallSpeed > 1.5 && '⚡ 2.0x'}
            </button>
            <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col w-32 bg-slate-900/95 backdrop-blur-md border border-white/15 rounded-xl p-1 shadow-xl z-50">
              <button
                onClick={() => setFallSpeed(0.7)}
                className={`text-left px-2 py-1 text-xs rounded ${fallSpeed === 0.7 ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
              >
                🐢 Rất Chậm (0.7x)
              </button>
              <button
                onClick={() => setFallSpeed(0.9)}
                className={`text-left px-2 py-1 text-xs rounded ${fallSpeed === 0.9 ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
              >
                🚶 Chậm Chuẩn (0.9x)
              </button>
              <button
                onClick={() => setFallSpeed(1.4)}
                className={`text-left px-2 py-1 text-xs rounded ${fallSpeed === 1.4 ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
              >
                🏃 Vừa Phải (1.4x)
              </button>
              <button
                onClick={() => setFallSpeed(2.0)}
                className={`text-left px-2 py-1 text-xs rounded ${fallSpeed === 2.0 ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-gray-300 hover:bg-white/5'}`}
              >
                ⚡ Nhanh (2.0x)
              </button>
            </div>
          </div>

          {/* TTS Audio Speech Toggle */}
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

          {/* Mute Piano Sound */}
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

          {/* Next Topic Button */}
          <button
            onClick={handleAutoAdvanceTopic}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
            title="Chuyển ngay sang gói câu hỏi tiếp theo"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          {/* Settings Modal Toggle */}
          <button
            onClick={() => setShowSettingsModal(true)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
            title="Cài đặt giao diện & phím bấm"
          >
            <Sliders className="w-4 h-4" />
          </button>

          {/* Full Screen */}
          <button
            onClick={handleToggleFullScreen}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition"
            title="Toàn màn hình"
          >
            {isFullScreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
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
              {/* Lane Ambient Background Floating Light */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background: `radial-gradient(ellipse at 50% 80%, ${curTheme.accentColor} 0%, transparent 70%)`
                }}
              />

              {/* Lane Key Guide Indicator at Top */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-gray-500 font-mono font-bold text-xs pointer-events-none opacity-40">
                Làn {laneIndex + 1}
              </div>

              {/* ACTIVE FALLING TILES IN THIS LANE (100% UNTRUNCATED TEXT) */}
              {activeTiles
                .filter(tile => tile.lane === laneIndex)
                .map((tile) => {
                  const isHit = tile.isHit;
                  const item = tile.item;
                  const isQuestion = item.itemType === 'qa-question';

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
                      {/* Top Bar of Tile: Step Role Badge & Note Tag */}
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

                      {/* Tap Prompt Ripple Ring on Tile */}
                      {isHit && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-emerald-300 animate-ping pointer-events-none" />
                      )}
                    </div>
                  );
                })}

              {/* HIT LINE / TARGET STRIKE ZONE */}
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

              {/* RIPPLE EFFECT WAVES ON TAP */}
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

              {/* FLOATING MUSIC SYMBOLS & PARTICLES */}
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

              {/* LANE BOTTOM KEY BUTTON (PRESSABLE) */}
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

      {/* 5. TOPIC SELECTION MODAL (1000 Q&A MASTER, 500 SPEAKING, 500 WRITING, NOVEL CHAPTERS) */}
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
                  <Layers className="w-5 h-5" /> Danh Mục 1000 Câu Hỏi & Câu Trả Lời Mẫu IELTS (Chuỗi 5 Câu)
                </h3>
                <p className="text-xs text-gray-400">
                  Nốt 1 là Câu hỏi ➔ Các nốt sau là từng câu trả lời hoàn chỉnh Band 8.5+ không bị che chữ
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
                onClick={() => setCategory('qa-speaking')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'qa-speaking' ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>🎙️ 500 Speaking Q&A (25 Gói)</span>
              </button>

              <button
                onClick={() => setCategory('qa-writing')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'qa-writing' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>✍️ 500 Writing Q&A (Task 1 & 2)</span>
              </button>

              <button
                onClick={() => setCategory('qa-master')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  category === 'qa-master' ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg' : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
              >
                <InfinityIcon className="w-3.5 h-3.5" />
                <span>♾️ Master 1000 Q&A Bất Tận</span>
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
                placeholder="Tìm nhanh theo chủ đề Q&A, câu hỏi tiếng Việt hoặc tiếng Anh..."
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
                      <span>🎵 Chuỗi 5 Câu Mẫu</span>
                      <span className="text-amber-300 font-bold">{t.itemCount} Nốt đàn</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 6. SETTINGS MODAL */}
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
              {/* Theme Picker */}
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

              {/* Audio Speed Rate */}
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

              {/* Keyboard Shortcuts Info */}
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

      {/* 7. DEEP INSPECTION POPUP MODAL FOR KNOWLEDGE ITEM */}
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
                  <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Câu hỏi / Ngữ cảnh gốc</div>
                  <div className="text-xs text-gray-200 italic font-serif">
                    "{selectedInspectItem.exampleSentence}"
                  </div>
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
                  <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Chiến lược & Hướng dẫn</div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {selectedInspectItem.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
