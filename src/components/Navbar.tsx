import React, { useState } from 'react';
import { ChapterMeta } from '../data/chapters/chapterCatalog';
import { 
  BookOpen, 
  Layers, 
  AlertTriangle, 
  BrainCircuit, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Palette, 
  Type,
  ListFilter,
  FileText,
  Mic,
  Headphones
} from 'lucide-react';
import { VocabWord } from '../types';

interface NavbarProps {
  currentChapterId: number;
  chapterList: ChapterMeta[];
  onSelectChapter: (id: number) => void;
  activeTab: 'reader' | 'writing' | 'speaking' | 'listening' | 'vocab' | 'mistakes' | 'quiz';
  onTabChange: (tab: 'reader' | 'writing' | 'speaking' | 'listening' | 'vocab' | 'mistakes' | 'quiz') => void;
  fontSize: number;
  onChangeFontSize: (delta: number) => void;
  currentTheme: string;
  onSelectTheme: (theme: string) => void;
  onGlobalSearchSelect: (word: VocabWord) => void;
  onOpenGlobalSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentChapterId,
  chapterList,
  onSelectChapter,
  activeTab,
  onTabChange,
  fontSize,
  onChangeFontSize,
  currentTheme,
  onSelectTheme,
  onOpenGlobalSearch,
}) => {
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [chapterFilter, setChapterFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const currentMeta = chapterList.find(c => c.id === currentChapterId) || chapterList[0];

  const categories = ['All', 'Environment', 'Technology & AI', 'Education', 'Society & Culture', 'Economy & Work', 'Health & Psychology', 'Law & Crime', 'Science & Space', 'Media & Art', 'Urbanization'];

  const filteredChapters = chapterList.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(chapterFilter.toLowerCase()) || 
                          c.titleEn.toLowerCase().includes(chapterFilter.toLowerCase()) ||
                          c.topic.toLowerCase().includes(chapterFilter.toLowerCase());
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <header 
        className="px-4 py-2.5 flex items-center justify-between border-b gap-4 transition-colors"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-color)',
        }}
      >
        {/* Left: Chapter Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectChapter(Math.max(1, currentChapterId - 1))}
            disabled={currentChapterId <= 1}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
            title="Chương trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowChapterModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-left transition group"
          >
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1">
                Chương {currentChapterId}/100 <span className="text-gray-500">•</span> {currentMeta.category}
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[200px] md:max-w-xs group-hover:text-cyan-300 transition">
                {currentMeta.title}
              </span>
            </div>
            <ListFilter className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400 ml-1" />
          </button>

          <button
            onClick={() => onSelectChapter(Math.min(100, currentChapterId + 1))}
            disabled={currentChapterId >= 100}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
            title="Chương tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Center: Main Navigation Tabs (4 Core Skills + Tools) */}
        <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10 overflow-x-auto max-w-[65vw] no-scrollbar">
          <button
            onClick={() => onTabChange('reader')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'reader'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>📖 Reading</span>
          </button>

          <button
            onClick={() => onTabChange('writing')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'writing'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>✍️ Writing (100)</span>
          </button>

          <button
            onClick={() => onTabChange('speaking')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'speaking'
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-rose-400" />
            <span>🎙️ Speaking (100)</span>
          </button>

          <button
            onClick={() => onTabChange('listening')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'listening'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 text-cyan-400" />
            <span>🎧 Listening AI (100)</span>
          </button>

          <button
            onClick={() => onTabChange('vocab')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'vocab'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Kho 100 Từ Vựng</span>
          </button>

          <button
            onClick={() => onTabChange('mistakes')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'mistakes'
                ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Bẫy Lỗi 5.0-8.0</span>
          </button>

          <button
            onClick={() => onTabChange('quiz')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-pink-400" />
            <span>Flashcard & Quiz</span>
          </button>
        </div>

        {/* Right: Search, Font size, Theme */}
        <div className="flex items-center gap-2">
          {/* Global Search Button */}
          <button
            onClick={onOpenGlobalSearch}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs transition"
            title="Tra từ điển nhanh trong 10,000 từ vựng IELTS"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Tra Từ Vựng...</span>
          </button>

          {/* Font Size Adjusters */}
          <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
            <button
              onClick={() => onChangeFontSize(-1)}
              disabled={fontSize <= 14}
              className="px-2 py-1 text-xs font-semibold text-gray-400 hover:text-white disabled:opacity-30 transition"
              title="Giảm cỡ chữ"
            >
              A-
            </button>
            <span className="text-[11px] text-gray-400 px-1 font-mono">{fontSize}</span>
            <button
              onClick={() => onChangeFontSize(1)}
              disabled={fontSize >= 24}
              className="px-2 py-1 text-xs font-semibold text-gray-400 hover:text-white disabled:opacity-30 transition"
              title="Tăng cỡ chữ"
            >
              A+
            </button>
          </div>

          {/* Theme Dropdown */}
          <div className="relative group">
            <button
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition"
              title="Đổi giao diện màu"
            >
              <Palette className="w-4 h-4 text-cyan-400" />
            </button>
            <div className="absolute right-0 top-full mt-1.5 hidden group-hover:flex flex-col w-36 glass-panel p-1.5 shadow-xl z-50">
              <button
                onClick={() => onSelectTheme('theme-anime-dark')}
                className={`text-left px-2.5 py-1.5 text-xs rounded font-medium transition ${
                  currentTheme === 'theme-anime-dark' ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                ✦ Anime Dark
              </button>
              <button
                onClick={() => onSelectTheme('theme-sepia')}
                className={`text-left px-2.5 py-1.5 text-xs rounded font-medium transition ${
                  currentTheme === 'theme-sepia' ? 'bg-amber-500/20 text-amber-300' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                ✦ Giấy Sepia Cổ Điển
              </button>
              <button
                onClick={() => onSelectTheme('theme-royal')}
                className={`text-left px-2.5 py-1.5 text-xs rounded font-medium transition ${
                  currentTheme === 'theme-royal' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                ✦ Royal Midnight
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Chapter Selection Modal (100 Chapters) */}
      {showChapterModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowChapterModal(false)}
        >
          <div 
            className="w-full max-w-4xl glass-panel-glow p-6 max-h-[85vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'var(--bg-secondary)' }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-4 mb-4" style={{ borderColor: 'var(--border-color)' }}>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" /> Danh Mục 100 Chương IELTS Anime Light Novel
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  100 chủ đề toàn diện với 10,000 từ vựng & collocation Band 5.0 - 8.5+
                </p>
              </div>
              <button
                onClick={() => setShowChapterModal(false)}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-300"
              >
                Đóng
              </button>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên chương, chủ đề tiếng Việt hoặc tiếng Anh..."
                  value={chapterFilter}
                  onChange={(e) => setChapterFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs whitespace-nowrap px-2.5 py-1.5 rounded-lg font-medium transition ${
                      selectedCategory === cat 
                        ? 'bg-cyan-500 text-black font-bold' 
                        : 'bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Chapters Grid */}
            <div className="overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-1">
              {filteredChapters.map((c) => {
                const isCurrent = c.id === currentChapterId;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectChapter(c.id);
                      setShowChapterModal(false);
                    }}
                    className={`p-3 rounded-xl text-left border transition flex flex-col justify-between ${
                      isCurrent 
                        ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/10' 
                        : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Chương {c.id}
                        </span>
                        <span className="text-[10px] text-amber-400 font-medium">
                          {c.level}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white line-clamp-2 mb-1">
                        {c.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 italic line-clamp-1 mb-2">
                        {c.titleEn}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-gray-400">
                      <span className="truncate max-w-[120px] text-cyan-300 font-medium">
                        {c.topic}
                      </span>
                      <span>100 từ vựng</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
