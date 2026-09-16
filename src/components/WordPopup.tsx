import React from 'react';
import { VocabWord } from '../types';
import { Volume2, Bookmark, X, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { speakWord } from '../utils/speech';

interface WordPopupProps {
  word: VocabWord | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (wordId: string) => void;
  isLearned: boolean;
  onToggleLearned: (wordId: string) => void;
}

export const WordPopup: React.FC<WordPopupProps> = ({
  word,
  onClose,
  isBookmarked,
  onToggleBookmark,
  isLearned,
  onToggleLearned,
}) => {
  if (!word) return null;

  const bandClass = parseFloat(word.band) >= 8.0 
    ? 'band-8' 
    : parseFloat(word.band) >= 7.0 
    ? 'band-7' 
    : 'band-6';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg glass-panel-glow p-6 text-left shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'var(--bg-card)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b pb-4 mb-4" style={{ borderColor: 'var(--border-color)' }}>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                {word.word}
              </h2>
              <span className={`band-badge ${bandClass}`}>
                Band {word.band}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {word.pos}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-mono text-cyan-400">
                {word.phonetic}
              </span>
              <button
                onClick={() => speakWord(word.word)}
                className="p-1.5 rounded-full hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition"
                title="Nghe phát âm chuẩn bản xứ"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Meanings */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Định Nghĩa Tiếng Việt
            </div>
            <p className="text-base font-medium text-emerald-300">
              {word.meaningVi}
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
              English Definition
            </div>
            <p className="text-sm text-gray-300 italic">
              "{word.meaningEn}"
            </p>
          </div>

          {/* Collocations */}
          {word.collocations && word.collocations.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> High-Scoring Collocations (Band 7.5 - 8.5)
              </div>
              <div className="flex flex-wrap gap-2">
                {word.collocations.map((c, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-200 font-medium"
                  >
                    ✦ {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Paraphrases */}
          {word.paraphrases && word.paraphrases.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-1.5">
                Từ Đồng Nghĩa / Paraphrase Tương Đương
              </div>
              <div className="flex flex-wrap gap-2">
                {word.paraphrases.map((p, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-medium"
                  >
                    ≈ {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* IELTS Example Sentence */}
          {word.ieltsExample && (
            <div className="p-3 rounded-lg bg-black/40 border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase font-semibold text-indigo-300">
                  Ví Dụ Học Thuật IELTS Writing & Speaking
                </span>
                <button
                  onClick={() => speakWord(word.ieltsExample)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition"
                  title="Nghe đọc cả câu"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Đọc câu
                </button>
              </div>
              <p className="text-sm text-gray-200 font-serif leading-relaxed">
                "{word.ieltsExample}"
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t pt-4 mt-5" style={{ borderColor: 'var(--border-color)' }}>
          <button
            onClick={() => onToggleBookmark(word.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              isBookmarked 
                ? 'bg-amber-500 text-black font-bold' 
                : 'bg-white/5 hover:bg-white/10 text-gray-300'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            {isBookmarked ? 'Đã Lưu Vào Sổ Tay' : 'Lưu Từ Này'}
          </button>

          <button
            onClick={() => onToggleLearned(word.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              isLearned 
                ? 'bg-emerald-500 text-black font-bold' 
                : 'bg-white/5 hover:bg-white/10 text-gray-300'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            {isLearned ? 'Đã Thuộc Từ Này' : 'Đánh Dấu Đã Thuộc'}
          </button>
        </div>
      </div>
    </div>
  );
};
