import React, { useState } from 'react';
import { COMMON_MISTAKES_DATA } from '../data/mistakes/commonMistakes';
import { CommonMistake } from '../types';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  Mic, 
  FileText,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommonMistakesHubProps {
  favoriteMistakes: string[];
  onToggleFavorite: (id: string) => void;
}

export const CommonMistakesHub: React.FC<CommonMistakesHubProps> = ({
  favoriteMistakes,
  onToggleFavorite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuizzes, setSubmittedQuizzes] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Tất Cả Lỗi Sai', icon: AlertTriangle },
    { id: 'vocabulary', label: 'Lỗi Từ Vựng & Collocation', icon: BookOpen },
    { id: 'grammar', label: 'Lỗi Ngữ Pháp & Cú Pháp', icon: FileText },
    { id: 'pronunciation', label: 'Lỗi Phát Âm & Trọng Âm', icon: Mic },
    { id: 'coherence', label: 'Lỗi Mạch Lạc & Văn Phong', icon: Sparkles },
  ];

  const filteredMistakes = COMMON_MISTAKES_DATA.filter((m) => {
    if (selectedCategory === 'all') return true;
    return m.category === selectedCategory;
  });

  const handleSelectAnswer = (mistakeId: string, optionIndex: number) => {
    if (submittedQuizzes[mistakeId]) return; // Already submitted
    setSelectedAnswers(prev => ({ ...prev, [mistakeId]: optionIndex }));
  };

  const handleSubmitQuiz = (mistake: CommonMistake) => {
    const chosen = selectedAnswers[mistake.id];
    if (chosen === undefined) return;

    setSubmittedQuizzes(prev => ({ ...prev, [mistake.id]: true }));
    if (chosen === mistake.quiz.answerIndex) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Hub Banner */}
        <div className="glass-panel p-6 border-l-4 border-l-amber-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-display">
                Kho Bẫy Lỗi Sai Phổ Biến (Band 5.0 ➔ 8.0)
              </h2>
              <p className="text-xs text-gray-400">
                Phân tích sâu các lỗi kinh điển về từ vựng, collocation, ngữ pháp, phát âm và văn phong học thuật IELTS
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  isSelected
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* List of Common Mistakes Cards */}
        <div className="space-y-6">
          {filteredMistakes.map((mistake) => {
            const isFav = favoriteMistakes.includes(mistake.id);
            const isQuizOpen = activeQuizId === mistake.id;
            const chosenAnswer = selectedAnswers[mistake.id];
            const isSubmitted = submittedQuizzes[mistake.id];
            const isCorrect = chosenAnswer === mistake.quiz.answerIndex;

            return (
              <div 
                key={mistake.id}
                className="glass-panel-glow p-6 rounded-2xl border border-white/10 space-y-5 transition"
                style={{ background: 'var(--bg-card)' }}
              >
                {/* Header Card */}
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Bẫy Điểm: {mistake.bandTrap}
                      </span>
                      <span className="text-xs uppercase font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                        {mistake.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {mistake.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => onToggleFavorite(mistake.id)}
                    className={`p-2 rounded-xl border transition ${
                      isFav 
                        ? 'bg-amber-500 text-black border-amber-400 font-bold' 
                        : 'bg-white/5 hover:bg-white/10 text-gray-400 border-white/10'
                    }`}
                    title={isFav ? 'Bỏ lưu' : 'Lưu vào danh sách cần nhớ'}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Side-by-side Wrong vs Right comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Wrong Example */}
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                      <XCircle className="w-4 h-4" /> ❌ Cách dùng sai phổ biến (5.0 - 6.0)
                    </div>
                    <p className="text-sm text-red-200 font-mono bg-black/40 p-2.5 rounded-lg border border-red-500/20 leading-relaxed">
                      "{mistake.wrongExample}"
                    </p>
                  </div>

                  {/* Correct & Upgraded Example */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />  Cách sửa chuẩn & Nâng cấp (Band 7.5 - 8.0+)
                    </div>
                    <p className="text-sm text-emerald-200 font-mono bg-black/40 p-2.5 rounded-lg border border-emerald-500/20 leading-relaxed">
                      "{mistake.correctExample}"
                    </p>
                  </div>
                </div>

                {/* Explanation & Why Examiners Penalize */}
                <div className="space-y-3 text-xs bg-black/30 p-4 rounded-xl border border-white/5">
                  <div>
                    <span className="font-bold text-cyan-300 block mb-1">
                      💡 Bản chất lỗi sai & Quy tắc học thuật:
                    </span>
                    <p className="text-gray-300 leading-relaxed">
                      {mistake.explanation}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-rose-400 block mb-1">
                      ⚠️ Tại sao giám khảo IELTS trừ điểm nặng?
                    </span>
                    <p className="text-gray-300 leading-relaxed">
                      {mistake.whyExaminersPenalize}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-amber-300 block mb-1">
                      👑 Mẫu câu biểu mẫu chuẩn Band 8.0+:
                    </span>
                    <p className="text-amber-200/90 font-serif italic bg-amber-500/10 p-2 rounded border border-amber-500/20">
                      "{mistake.band8Upgrade}"
                    </p>
                  </div>
                </div>

                {/* Interactive Mini-Quiz Button */}
                <div className="border-t border-white/10 pt-3">
                  <button
                    onClick={() => setActiveQuizId(isQuizOpen ? null : mistake.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>{isQuizOpen ? 'Đóng câu đố kiểm tra' : 'Thử thách câu hỏi trắc nghiệm kiểm tra nhanh'}</span>
                  </button>

                  {/* Quiz Container */}
                  {isQuizOpen && (
                    <div className="mt-3 p-4 rounded-xl bg-black/50 border border-cyan-500/30 space-y-3 animate-fade-in">
                      <p className="text-sm font-semibold text-white">
                        {mistake.quiz.question}
                      </p>

                      <div className="space-y-2">
                        {mistake.quiz.options.map((opt, optIdx) => {
                          const isSelected = chosenAnswer === optIdx;
                          let btnStyle = 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10';

                          if (isSubmitted) {
                            if (optIdx === mistake.quiz.answerIndex) {
                              btnStyle = 'bg-emerald-500/30 border-emerald-400 text-emerald-200 font-bold';
                            } else if (isSelected) {
                              btnStyle = 'bg-red-500/30 border-red-400 text-red-200';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-cyan-500/30 border-cyan-400 text-cyan-200 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(mistake.id, optIdx)}
                              className={`w-full text-left p-3 rounded-lg text-xs border transition flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {isSubmitted && optIdx === mistake.quiz.answerIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              )}
                              {isSubmitted && isSelected && optIdx !== mistake.quiz.answerIndex && (
                                <XCircle className="w-4 h-4 text-red-400" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {!isSubmitted ? (
                        <button
                          onClick={() => handleSubmitQuiz(mistake)}
                          disabled={chosenAnswer === undefined}
                          className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black text-xs font-bold transition"
                        >
                          Kiểm Tra Đáp Án
                        </button>
                      ) : (
                        <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                          isCorrect ? 'bg-emerald-950/40 text-emerald-200 border border-emerald-500/30' : 'bg-red-950/40 text-red-200 border border-red-500/30'
                        }`}>
                          <div className="font-bold mb-1">
                            {isCorrect ? '🎉 Chính xác! Tuyệt vời!' : '❌ Chưa chính xác!'}
                          </div>
                          <div>{mistake.quiz.explanation}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
