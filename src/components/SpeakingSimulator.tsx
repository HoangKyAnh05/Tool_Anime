import React, { useState, useEffect } from 'react';
import { getSpeakingChapter, SpeakingChapter } from '../data/speaking/speakingData';
import { AnimeCharacterCard } from './AnimeCharacterCard';
import { 
  Mic, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Clock, 
  Sparkles, 
  ListFilter,
  Layers,
  Award,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { speakWord } from '../utils/speech';

export const SpeakingSimulator: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState(1);
  const [activePart, setActivePart] = useState<'part1' | 'part2' | 'part3'>('part1');
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  // 1-minute prep timer for Part 2
  const [prepSeconds, setPrepSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const chapter: SpeakingChapter = getSpeakingChapter(currentChapterId);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && prepSeconds > 0) {
      interval = setInterval(() => {
        setPrepSeconds(prev => prev - 1);
      }, 1000);
    } else if (prepSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, prepSeconds]);

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setPrepSeconds(60);
  };

  const allChapterTitles = Array.from({ length: 100 }, (_, i) => {
    const ch = getSpeakingChapter(i + 1);
    return { id: ch.id, title: ch.title, topic: ch.topic };
  });

  const filteredTitles = allChapterTitles.filter(t => 
    t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    t.topic.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Top Header Banner */}
        <div className="glass-panel p-6 border-l-4 border-l-rose-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  IELTS Speaking Band 8.0 • Shadowing Lab
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-cyan-400 font-semibold">
                  {chapter.topic}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
                {chapter.title}
              </h2>
            </div>

            {/* Chapter Navigator Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentChapterId(prev => Math.max(1, prev - 1))}
                disabled={currentChapterId <= 1}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-30 transition border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowChapterModal(true)}
                className="px-4 py-2 rounded-xl bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500/40 text-xs font-bold text-rose-200 hover:text-white transition flex items-center gap-1.5"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Chọn Chương ({currentChapterId}/100)</span>
              </button>

              <button
                onClick={() => setCurrentChapterId(prev => Math.min(100, prev + 1))}
                disabled={currentChapterId >= 100}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-30 transition border border-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Anime Coach Visual Card */}
        <div className="h-56 md:h-64 w-full">
          <AnimeCharacterCard character={chapter.coach} className="h-full" />
        </div>

        {/* Fluency Tip Pill */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{chapter.fluencyTip}</span>
        </div>

        {/* Part Tabs Switcher */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
          <button
            onClick={() => setActivePart('part1')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activePart === 'part1'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Part 1: Phỏng Vấn Tự Nhiên</span>
          </button>

          <button
            onClick={() => setActivePart('part2')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activePart === 'part2'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Part 2: Thẻ Gợi Ý & Đồng Hồ 1 Phút</span>
          </button>

          <button
            onClick={() => setActivePart('part3')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activePart === 'part3'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Part 3: Biện Luận Trừu Tượng 8.5</span>
          </button>
        </div>

        {/* --- PART 1 --- */}
        {activePart === 'part1' && (
          <div className="space-y-4 animate-fade-in">
            {chapter.part1.map((item, idx) => (
              <div key={idx} className="glass-panel-glow p-5 rounded-2xl border border-white/10 space-y-3" style={{ background: 'var(--bg-card)' }}>
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-mono">
                      Q{idx + 1}
                    </span>
                    {item.question}
                  </h4>

                  <button
                    onClick={() => speakWord(item.band8Answer)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold transition flex-shrink-0"
                    title="Nghe giọng đọc bản xứ để nhại giọng (Shadowing)"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Luyện Shadowing</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-sm text-gray-200 font-serif leading-relaxed">
                  "{item.band8Answer}"
                </div>

                <p className="text-xs text-emerald-300 italic">
                  Bản dịch: {item.answerVi}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.keyIdioms.map((idiom, idIdx) => (
                    <span key={idIdx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-200 font-medium">
                      ✦ {idiom}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- PART 2 CUE CARD --- */}
        {activePart === 'part2' && (
          <div className="space-y-5 animate-fade-in">
            {/* 1-Minute Prep Countdown Timer */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-purple-950/20">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Đồng Hồ Bấm Giờ 1 Phút Chuẩn Bị (Official Exam Simulation):
                  </span>
                  <span className="text-xs text-gray-400">
                    Hãy tận dụng 60 giây để ghi chép các từ khóa (bullet points) trước khi nói
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono font-extrabold text-cyan-400">
                  00:{prepSeconds < 10 ? `0${prepSeconds}` : prepSeconds}
                </span>

                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleResetTimer}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 transition"
                  title="Đặt lại 60s"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Cue Card Frame */}
            <div className="glass-panel-glow p-6 md:p-8 rounded-2xl border border-purple-500/40 space-y-4" style={{ background: 'var(--bg-card)' }}>
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-300">
                  IELTS Speaking Part 2 Cue Card
                </span>
                <button
                  onClick={() => speakWord(chapter.part2.twoMinuteModelSpeech)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 text-xs font-bold transition"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Nghe Toàn Bộ Bài Nói 2 Phút</span>
                </button>
              </div>

              <h3 className="text-lg font-bold text-white">
                {chapter.part2.cueCardPrompt}
              </h3>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-xs font-semibold text-gray-400 block mb-1">
                  You should say:
                </span>
                {chapter.part2.bulletPoints.map((bp, bpIdx) => (
                  <div key={bpIdx} className="text-xs text-gray-300 flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{bp}</span>
                  </div>
                ))}
              </div>

              {/* 1-Minute Prep Notes */}
              <div>
                <span className="text-xs font-bold text-amber-300 block mb-1.5">
                  📝 Dàn Ý Ghi Chú Mẫu Trong 1 Phút (Prep Notes):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {chapter.part2.oneMinutePrepNotes.map((note, nIdx) => (
                    <div key={nIdx} className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                      ✓ {note}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2-Minute Speech Text */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Bài Nói Mẫu Đạt Chuẩn Band 8.5 (2 Minutes Model Speech):
                </span>
                <p className="novel-prose text-sm text-gray-100 leading-loose whitespace-pre-line p-4 rounded-xl bg-black/30 border border-white/5">
                  {chapter.part2.twoMinuteModelSpeech}
                </p>
                <p className="text-xs text-emerald-300 italic pt-2">
                  Bản dịch tiếng Việt: {chapter.part2.speechVi}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- PART 3 --- */}
        {activePart === 'part3' && (
          <div className="space-y-4 animate-fade-in">
            {chapter.part3.map((item, idx) => (
              <div key={idx} className="glass-panel-glow p-5 rounded-2xl border border-white/10 space-y-3" style={{ background: 'var(--bg-card)' }}>
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-mono">
                      Q{idx + 1}
                    </span>
                    {item.question}
                  </h4>

                  <button
                    onClick={() => speakWord(item.band8Answer)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold transition flex-shrink-0"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Luyện Shadowing</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-sm text-gray-200 font-serif leading-relaxed">
                  "{item.band8Answer}"
                </div>

                <p className="text-xs text-emerald-300 italic">
                  Bản dịch: {item.answerVi}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.keyIdioms.map((idiom, idIdx) => (
                    <span key={idIdx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 font-medium">
                      ✦ {idiom}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* 100 Speaking Chapters Modal */}
      {showChapterModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowChapterModal(false)}
        >
          <div 
            className="w-full max-w-4xl glass-panel-glow p-6 max-h-[85vh] flex flex-col shadow-2xl rounded-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'var(--bg-secondary)' }}
          >
            <div className="flex items-center justify-between border-b pb-4 mb-4" style={{ borderColor: 'var(--border-color)' }}>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                  <Mic className="w-5 h-5 text-rose-400" /> Danh Mục 100 Chương IELTS Speaking 8.0
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Bao quát toàn bộ câu hỏi Part 1, Part 2 Cue Cards và Part 3 chuyên sâu
                </p>
              </div>
              <button
                onClick={() => setShowChapterModal(false)}
                className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold text-gray-300 hover:bg-white/20"
              >
                Đóng
              </button>
            </div>

            <input
              type="text"
              placeholder="Tìm kiếm chương speaking theo chủ đề..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-4 focus:outline-none focus:border-rose-500"
            />

            <div className="overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-1">
              {filteredTitles.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setCurrentChapterId(t.id);
                    setShowChapterModal(false);
                  }}
                  className={`p-3 rounded-xl text-left border transition ${
                    t.id === currentChapterId 
                      ? 'bg-rose-500/20 border-rose-400' 
                      : 'bg-white/5 hover:bg-white/10 border-white/5'
                  }`}
                >
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 mb-1 inline-block">
                    Chương {t.id}
                  </span>
                  <h5 className="text-xs font-bold text-white line-clamp-2">{t.title}</h5>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
