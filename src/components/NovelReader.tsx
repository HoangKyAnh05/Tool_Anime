import React, { useState } from 'react';
import { Chapter, StoryScene, VocabWord } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Sparkles, 
  User, 
  BookOpen, 
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { speakWord } from '../utils/speech';
import { AnimeCharacterCard } from './AnimeCharacterCard';
import { getAnimeCharacterForIndex } from '../data/anime/characterGallery';

interface NovelReaderProps {
  chapter: Chapter;
  fontSize: number;
  onWordClick: (word: VocabWord) => void;
  onNextChapter: () => void;
  onPrevChapter: () => void;
  learnedWords: string[];
}

export const NovelReader: React.FC<NovelReaderProps> = ({
  chapter,
  fontSize,
  onWordClick,
  onNextChapter,
  onPrevChapter,
  learnedWords,
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const scenes = chapter.scenes || [];
  const currentScene: StoryScene = scenes[currentSceneIndex] || scenes[0];

  // Lookup map for fast word retrieval
  const vocabMap = new Map<string, VocabWord>();
  chapter.vocabularyVault.forEach(v => vocabMap.set(v.id, v));

  // Render text and replace [[word_id|word_text]] with interactive badges
  const renderInteractiveNarrative = (text: string) => {
    if (!text) return null;

    const regex = /\[\[(c\d+-w\d+)\|([^\]]+)\]\]/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      const wordId = match[1];
      const wordText = match[2];

      // Add text before the match
      if (matchIndex > lastIndex) {
        elements.push(
          <span key={`text-${lastIndex}`}>
            {text.substring(lastIndex, matchIndex)}
          </span>
        );
      }

      const vocabItem = vocabMap.get(wordId);
      const isLearned = learnedWords.includes(wordId);

      elements.push(
        <span
          key={`word-${wordId}-${matchIndex}`}
          onClick={() => {
            if (vocabItem) onWordClick(vocabItem);
          }}
          className={`vocab-tag group cursor-pointer ${
            isLearned ? 'border-emerald-400 text-emerald-300' : ''
          }`}
          title="Bấm để xem phiên âm IPA, nghĩa tiếng Việt, Collocation 8.0 & phát âm Audio"
        >
          <span>{wordText}</span>
          <span className="text-[10px] opacity-70 group-hover:opacity-100 font-mono">
            {vocabItem ? `[${vocabItem.band}]` : ''}
          </span>
        </span>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      elements.push(
        <span key={`text-end-${lastIndex}`}>
          {text.substring(lastIndex)}
        </span>
      );
    }

    return elements;
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* Chapter Header Banner */}
        <div className="glass-panel p-5 relative overflow-hidden border-l-4 border-l-cyan-400">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {chapter.category} • IELTS {chapter.level}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-gray-400 font-medium">
                  {chapter.topic}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
                {chapter.title}
              </h1>
              <p className="text-xs md:text-sm text-gray-400 italic mt-0.5">
                {chapter.titleEn}
              </p>
            </div>

            {/* Page / Scene Tabs Indicator */}
            <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
              {scenes.map((s, idx) => (
                <button
                  key={s.sceneId}
                  onClick={() => setCurrentSceneIndex(idx)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition ${
                    currentSceneIndex === idx
                      ? 'bg-cyan-500 text-black shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Trang {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current Page / Scene Content */}
        {currentScene && (
          <div className="glass-panel-glow p-6 md:p-8 space-y-6 animate-fade-in relative" style={{ background: 'var(--bg-card)' }}>
            
            {/* Scene Header */}
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {currentScene.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                Nhân vật: {currentScene.character}
              </span>
            </div>

            {/* Famous Anime Character Artwork for this page */}
            <div className="w-full h-72 md:h-80">
              <AnimeCharacterCard 
                character={getAnimeCharacterForIndex(chapter.id * 4 + currentSceneIndex)} 
                className="w-full h-full"
              />
            </div>

            {/* Light Novel Prose Text */}
            <div 
              className="novel-prose text-justify space-y-4 text-gray-100"
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.85 }}
            >
              {currentScene.narrative.split('\n\n').map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {renderInteractiveNarrative(para)}
                </p>
              ))}
            </div>

            {/* Dialogue Balloon Boxes */}
            {currentScene.dialogue && currentScene.dialogue.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-xs uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Đối Thoại & Tranh Biện Học Thuật
                </div>
                
                {currentScene.dialogue.map((diag, dIdx) => (
                  <div 
                    key={dIdx} 
                    className="p-3.5 rounded-xl bg-black/30 border border-indigo-500/20 flex gap-3 items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xs shadow-md">
                      {diag.speaker.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-cyan-300">
                          {diag.speaker}
                        </span>
                        {diag.speakerRole && (
                          <span className="text-[10px] text-gray-400 italic">
                            ({diag.speakerRole})
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-200 italic">
                        "{diag.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Key Vocabulary of this scene */}
            <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Các từ vựng IELTS trọng điểm trong trang này:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentScene.keyTerms.map((termId) => {
                  const item = vocabMap.get(termId);
                  if (!item) return null;
                  return (
                    <button
                      key={termId}
                      onClick={() => onWordClick(item)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-xs text-white transition group"
                    >
                      <span className="font-semibold text-cyan-300 group-hover:text-cyan-200">
                        {item.word}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {item.phonetic}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakWord(item.word);
                        }}
                        className="text-gray-400 hover:text-cyan-400 transition"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Page Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <button
                onClick={() => {
                  if (currentSceneIndex > 0) {
                    setCurrentSceneIndex(currentSceneIndex - 1);
                  } else {
                    onPrevChapter();
                  }
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{currentSceneIndex > 0 ? 'Trang Trước' : 'Chương Trước'}</span>
              </button>

              <span className="text-xs text-gray-400 font-mono">
                Trang {currentSceneIndex + 1} / {scenes.length}
              </span>

              <button
                onClick={() => {
                  if (currentSceneIndex < scenes.length - 1) {
                    setCurrentSceneIndex(currentSceneIndex + 1);
                  } else {
                    onNextChapter();
                  }
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition shadow-lg shadow-cyan-500/20"
              >
                <span>{currentSceneIndex < scenes.length - 1 ? 'Trang Tiếp' : 'Chương Kế Tiếp'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
