import React, { useState } from 'react';
import { searchGlobalVocabulary } from '../data/chapters';
import { VocabWord } from '../types';
import { Search, X, Volume2, ArrowRight } from 'lucide-react';
import { speakWord } from '../utils/speech';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWord: (word: VocabWord) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectWord,
}) => {
  const [query, setQuery] = useState('');
  if (!isOpen) return null;

  const results = searchGlobalVocabulary(query, 25);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl glass-panel-glow p-5 flex flex-col shadow-2xl rounded-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'var(--bg-card)' }}
      >
        {/* Search Input */}
        <div className="relative flex items-center border-b border-white/10 pb-3">
          <Search className="w-5 h-5 text-cyan-400 absolute left-2" />
          <input
            type="text"
            placeholder="Tra cứu tức thì bất kỳ từ vựng, collocation hoặc nghĩa tiếng Việt (10,000 từ)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="mt-3 max-h-96 overflow-y-auto space-y-2 pr-1">
          {query.trim().length < 2 ? (
            <div className="py-10 text-center text-xs text-gray-500">
              Nhập ít nhất 2 ký tự để tra cứu từ vựng và collocation...
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-xs text-gray-500">
              Không tìm thấy từ vựng nào khớp với "{query}"
            </div>
          ) : (
            results.map((word) => {
              const bandNum = parseFloat(word.band);
              const bandClass = bandNum >= 8.0 ? 'band-8' : bandNum >= 7.0 ? 'band-7' : 'band-6';

              return (
                <div
                  key={word.id}
                  onClick={() => {
                    onSelectWord(word);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition cursor-pointer flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                        {word.word}
                      </span>
                      <span className={`band-badge ${bandClass} text-[10px]`}>
                        Band {word.band}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">
                        {word.phonetic}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-300 font-medium line-clamp-1">
                      {word.meaningVi}
                    </p>
                    <p className="text-[11px] text-gray-400 italic line-clamp-1">
                      {word.topic}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakWord(word.word);
                      }}
                      className="p-1.5 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition"
                      title="Phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-300 transition" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500">
          <span>Tổng số từ trong từ điển: 10,000 mục IELTS Academic</span>
          <span>Bấm ESC để đóng</span>
        </div>
      </div>
    </div>
  );
};
