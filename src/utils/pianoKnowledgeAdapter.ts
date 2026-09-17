// Piano Knowledge Adapter: Unifies all 6 knowledge bases into rhythm piano learning items

import { getChapter, CHAPTER_CATALOG } from '../data/chapters';
import { getWritingChapter } from '../data/writing/writingData';
import { getSpeakingChapter } from '../data/speaking/speakingData';
import { getListeningChapter } from '../data/listening/listeningData';
import { COMMON_MISTAKES_DATA } from '../data/mistakes/commonMistakes';
import { VocabWord } from '../types';

export type KnowledgeCategoryType = 'chapter' | 'writing' | 'speaking' | 'listening' | 'mistakes' | 'vocab-vault';

export interface PianoKnowledgeItem {
  id: string;
  category: KnowledgeCategoryType;
  categoryLabel: string;
  topicTitle: string;
  topicSubtitle: string;
  chapterOrTopicId: number | string;
  itemType: 'vocab' | 'sentence' | 'mistake' | 'idiom' | 'collocation' | 'structure';
  
  // Primary Display Content (Bilingual)
  englishText: string;
  phonetic?: string;
  pos?: string;
  band?: string;
  vietnameseText: string;

  // Rich Context for Modal / Popup / Deep Memory
  collocations?: string[];
  exampleSentence?: string;
  exampleSentenceVi?: string;
  explanation?: string;
  wrongExample?: string;
  correctUpgrade?: string;
  character?: string;
  speakerRole?: string;
}

export interface TopicCatalogItem {
  id: number | string;
  category: KnowledgeCategoryType;
  title: string;
  titleEn: string;
  categoryName: string;
  itemCount: number;
}

