import React, { useState, useEffect } from 'react';
import { TitleBar } from './components/TitleBar';
import { Navbar } from './components/Navbar';
import { PianoTilesGame } from './components/PianoTilesGame';
import { NovelReader } from './components/NovelReader';
import { WritingLab } from './components/WritingLab';
import { SpeakingSimulator } from './components/SpeakingSimulator';
import { ListeningStation } from './components/ListeningStation';
import { VocabVault } from './components/VocabVault';
import { CommonMistakesHub } from './components/CommonMistakesHub';
import { FlashcardQuiz } from './components/FlashcardQuiz';
import { WordPopup } from './components/WordPopup';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { CHAPTER_CATALOG, getChapter } from './data/chapters';
import { VocabWord } from './types';

export const App: React.FC = () => {
  // Persisted state initialization
  const [currentChapterId, setCurrentChapterId] = useState<number>(() => {
    const saved = localStorage.getItem('ielts_anime_chapter_id');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [activeTab, setActiveTab] = useState<'piano' | 'reader' | 'writing' | 'speaking' | 'listening' | 'vocab' | 'mistakes' | 'quiz'>(() => {
    return (localStorage.getItem('ielts_anime_tab') as any) || 'piano';
  });

  const [fontSize, setFontSize] = useState<number>(() => {
    const saved = localStorage.getItem('ielts_anime_font_size');
    return saved ? parseInt(saved, 10) : 18;
  });

  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    return localStorage.getItem('ielts_anime_theme') || 'theme-anime-dark';
  });

  const [bookmarkedWords, setBookmarkedWords] = useState<string[]>(() => {
    const saved = localStorage.getItem('ielts_anime_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [learnedWords, setLearnedWords] = useState<string[]>(() => {
    const saved = localStorage.getItem('ielts_anime_learned');
    return saved ? JSON.parse(saved) : [];
  });

  const [favoriteMistakes, setFavoriteMistakes] = useState<string[]>(() => {
    const saved = localStorage.getItem('ielts_anime_fav_mistakes');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedWord, setSelectedWord] = useState<VocabWord | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Apply theme to document body
  useEffect(() => {
    document.body.className = currentTheme;
    localStorage.setItem('ielts_anime_theme', currentTheme);
  }, [currentTheme]);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('ielts_anime_chapter_id', currentChapterId.toString());
  }, [currentChapterId]);

  useEffect(() => {
    localStorage.setItem('ielts_anime_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('ielts_anime_font_size', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('ielts_anime_bookmarks', JSON.stringify(bookmarkedWords));
  }, [bookmarkedWords]);

  useEffect(() => {
    localStorage.setItem('ielts_anime_learned', JSON.stringify(learnedWords));
  }, [learnedWords]);

  useEffect(() => {
    localStorage.setItem('ielts_anime_fav_mistakes', JSON.stringify(favoriteMistakes));
  }, [favoriteMistakes]);

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentChapter = getChapter(currentChapterId);

  // Toggle Bookmark
  const handleToggleBookmark = (wordId: string) => {
    setBookmarkedWords(prev => 
      prev.includes(wordId) ? prev.filter(id => id !== wordId) : [...prev, wordId]
    );
  };

  // Toggle Learned Status
  const handleToggleLearned = (wordId: string) => {
    setLearnedWords(prev => 
      prev.includes(wordId) ? prev.filter(id => id !== wordId) : [...prev, wordId]
    );
  };

  // Toggle Favorite Mistake
  const handleToggleFavoriteMistake = (id: string) => {
    setFavoriteMistakes(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // In-App Restart Handler
  const handleRestartApp = () => {
    if (typeof window !== 'undefined' && (window as any).electronAPI) {
      (window as any).electronAPI.restartApp();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden select-text">
      {/* TitleBar with in-app Restart button */}
      <TitleBar
        currentChapterId={currentChapterId}
        chapterTitle={currentChapter.title}
        onRestart={handleRestartApp}
      />

      {/* Navigation Bar */}
      <Navbar
        currentChapterId={currentChapterId}
        chapterList={CHAPTER_CATALOG}
        onSelectChapter={setCurrentChapterId}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        fontSize={fontSize}
        onChangeFontSize={(delta) => setFontSize(prev => Math.min(24, Math.max(14, prev + delta)))}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
        onGlobalSearchSelect={setSelectedWord}
        onOpenGlobalSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        {activeTab === 'piano' && (
          <PianoTilesGame
            initialCategory="chapter"
            initialTopicId={currentChapterId}
            bookmarkedWords={bookmarkedWords}
            onToggleBookmark={handleToggleBookmark}
            learnedWords={learnedWords}
            onToggleLearned={handleToggleLearned}
            onOpenWordPopup={setSelectedWord}
          />
        )}

        {activeTab === 'reader' && (
          <NovelReader
            chapter={currentChapter}
            fontSize={fontSize}
            onWordClick={setSelectedWord}
            onNextChapter={() => setCurrentChapterId(prev => Math.min(100, prev + 1))}
            onPrevChapter={() => setCurrentChapterId(prev => Math.max(1, prev - 1))}
            learnedWords={learnedWords}
          />
        )}

        {activeTab === 'writing' && (
          <WritingLab />
        )}

        {activeTab === 'speaking' && (
          <SpeakingSimulator />
        )}

        {activeTab === 'listening' && (
          <ListeningStation />
        )}

        {activeTab === 'vocab' && (
          <VocabVault
            chapter={currentChapter}
            onWordClick={setSelectedWord}
            bookmarkedWords={bookmarkedWords}
            onToggleBookmark={handleToggleBookmark}
            learnedWords={learnedWords}
            onToggleLearned={handleToggleLearned}
          />
        )}

        {activeTab === 'mistakes' && (
          <CommonMistakesHub
            favoriteMistakes={favoriteMistakes}
            onToggleFavorite={handleToggleFavoriteMistake}
          />
        )}

        {activeTab === 'quiz' && (
          <FlashcardQuiz
            chapter={currentChapter}
            learnedWords={learnedWords}
            onToggleLearned={handleToggleLearned}
          />
        )}
      </main>

      {/* Instant Word Popup Modal */}
      {selectedWord && (
        <WordPopup
          word={selectedWord}
          onClose={() => setSelectedWord(null)}
          isBookmarked={bookmarkedWords.includes(selectedWord.id)}
          onToggleBookmark={handleToggleBookmark}
          isLearned={learnedWords.includes(selectedWord.id)}
          onToggleLearned={handleToggleLearned}
        />
      )}

      {/* Global Dictionary Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectWord={(w) => {
          setSelectedWord(w);
          setIsSearchOpen(false);
        }}
      />
    </div>
  );
};

export default App;
