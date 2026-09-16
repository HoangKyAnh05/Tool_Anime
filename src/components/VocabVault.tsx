import React, { useState } from 'react';
import { Chapter, VocabWord } from '../types';
import { 
  Volume2, 
  Search, 
  Bookmark, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  ChevronDown, 
  ChevronUp,
  Filter
} from 'lucide-react';
import { speakWord } from '../utils/speech';

interface VocabVaultProps {
  chapter: Chapter;
  onWordClick: (word: VocabWord) => void;
  bookmarkedWords: string[];
  onToggleBookmark: (wordId: string) => void;
  learnedWords: string[];
  onToggleLearned: (wordId: string) => void;
}

export const VocabVault: React.FC<VocabVaultProps> = ({
  chapter,
  onWordClick,
  bookmarkedWords,
  onToggleBookmark,
  learnedWords,
  onToggleLearned,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBandFilter, setSelectedBandFilter] = useState<string>('All');
  const [expandedWordId, setExpandedWordId] = useState<string | null>(null);

  const words = chapter.vocabularyVault || [];
  const totalLearnedInChapter = words.filter(w => learnedWords.includes(w.id)).length;
  const progressPercent = Math.round((totalLearnedInChapter / Math.max(1, words.length)) * 100);

  const filteredWords = words.filter(w => {
    const matchesSearch = 
      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.meaningVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.meaningEn.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    const bandNum = parseFloat(w.band);
    if (selectedBandFilter === 'All') return true;
    if (selectedBandFilter === '5.0-6.0') return bandNum <= 6.0;
    if (selectedBandFilter === '6.5-7.5') return bandNum >= 6.5 && bandNum <= 7.5;
    if (selectedBandFilter === '8.0+') return bandNum >= 8.0;
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Header Stats Bar */}
        <div className="glass-panel p-6 border-l-4 border-l-indigo-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {chapter.category} • Chương {chapter.id}/100
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                <Layers className="w-6 h-6 text-indigo-400" />
                Kho 100 Từ Vựng & Collocation: {chapter.topic}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Tích hợp đủ từ vựng từ mức 5.0 (ôn lại căn bản) đến 8.5+ (chuyên gia học thuật)
              </p>
            </div>

            {/* Mastery Progress Card */}
            <div className="bg-black/40 p-3 rounded-xl border border-white/10 min-w-[200px]">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-gray-300">Tiến Độ Thuộc Từ:</span>
                <span className="text-emerald-400 font-bold">{totalLearnedInChapter}/{words.length} ({progressPercent}%)</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm từ vựng, phiên âm hoặc nghĩa tiếng Việt trong 100 từ này..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Band Score Filter Pills */}
          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setSelectedBandFilter('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedBandFilter === 'All'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Tất Cả (100)
            </button>
            <button
              onClick={() => setSelectedBandFilter('5.0-6.0')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedBandFilter === '5.0-6.0'
                  ? 'bg-emerald-500 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Band 5.0 - 6.0
            </button>
            <button
              onClick={() => setSelectedBandFilter('6.5-7.5')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedBandFilter === '6.5-7.5'
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Band 6.5 - 7.5
            </button>
            <button
              onClick={() => setSelectedBandFilter('8.0+')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedBandFilter === '8.0+'
                  ? 'bg-amber-500 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Band 8.0 - 8.5+
            </button>
          </div>
        </div>

        {/* 100 Words Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredWords.map((item, index) => {
            const isBookmarked = bookmarkedWords.includes(item.id);
            const isLearned = learnedWords.includes(item.id);
            const isExpanded = expandedWordId === item.id;
            const bandNum = parseFloat(item.band);

            const bandClass = bandNum >= 8.0 ? 'band-8' : bandNum >= 7.0 ? 'band-7' : 'band-6';

            return (
              <div
                key={item.id}
                className={`glass-panel p-4 rounded-xl border transition duration-200 ${
                  isLearned ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-white/5 hover:border-white/20'
                }`}
              >
                {/* Word Top Bar */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-mono text-gray-500">#{index + 1}</span>
                    <button
                      onClick={() => onWordClick(item)}
                      className="text-base font-bold text-white hover:text-cyan-300 transition text-left"
                    >
                      {item.word}
                    </button>
                    <span className={`band-badge ${bandClass}`}>
                      Band {item.band}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono">
                      {item.pos}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => speakWord(item.word)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition"
                      title="Phát âm Audio"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onToggleBookmark(item.id)}
                      className={`p-1.5 rounded-lg transition ${
                        isBookmarked ? 'bg-amber-500 text-black' : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                      title={isBookmarked ? 'Bỏ lưu' : 'Lưu vào sổ tay'}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onToggleLearned(item.id)}
                      className={`p-1.5 rounded-lg transition ${
                        isLearned ? 'bg-emerald-500 text-black' : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                      title={isLearned ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Phonetics & Meaning */}
                <div className="mt-2 space-y-1">
                  <div className="text-xs font-mono text-cyan-400/90">
                    {item.phonetic}
                  </div>
                  <div className="text-sm font-semibold text-emerald-300">
                    {item.meaningVi}
                  </div>
                  <div className="text-xs text-gray-400 italic">
                    "{item.meaningEn}"
                  </div>
                </div>

                {/* Collocation preview & Expand Button */}
                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-medium truncate max-w-[240px]">
                    <Sparkles className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{item.collocations[0]}</span>
                  </div>

                  <button
                    onClick={() => setExpandedWordId(isExpanded ? null : item.id)}
                    className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-cyan-300 transition"
                  >
                    <span>{isExpanded ? 'Thu gọn' : 'Xem chi tiết'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-white/10 space-y-2.5 animate-fade-in text-xs">
                    <div>
                      <span className="font-semibold text-amber-400">Các Collocations 8.0:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {item.collocations.map((c, cIdx) => (
                          <span key={cIdx} className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-200">
                            ✦ {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-purple-400">Paraphrases:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {item.paraphrases.map((p, pIdx) => (
                          <span key={pIdx} className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-200">
                            ≈ {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <span className="font-semibold text-indigo-300 block mb-1">Ví Dụ Academic:</span>
                      <p className="text-gray-300 font-serif italic">"{item.ieltsExample}"</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