// 1. Get Topic Items for a specific Category & Topic ID
export function getPianoKnowledgeItems(category: KnowledgeCategoryType, topicId: number | string): PianoKnowledgeItem[] {
  const items: PianoKnowledgeItem[] = [];
  const numId = typeof topicId === 'number' ? topicId : parseInt(topicId, 10) || 1;

  if (category === 'chapter') {
    const chapter = getChapter(numId);
    
    // Add vocabulary vault items
    chapter.vocabularyVault.forEach((v, idx) => {
      items.push({
        id: `ch-${numId}-v-${v.id || idx}`,
        category: 'chapter',
        categoryLabel: `Chương ${numId}: Light Novel`,
        topicTitle: chapter.title,
        topicSubtitle: chapter.titleEn,
        chapterOrTopicId: numId,
        itemType: 'vocab',
        englishText: v.word,
        phonetic: v.phonetic,
        pos: v.pos,
        band: v.band,
        vietnameseText: v.meaningVi,
        collocations: v.collocations,
        exampleSentence: v.ieltsExample,
        explanation: v.meaningEn
      });
    });

    // Add bilingual story scene dialogue & narrative sentences
    chapter.scenes.forEach((scene, sIdx) => {
      if (scene.dialogue && scene.dialogue.length > 0) {
        scene.dialogue.forEach((d, dIdx) => {
          items.push({
            id: `ch-${numId}-s-${sIdx}-d-${dIdx}`,
            category: 'chapter',
            categoryLabel: `Chương ${numId}: Lời Thoại Anime`,
            topicTitle: chapter.title,
            topicSubtitle: scene.title,
            chapterOrTopicId: numId,
            itemType: 'sentence',
            englishText: d.text,
            vietnameseText: `${d.speaker} (${d.speakerRole || 'Nhân vật'}): Lời thoại kịch tính luyện phản xạ`,
            character: d.speaker,
            speakerRole: d.speakerRole,
            band: '8.0+'
          });
        });
      } else {
        items.push({
          id: `ch-${numId}-s-${sIdx}-narrative`,
          category: 'chapter',
          categoryLabel: `Chương ${numId}: Đoạn Văn Novel`,
          topicTitle: chapter.title,
          topicSubtitle: scene.title,
          chapterOrTopicId: numId,
          itemType: 'sentence',
          englishText: scene.narrative,
          vietnameseText: `Bối cảnh: ${scene.title} - ${scene.imageKeywords}`,
          band: '8.0'
        });
      }
    });

  } else if (category === 'writing') {
    const w = getWritingChapter(numId);

    // Lexical Vault phrases
    w.lexicalVault.forEach((lex, idx) => {
      items.push({
        id: `w-${numId}-lex-${idx}`,
        category: 'writing',
        categoryLabel: `Writing Lab: ${w.taskType}`,
        topicTitle: w.title,
        topicSubtitle: w.topic,
        chapterOrTopicId: numId,
        itemType: 'collocation',
        englishText: lex.phrase,
        phonetic: lex.ipa,
        band: lex.band,
        vietnameseText: lex.meaningVi,
        explanation: lex.usageNote,
        character: w.mentor.name
      });
    });

    // Model essay key sentences
    const essaySentences = w.modelEssay.split('. ').filter(s => s.trim().length > 15);
    essaySentences.forEach((sentence, idx) => {
      items.push({
        id: `w-${numId}-sentence-${idx}`,
        category: 'writing',
        categoryLabel: `Writing Bài Mẫu Band 8.5+`,
        topicTitle: w.title,
        topicSubtitle: `${w.essayType} - Mentor ${w.mentor.name}`,
        chapterOrTopicId: numId,
        itemType: 'sentence',
        englishText: sentence.trim() + (sentence.endsWith('.') ? '' : '.'),
        vietnameseText: `Câu văn học thuật mẫu cho đề tài: ${w.topic}`,
        explanation: `Tổng quan: ${w.overviewOrThesis}`,
        band: '8.5+'
      });
    });

    // Grammatical Structures
    w.grammaticalStructures.forEach((g, idx) => {
      items.push({
        id: `w-${numId}-gram-${idx}`,
        category: 'writing',
        categoryLabel: `Ngữ Pháp Viết Band 8.0`,
        topicTitle: w.title,
        topicSubtitle: g.structureName,
        chapterOrTopicId: numId,
        itemType: 'structure',
        englishText: g.exampleFromEssay,
        vietnameseText: `Cấu trúc: ${g.formula} (${g.explanation})`,
        band: '8.0'
      });
    });

  } else if (category === 'speaking') {
    const s = getSpeakingChapter(numId);

    // Part 1 Items
    s.part1.forEach((item, idx) => {
      items.push({
        id: `spk-${numId}-p1-${idx}`,
        category: 'speaking',
        categoryLabel: `Speaking Part 1: ${s.topic}`,
        topicTitle: s.title,
        topicSubtitle: `Coach ${s.coach.name}`,
        chapterOrTopicId: numId,
        itemType: 'sentence',
        englishText: item.band8Answer,
        vietnameseText: item.answerVi,
        exampleSentence: item.question,
        collocations: item.keyIdioms,
        character: s.coach.name,
        band: '8.0+'
      });
    });

    // Part 2 Model Speech Sentences
    const p2Sentences = s.part2.twoMinuteModelSpeech.split('. ').filter(st => st.trim().length > 15);
    p2Sentences.forEach((sentence, idx) => {
      items.push({
        id: `spk-${numId}-p2-${idx}`,
        category: 'speaking',
        categoryLabel: `Speaking Part 2 (Cue Card)`,
        topicTitle: s.title,
        topicSubtitle: s.part2.cueCardPrompt,
        chapterOrTopicId: numId,
        itemType: 'sentence',
        englishText: sentence.trim() + (sentence.endsWith('.') ? '' : '.'),
        vietnameseText: `Bài nói 2 phút: ${s.part2.cueCardPrompt}`,
        collocations: s.part2.highScoringIdioms,
        character: s.coach.name,
        band: '8.5+'
      });
    });

    // Part 3 Items
    s.part3.forEach((item, idx) => {
      items.push({
        id: `spk-${numId}-p3-${idx}`,
        category: 'speaking',
        categoryLabel: `Speaking Part 3 (Thảo Luận Sâu)`,
        topicTitle: s.title,
        topicSubtitle: `Câu hỏi: ${item.question}`,
        chapterOrTopicId: numId,
        itemType: 'sentence',
        englishText: item.band8Answer,
        vietnameseText: item.answerVi,
        exampleSentence: item.question,
        collocations: item.keyIdioms,
        character: s.coach.name,
        band: '8.5+'
      });
    });

  } else if (category === 'listening') {
    const l = getListeningChapter(numId);

    // Audio script sentences
    const scriptSentences = l.audioScript.split('. ').filter(st => st.trim().length > 15);
    scriptSentences.forEach((sentence, idx) => {
      items.push({
        id: `lis-${numId}-scr-${idx}`,
        category: 'listening',
        categoryLabel: `Listening: ${l.section}`,
        topicTitle: l.title,
        topicSubtitle: l.topic,
        chapterOrTopicId: numId,
        itemType: 'sentence',
        englishText: sentence.trim() + (sentence.endsWith('.') ? '' : '.'),
        vietnameseText: `Đoạn băng hội thoại bài nghe Section ${numId % 4 || 4} - ${l.topic}`,
        explanation: l.trapAnalysis,
        character: l.hostCharacter.name,
        band: '7.5 - 8.5'
      });
    });

    // Listening questions & answers
    l.questions.forEach((q, idx) => {
      items.push({
        id: `lis-${numId}-q-${idx}`,
        category: 'listening',
        categoryLabel: `Listening Trọng Điểm`,
        topicTitle: l.title,
        topicSubtitle: `Đáp án: ${q.correctAnswer}`,
        chapterOrTopicId: numId,
        itemType: 'vocab',
        englishText: q.correctAnswer,
        vietnameseText: `Câu hỏi: ${q.questionText} (${q.explanationVi})`,
        exampleSentence: q.triggerSentence,
        explanation: q.explanationVi,
        band: '8.0'
      });
    });

  } else if (category === 'mistakes') {
    COMMON_MISTAKES_DATA.forEach((m, idx) => {
      items.push({
        id: `mistake-${m.id || idx}`,
        category: 'mistakes',
        categoryLabel: `Bẫy Lỗi Điểm ${m.bandTrap}`,
        topicTitle: m.title,
        topicSubtitle: m.category.toUpperCase(),
        chapterOrTopicId: 'mistakes-all',
        itemType: 'mistake',
        englishText: m.correctExample,
        vietnameseText: m.explanation,
        wrongExample: m.wrongExample,
        correctUpgrade: m.band8Upgrade,
        explanation: m.whyExaminersPenalize,
        band: '8.0+'
      });
    });

  } else if (category === 'vocab-vault') {
    // Collect from current and surrounding chapters
    const startCh = Math.max(1, ((numId - 1) * 5) + 1);
    const endCh = Math.min(100, startCh + 4);
    for (let c = startCh; c <= endCh; c++) {
      const ch = getChapter(c);
      ch.vocabularyVault.forEach((v, vIdx) => {
        items.push({
          id: `vault-ch${c}-v-${v.id || vIdx}`,
          category: 'vocab-vault',
          categoryLabel: `Kho Từ Vựng Band ${v.band}`,
          topicTitle: `Bộ Từ Vựng ${ch.topic}`,
          topicSubtitle: ch.title,
          chapterOrTopicId: numId,
          itemType: 'vocab',
          englishText: v.word,
          phonetic: v.phonetic,
          pos: v.pos,
          band: v.band,
          vietnameseText: v.meaningVi,
          collocations: v.collocations,
          exampleSentence: v.ieltsExample,
          explanation: v.meaningEn
        });
      });
    }
  }

  // If empty fallback
  if (items.length === 0) {
    const defaultCh = getChapter(1);
    defaultCh.vocabularyVault.forEach((v, idx) => {
      items.push({
        id: `fallback-${idx}`,
        category: 'chapter',
        categoryLabel: 'Chương 1: Trí Tuệ Nhân Tạo',
        topicTitle: defaultCh.title,
        topicSubtitle: defaultCh.titleEn,
        chapterOrTopicId: 1,
        itemType: 'vocab',
        englishText: v.word,
        phonetic: v.phonetic,
        pos: v.pos,
        band: v.band,
        vietnameseText: v.meaningVi,
        collocations: v.collocations,
        exampleSentence: v.ieltsExample
      });
    });
  }

  return items;
}

