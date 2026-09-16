import React, { useState } from 'react';
import { getWritingChapter, WritingChapter } from '../data/writing/writingData';
import { AnimeCharacterCard } from './AnimeCharacterCard';
import { 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  ListFilter,
  Layers,
  Award,
  PenTool
} from 'lucide-react';
import { speakWord } from '../utils/speech';

export const WritingLab: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState(1);
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [activeSubTab, setActiveSubTab] = useState<'essay' | 'outline' | 'lexical' | 'structures'>('essay');

  const chapter: WritingChapter = getWritingChapter(currentChapterId);

  const allChapterTitles = Array.from({ length: 100 }, (_, i) => {
    const ch = getWritingChapter(i + 1);
    return { id: ch.id, title: ch.title, taskType: ch.taskType, essayType: ch.essayType };
  });

  const filteredTitles = allChapterTitles.filter(t => 
    t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    t.essayType.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Top Header Card */}
        <div className="glass-panel p-6 border-l-4 border-l-indigo-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {chapter.taskType} • {chapter.essayType}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-cyan-400 font-semibold">
                  IELTS Band 8.0 - 8.5
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
                title="Chương trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowChapterModal(true)}
                className="px-4 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-xs font-bold text-indigo-200 hover:text-white transition flex items-center gap-1.5"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Chọn Chương ({currentChapterId}/100)</span>
              </button>

              <button
                onClick={() => setCurrentChapterId(prev => Math.min(100, prev + 1))}
                disabled={currentChapterId >= 100}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-30 transition border border-white/10"
                title="Chương tiếp theo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Anime Mentor Visual Card */}
        <div className="h-56 md:h-64 w-full">
          <AnimeCharacterCard character={chapter.mentor} className="h-full" />
        </div>

        {/* Official IELTS Writing Prompt */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2 bg-black/40">
          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 flex items-center gap-1.5">
            <PenTool className="w-3.5 h-3.5" /> Đề Bài Thi Chính Thức:
          </span>
          <p className="text-sm font-semibold text-gray-100 leading-relaxed font-serif">
            "{chapter.prompt}"
          </p>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('essay')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeSubTab === 'essay'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Bài Mẫu Full Band 8.0 & Bản Dịch</span>
          </button>

          <button
            onClick={() => setActiveSubTab('outline')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeSubTab === 'outline'
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Dàn Ý Chi Tiết & Overview</span>
          </button>

          <button
            onClick={() => setActiveSubTab('lexical')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeSubTab === 'lexical'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Từ Vựng & Collocation Ăn Điểm</span>
          </button>

          <button
            onClick={() => setActiveSubTab('structures')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeSubTab === 'structures'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Cấu Trúc Ngữ Pháp 8.5</span>
          </button>
        </div>

        {/* Content Tabs */}
        {activeSubTab === 'essay' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
            {/* English Model Essay */}
            <div className="glass-panel-glow p-6 rounded-2xl border border-white/10 space-y-4" style={{ background: 'var(--bg-card)' }}>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-400" /> IELTS Band 8.5 Model Essay
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {chapter.modelEssay.split(/\s+/).length} từ
                </span>
              </div>
              <div className="novel-prose text-gray-100 text-sm leading-loose whitespace-pre-line">
                {chapter.modelEssay}
              </div>
            </div>

            {/* Vietnamese Translation */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 bg-black/30">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
                  Bản Dịch Nghĩa Chi Tiết & Đối Chiếu
                </span>
              </div>
              <div className="novel-prose text-emerald-100/90 text-sm leading-loose whitespace-pre-line">
                {chapter.vietnameseTranslation}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'outline' && (
          <div className="glass-panel-glow p-6 md:p-8 rounded-2xl border border-white/10 space-y-5 animate-fade-in" style={{ background: 'var(--bg-card)' }}>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" /> Dàn Bài Chi Tiết Chuẩn Band 8.0
            </h3>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-cyan-400 block mb-1">
                  1. Mở Bài (Introduction):
                </span>
                <p className="text-gray-300">{chapter.outline.introduction}</p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                <span className="text-xs font-bold text-cyan-300 block mb-1">
                  2. Tổng Quan (Overview cho Task 1) / Thesis Statement (cho Task 2):
                </span>
                <p className="text-cyan-100 font-semibold">{chapter.overviewOrThesis}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-indigo-300 block mb-1">
                  3. Thân Bài 1 (Body Paragraph 1):
                </span>
                <p className="text-gray-300">{chapter.outline.bodyParagraph1}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-indigo-300 block mb-1">
                  4. Thân Bài 2 (Body Paragraph 2):
                </span>
                <p className="text-gray-300">{chapter.outline.bodyParagraph2}</p>
              </div>

              {chapter.outline.conclusion && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold text-amber-300 block mb-1">
                    5. Kết Luận (Conclusion):
                  </span>
                  <p className="text-gray-300">{chapter.outline.conclusion}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSubTab === 'lexical' && (
          <div className="space-y-3.5 animate-fade-in">
            {chapter.lexicalVault.map((item, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">{item.phrase}</span>
                    <span className="band-badge band-8 text-[10px]">Band {item.band}</span>
                    <span className="text-xs font-mono text-cyan-400">{item.ipa}</span>
                  </div>
                  <p className="text-xs text-emerald-300 font-semibold">{item.meaningVi}</p>
                  <p className="text-xs text-gray-400 italic">💡 {item.usageNote}</p>
                </div>

                <button
                  onClick={() => speakWord(item.phrase)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold self-start md:self-auto transition"
                >
                  Nghe Phát Âm
                </button>
              </div>
            ))}
          </div>
        )}

        {activeSubTab === 'structures' && (
          <div className="space-y-4 animate-fade-in">
            {chapter.grammaticalStructures.map((struct, sIdx) => (
              <div key={sIdx} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {struct.structureName}
                  </h4>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-cyan-300">
                  Công thức: {struct.formula}
                </div>
                <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 text-xs text-gray-200 font-serif italic">
                  "{struct.exampleFromEssay}"
                </div>
                <p className="text-xs text-gray-300">
                  {struct.explanation}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* 100 Writing Chapters Modal */}
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
                  <FileText className="w-5 h-5 text-indigo-400" /> Danh Mục 100 Chương IELTS Writing 8.0
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Bao quát toàn bộ dạng bài Task 1 và Task 2 mới nhất
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
              placeholder="Tìm kiếm chương theo chủ đề hoặc dạng bài (Line Graph, Opinion Essay...)"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs mb-4 focus:outline-none focus:border-indigo-500"
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
                      ? 'bg-indigo-500/20 border-indigo-400' 
                      : 'bg-white/5 hover:bg-white/10 border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                      Chương {t.id}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-semibold">{t.taskType}</span>
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
