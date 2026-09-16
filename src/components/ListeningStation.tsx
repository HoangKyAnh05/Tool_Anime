import React, { useState, useEffect, useRef } from 'react';
import { getListeningChapter, ListeningChapter } from '../data/listening/listeningData';
import { AnimeCharacterCard } from './AnimeCharacterCard';
import { 
  Headphones, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ListFilter, 
  FileText, 
  Volume2,
  Award,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ListeningStation: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showScript, setShowScript] = useState(false);
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  // User responses
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const chapter: ListeningChapter = getListeningChapter(currentChapterId);

  // Stop speech when chapter changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setUserAnswers({});
    setIsSubmitted(false);
    setShowScript(false);
    setScore(0);
  }, [currentChapterId]);

  // Audio Play / Pause via Web Speech API
  const handleTogglePlay = () => {
    if (!('speechSynthesis' in window)) {
      alert("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(chapter.audioScript);
      utterance.lang = 'en-GB';
      utterance.rate = playbackRate;

      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => (v.lang === 'en-GB' || v.lang === 'en-US') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Online'))) || voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) utterance.voice = englishVoice;

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying) {
      // Re-trigger with new rate
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setTimeout(() => {
        handleTogglePlay();
      }, 100);
    }
  };

  const handleAnswerChange = (qId: number, val: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    chapter.questions.forEach((q) => {
      const userAns = (userAnswers[q.id] || '').trim().toLowerCase();
      const correct = q.correctAnswer.trim().toLowerCase();
      if (userAns === correct) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);

    if (currentScore >= 3) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.8 } });
    }
  };

  const allChapterTitles = Array.from({ length: 100 }, (_, i) => {
    const ch = getListeningChapter(i + 1);
    return { id: ch.id, title: ch.title, section: ch.section };
  });

  const filteredTitles = allChapterTitles.filter(t => 
    t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    t.section.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Top Header Banner */}
        <div className="glass-panel p-6 border-l-4 border-l-cyan-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {chapter.section}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-amber-400 font-semibold">
                  IELTS Listening 8.0+
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
                className="px-4 py-2 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 text-xs font-bold text-cyan-200 hover:text-white transition flex items-center gap-1.5"
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

        {/* Anime Host Character Card */}
        <div className="h-56 md:h-64 w-full">
          <AnimeCharacterCard character={chapter.hostCharacter} className="h-full" />
        </div>

        {/* --- AI AUDIO PLAYER STATION --- */}
        <div className="glass-panel-glow p-6 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl bg-black/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleTogglePlay}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition shadow-lg ${
                  isPlaying 
                    ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/30 animate-pulse' 
                    : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/30'
                }`}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>

              <div>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-cyan-400" />
                  {isPlaying ? 'Đang phát bài nghe AI (Voice: Native English)...' : 'Bấm Play để bắt đầu bài thi nghe'}
                </span>
                <span className="text-xs text-gray-400">
                  {chapter.section} • Thử thách nghe hiểu chuẩn kỳ thi thật
                </span>
              </div>
            </div>

            {/* Speed Adjuster Buttons */}
            <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
              <span className="text-[11px] text-gray-400 px-2 font-medium">Tốc độ:</span>
              {[0.8, 1.0, 1.2].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleChangeRate(rate)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    playbackRate === rate
                      ? 'bg-cyan-500 text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>

          {/* Sound Wave Animation Visualizer */}
          {isPlaying && (
            <div className="flex items-center justify-center gap-1.5 py-2">
              <span className="w-1 h-4 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <span className="w-1 h-8 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
              <span className="w-1 h-12 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="w-1 h-6 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              <span className="w-1 h-10 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
              <span className="w-1 h-4 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.35s' }} />
            </div>
          )}
        </div>

        {/* Examiner Trap Analysis Pill */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{chapter.trapAnalysis}</span>
        </div>

        {/* --- QUESTION FORM SHEET --- */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" /> Phiếu Làm Bài Thi (Questions 1 - {chapter.questions.length})
            </h3>

            {isSubmitted && (
              <span className="text-xs font-bold px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Điểm Đạt Được: {score} / {chapter.questions.length}
              </span>
            )}
          </div>

          <div className="space-y-5">
            {chapter.questions.map((q, qIdx) => {
              const userVal = userAnswers[q.id] || '';
              const isCorrect = userVal.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

              return (
                <div key={q.id} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-gray-200">
                      <span className="text-cyan-400 font-bold mr-2">{q.id}.</span>
                      {q.questionText}
                    </p>

                    {isSubmitted && (
                      <span className="flex-shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Input or Options */}
                  {q.type === 'fill-blank' ? (
                    <input
                      type="text"
                      placeholder="Nhập câu trả lời (tối đa 2-3 từ hoặc số)..."
                      value={userVal}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      disabled={isSubmitted}
                      className="w-full sm:w-72 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    />
                  ) : (
                    <div className="space-y-1.5">
                      {q.options?.map((opt, optIdx) => {
                        const optLetter = opt.charAt(0);
                        const isSelected = userVal === optLetter;
                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerChange(q.id, optLetter)}
                            disabled={isSubmitted}
                            className={`w-full text-left p-2.5 rounded-lg text-xs border transition flex items-center justify-between ${
                              isSelected
                                ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200 font-bold'
                                : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                            }`}
                          >
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Post-submit trigger explanation */}
                  {isSubmitted && (
                    <div className="pt-2 border-t border-white/5 text-xs space-y-1">
                      <div className="text-emerald-300 font-semibold">
                        ✓ Đáp án chính xác: <span className="underline">{q.correctAnswer}</span>
                      </div>
                      <div className="text-gray-400 italic">
                        🎧 Câu tín hiệu trong bài: "{q.triggerSentence}"
                      </div>
                      <div className="text-gray-300">
                        💡 {q.explanationVi}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setShowScript(!showScript)}
              className="text-xs font-bold text-gray-400 hover:text-cyan-300 transition flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>{showScript ? 'Ẩn Audio Script' : 'Hiển Thị Toàn Bộ Audio Script'}</span>
            </button>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition shadow-lg shadow-cyan-500/20"
              >
                Nộp Bài & Xem Điểm Số
              </button>
            ) : (
              <button
                onClick={() => {
                  setUserAnswers({});
                  setIsSubmitted(false);
                }}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-bold transition"
              >
                Làm Lại Bài Thi Này
              </button>
            )}
          </div>

          {/* Full Audio Script Container */}
          {showScript && (
            <div className="mt-4 p-5 rounded-xl bg-black/50 border border-cyan-500/20 space-y-2 animate-fade-in text-xs font-serif leading-loose text-gray-200 whitespace-pre-line">
              <span className="font-sans font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                📜 Full Transcript & Audio Script:
              </span>
              {chapter.audioScript}
            </div>
          )}
        </div>

      </div>

      {/* 100 Listening Chapters Modal */}
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
                  <Headphones className="w-5 h-5 text-cyan-400" /> Danh Mục 100 Chương IELTS Listening 8.0
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Bao gồm Section 1, 2, 3 và 4 có phát Audio AI và giải bẫy chi tiết
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
              placeholder="Tìm kiếm chương listening..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-4 focus:outline-none focus:border-cyan-500"
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
                      ? 'bg-cyan-500/20 border-cyan-400' 
                      : 'bg-white/5 hover:bg-white/10 border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                      Chương {t.id}
                    </span>
                    <span className="text-[10px] text-gray-400">{t.section.split(' ')[0]}</span>
                  </div>
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