// 2. Helper to get next topic in sequence for Endless Play!
export function getNextTopic(
  currentCategory: KnowledgeCategoryType, 
  currentTopicId: number | string
): { nextCategory: KnowledgeCategoryType; nextTopicId: number | string; nextTitle: string } {
  const numId = typeof currentTopicId === 'number' ? currentTopicId : parseInt(currentTopicId, 10) || 1;

  if (currentCategory === 'chapter') {
    if (numId < 100) {
      const nextId = numId + 1;
      const ch = getChapter(nextId);
      return { nextCategory: 'chapter', nextTopicId: nextId, nextTitle: `Chương ${nextId}: ${ch.title}` };
    } else {
      return { nextCategory: 'writing', nextTopicId: 1, nextTitle: 'Writing Lab 1: Task 1 Line Graph' };
    }
  } else if (currentCategory === 'writing') {
    if (numId < 100) {
      const nextId = numId + 1;
      const w = getWritingChapter(nextId);
      return { nextCategory: 'writing', nextTopicId: nextId, nextTitle: `Writing ${nextId}: ${w.title}` };
    } else {
      return { nextCategory: 'speaking', nextTopicId: 1, nextTitle: 'Speaking 1: Career Ambitions' };
    }
  } else if (currentCategory === 'speaking') {
    if (numId < 100) {
      const nextId = numId + 1;
      const s = getSpeakingChapter(nextId);
      return { nextCategory: 'speaking', nextTopicId: nextId, nextTitle: `Speaking ${nextId}: ${s.title}` };
    } else {
      return { nextCategory: 'listening', nextTopicId: 1, nextTitle: 'Listening 1: Khóa Học Biển' };
    }
  } else if (currentCategory === 'listening') {
    if (numId < 100) {
      const nextId = numId + 1;
      const l = getListeningChapter(nextId);
      return { nextCategory: 'listening', nextTopicId: nextId, nextTitle: `Listening ${nextId}: ${l.title}` };
    } else {
      return { nextCategory: 'mistakes', nextTopicId: 1, nextTitle: 'Bẫy Lỗi Kinh Điển Band 5.0 - 8.0' };
    }
  } else if (currentCategory === 'mistakes') {
    return { nextCategory: 'vocab-vault', nextTopicId: 1, nextTitle: 'Kho Từ Vựng Band 8.0+ Mastery' };
  } else {
    // Loop back to Chapter 1
    return { nextCategory: 'chapter', nextTopicId: 1, nextTitle: 'Chương 1: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số' };
  }
}

