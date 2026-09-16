export interface VocabWord {
  id: string;
  word: string;
  phonetic: string;
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'idiom' | 'collocation';
  meaningVi: string;
  meaningEn: string;
  band: '5.5' | '6.0' | '6.5' | '7.0' | '7.5' | '8.0' | '8.5+';
  collocations: string[];
  paraphrases: string[];
  ieltsExample: string;
  topic: string;
  chapterId: number;
}

export interface StoryScene {
  sceneId: number;
  title: string;
  imageUrl: string;
  imageKeywords: string;
  character: string;
  narrative: string;
  dialogue?: {
    speaker: string;
    text: string;
    speakerRole?: string;
  }[];
  keyTerms: string[]; // List of vocab words appearing in this scene
}

export interface Chapter {
  id: number;
  title: string;
  titleEn: string;
  topic: string;
  category: 'Environment' | 'Technology & AI' | 'Education' | 'Society & Culture' | 'Economy & Work' | 'Health & Psychology' | 'Law & Crime' | 'Science & Space' | 'Media & Art' | 'Urbanization';
  level: string;
  synopsis: string;
  coverImage: string;
  scenes: StoryScene[];
  vocabularyVault: VocabWord[];
}

export interface CommonMistake {
  id: string;
  category: 'vocabulary' | 'grammar' | 'pronunciation' | 'coherence';
  title: string;
  bandTrap: string;
  wrongExample: string;
  correctExample: string;
  explanation: string;
  whyExaminersPenalize: string;
  band8Upgrade: string;
  quiz: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  };
}

export interface UserProgress {
  completedChapters: number[];
  bookmarkedWords: string[];
  learnedWords: string[];
  quizScores: Record<number, number>; // chapterId -> percentage
  readingProgress: Record<number, number>; // chapterId -> sceneIndex
  favoriteMistakes: string[];
}
