import React, { useState } from 'react';
import { Chapter, VocabWord } from '../types';
import { 
  Volume2, 
  RotateCw, 
  CheckCircle, 
  XCircle, 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  HelpCircle,
  Award
} from 'lucide-react';
import { speakWord } from '../utils/speech';
import confetti from 'canvas-confetti';

interface FlashcardQuizProps {
  chapter: Chapter;
  learnedWords: string[];
  onToggleLearned: (wordId: string) => void;
}

export const FlashcardQuiz: React.FC<FlashcardQuizProps> = ({
  chapter,
  learnedWords,
  onToggleLearned,
}) => {
  const [activeSubMode, setActiveSubMode] = useState<'flashcards' | 'quiz'>('flashcards');
  
  // Flashcard State
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz State
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const words = chapter.vocabularyVault || [];
  const currentWord: VocabWord | undefined = words[currentCardIndex] || words[0];

  // Generate 4-choice Quiz Questions based on the chapter's 100 words
  const generateQuizQuestions = () => {
    if (words.length < 4) return [];
    const questions = [];
    const numQuestions = Math.min(10, words.length);

    for (let i = 0; i < numQuestions; i++) {
      const target = words[i];
      // Pick 3 distractors
      const distractors = words.filter(w => w.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const options = [target.meaningVi, ...distractors.map(d => d.meaningVi)]
        .sort(() => 0.5 - Math.random());
      
      const answerIndex = options.indexOf(target.meaningVi);

      questions.push({
        target,
        options,
        answerIndex,
      });
    }
    return questions;
  };

  const [quizQuestions, setQuizQuestions] = useState(generateQuizQuestions());

  const handleNextCard = (markLearned = false) => {
    if (markLearned && currentWord) {
      onToggleLearned(currentWord.id);
    }
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % Math.max(1, words.length));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + words.length) % Math.max(1, words.length));
  };

  const handleQuizAnswer = (optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizSelectedOption(optionIdx);
  };

  const handleQuizSubmit = () => {
    if (quizSelectedOption === null) return;
    setQuizSubmitted(true);
    const q = quizQuestions[quizQuestionIndex];
    if (quizSelectedOption === q.answerIndex) {
      setQuizScore(prev => prev + 1);
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizQuestionIndex < quizQuestions.length - 1) {
      setQuizQuestionIndex(prev => prev + 1);
      setQuizSelectedOption(null);
      setQuizSubmitted(false);
    } else {
      setQuizFinished(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
  };

  const handleRestartQuiz = () => {
    setQuizQuestions(generateQuizQuestions());
    setQuizQuestionIndex(0);
    setQuizSelectedOption(null);
    setQuizScore(0);
    setQuizSubmitted(false);
    setQuizFinished(false);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* Banner */}
        <div className="glass-panel p-6 border-l-4 border-l-purple-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                Luyện Tập Chuyên Sâu • Chương {chapter.id}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
              Ôn Luyện 100 Từ Vựng: {chapter.topic}
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveSubMode('flashcards')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeSubMode === 'flashcards'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flashcards (3D)</span>
            </button>
            <button
              onClick={() => setActiveSubMode('quiz')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeSubMode === 'quiz'
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Trắc Nghiệm 4 Lựa Chọn</span>
            </button>
          </div>
        </div>

        {/* --- FLASHCARDS MODE --- */}
        {activeSubMode === 'flashcards' && currentWord && (
          <div className="flex flex-col items-center space-y-6">
            
            {/* Card Progress Indicator */}
            <div className="text-xs text-gray-400 font-mono">
              Thẻ từ số <span className="text-cyan-400 font-bold">{currentCardIndex + 1}</span> / {words.length}
            </div>

            {/* Flip Card Container */}
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full max-w-lg h-80 rounded-2xl glass-panel-glow p-8 flex flex-col justify-between cursor-pointer select-none transition-all duration-300 transform hover:scale-[1.01] relative shadow-2xl"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-gray-400">
                  {isFlipped ? 'MẶT SAU: GIẢI NGHĨA & VÍ DỤ' : 'MẶT TRƯỚC: TỪ VỰNG & PHÁT ÂM'}
                </span>
                <span className="text-cyan-400 text-[11px] font-semibold flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" /> Bấm để lật thẻ
                </span>
              </div>

              {!isFlipped ? (
                /* Card Front */
                <div className="flex flex-col items-center justify-center text-center space-y-3 my-auto">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
                    Band {currentWord.band} • {currentWord.pos}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white tracking-wide">
                    {currentWord.word}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-cyan-300">
                      {currentWord.phonetic}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakWord(currentWord.word);
                      }}
                      className="p-1.5 rounded-full hover:bg-cyan-500/20 text-cyan-400 transition"
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Card Back */
                <div className="flex flex-col justify-center space-y-3 my-auto text-left">
                  <div>
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">
                      Nghĩa Tiếng Việt:
                    </span>
                    <p className="text-lg font-bold text-emerald-300">
                      {currentWord.meaningVi}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">
                      Collocation Tiêu Biểu:
                    </span>
                    <p className="text-xs text-amber-300 font-medium">
                      ✦ {currentWord.collocations[0]}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-[11px] text-indigo-300 font-semibold block mb-0.5">
                      IELTS Example:
                    </span>
                    <p className="text-xs text-gray-200 font-serif italic">
                      "{currentWord.ieltsExample}"
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Card Controls */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                <span className="text-gray-400">
                  {learnedWords.includes(currentWord.id) ? ' Đã đánh dấu thuộc' : '○ Chưa thuộc'}
                </span>
                <span className="text-purple-400 font-medium">
                  {currentWord.topic}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevCard}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition border border-white/10"
              >
                Thẻ Trước
              </button>

              <button
                onClick={() => handleNextCard(false)}
                className="px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-gray-200 transition"
              >
                Chưa Thuộc (Ôn Lại)
              </button>

              <button
                onClick={() => handleNextCard(true)}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-xs font-bold text-black transition shadow-lg shadow-emerald-500/20 flex items-center gap-1.5"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Đã Thuộc Từ Này!</span>
              </button>

              <button
                onClick={() => handleNextCard(false)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition border border-white/10"
              >
                Thẻ Tiếp
              </button>
            </div>

          </div>
        )}

        {/* --- QUIZ MODE --- */}
        {activeSubMode === 'quiz' && (
          <div className="w-full max-w-2xl mx-auto space-y-6">
            {!quizFinished ? (
              <div className="glass-panel-glow p-6 md:p-8 rounded-2xl border border-white/10 space-y-6" style={{ background: 'var(--bg-card)' }}>
                
                {/* Quiz Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    Câu hỏi {quizQuestionIndex + 1} / {quizQuestions.length}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    Điểm: {quizScore} / {quizQuestions.length}
                  </span>
                </div>

                {/* Target Word Question */}
                {quizQuestions[quizQuestionIndex] && (
                  <div className="space-y-4">
                    <div className="text-center py-4 bg-black/40 rounded-xl border border-white/10">
                      <span className="text-xs text-gray-400 block mb-1">
                        Từ vựng tiếng Anh sau đây mang nghĩa là gì?
                      </span>
                      <h3 className="text-3xl font-extrabold text-cyan-300 tracking-wide">
                        {quizQuestions[quizQuestionIndex].target.word}
                      </h3>
                      <span className="text-xs font-mono text-gray-400 mt-1 inline-block">
                        {quizQuestions[quizQuestionIndex].target.phonetic}
                      </span>
                    </div>

                    {/* 4 Choices */}
                    <div className="space-y-2.5">
                      {quizQuestions[quizQuestionIndex].options.map((opt, optIdx) => {
                        const isSelected = quizSelectedOption === optIdx;
                        let btnClass = 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10';

                        if (quizSubmitted) {
                          if (optIdx === quizQuestions[quizQuestionIndex].answerIndex) {
                            btnClass = 'bg-emerald-500/30 border-emerald-400 text-emerald-200 font-bold';
                          } else if (isSelected) {
                            btnClass = 'bg-red-500/30 border-red-400 text-red-200';
                          }
                        } else if (isSelected) {
                          btnClass = 'bg-pink-500/30 border-pink-400 text-pink-200 font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleQuizAnswer(optIdx)}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs transition flex items-center justify-between ${btnClass}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === quizQuestions[quizQuestionIndex].answerIndex && (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            )}
                            {quizSubmitted && isSelected && optIdx !== quizQuestions[quizQuestionIndex].answerIndex && (
                              <XCircle className="w-4 h-4 text-red-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Submit / Next Button */}
                    <div className="pt-3 border-t border-white/10 flex justify-end">
                      {!quizSubmitted ? (
                        <button
                          onClick={handleQuizSubmit}
                          disabled={quizSelectedOption === null}
                          className="px-6 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-400 disabled:opacity-40 text-black text-xs font-bold transition shadow-lg shadow-pink-500/20"
                        >
                          Xác Nhận Đáp Án
                        </button>
                      ) : (
                        <button
                          onClick={handleNextQuizQuestion}
                          className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition shadow-lg shadow-cyan-500/20"
                        >
                          {quizQuestionIndex < quizQuestions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả Tổng Kết'}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Finished Summary */
              <div className="glass-panel-glow p-8 rounded-2xl border border-white/10 text-center space-y-6 animate-fade-in" style={{ background: 'var(--bg-card)' }}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 mx-auto flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Award className="w-8 h-8 text-black" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Hoàn Thành Bài Kiểm Tra Trắc Nghiệm!
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Bạn đã trả lời đúng <span className="text-cyan-400 font-bold text-lg">{quizScore}</span> / {quizQuestions.length} câu hỏi.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-sm mx-auto text-xs text-gray-300">
                  {quizScore >= 8 ? (
                    <span className="text-emerald-400 font-bold">
                      🌟 Tuyệt vời! Bạn đã nắm rất vững từ vựng Band 8.0 của chương này!
                    </span>
                  ) : quizScore >= 5 ? (
                    <span className="text-amber-300 font-bold">
                      👍 Rất tốt! Hãy lật lại Flashcards để củng cố các từ chưa nhớ nhé.
                    </span>
                  ) : (
                    <span className="text-gray-300">
                      📖 Hãy đọc lại các trang truyện và xem lại kho 100 từ vựng để cải thiện điểm số.
                    </span>
                  )}
                </div>

                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white text-xs font-bold transition shadow-lg"
                >
                  Làm Lại Bài Kiểm Tra Mới
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