// 3. Get catalog list for the topic switcher dropdown/modal
export function getTopicsCatalogForCategory(category: KnowledgeCategoryType): TopicCatalogItem[] {
  if (category === 'chapter') {
    return CHAPTER_CATALOG.map(c => ({
      id: c.id,
      category: 'chapter',
      title: c.title,
      titleEn: c.titleEn,
      categoryName: c.category,
      itemCount: 100
    }));
  }

  if (category === 'writing') {
    return Array.from({ length: 100 }, (_, i) => {
      const id = i + 1;
      const w = getWritingChapter(id);
      return {
        id,
        category: 'writing',
        title: w.title,
        titleEn: w.prompt.slice(0, 70) + '...',
        categoryName: w.taskType,
        itemCount: 25
      };
    });
  }

  if (category === 'speaking') {
    return Array.from({ length: 100 }, (_, i) => {
      const id = i + 1;
      const s = getSpeakingChapter(id);
      return {
        id,
        category: 'speaking',
        title: s.title,
        titleEn: s.part2.cueCardPrompt.slice(0, 70) + '...',
        categoryName: 'Speaking 3 Parts',
        itemCount: 20
      };
    });
  }

  if (category === 'listening') {
    return Array.from({ length: 100 }, (_, i) => {
      const id = i + 1;
      const l = getListeningChapter(id);
      return {
        id,
        category: 'listening',
        title: l.title,
        titleEn: l.audioScript.slice(0, 70) + '...',
        categoryName: l.section,
        itemCount: 15
      };
    });
  }

  if (category === 'mistakes') {
    return [
      {
        id: 1,
        category: 'mistakes',
        title: 'Toàn Bộ Bẫy Lỗi Điểm 5.0 - 8.0',
        titleEn: 'Common IELTS Pitfalls & Examiner Penalisations',
        categoryName: 'Grammar & Lexical Traps',
        itemCount: COMMON_MISTAKES_DATA.length
      }
    ];
  }

  // vocab-vault
  return Array.from({ length: 20 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      category: 'vocab-vault',
      title: `Gói Từ Vựng Cao Cấp Nhóm ${id}`,
      titleEn: `Academic Vocabulary Pack ${id} (Band 6.5 - 8.5+)`,
      categoryName: 'IELTS Core Vault',
      itemCount: 50
    };
  });
}
