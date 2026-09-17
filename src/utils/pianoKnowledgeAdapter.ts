// Piano Knowledge Adapter: Unifies all knowledge bases + 1000 Q&A Sequences into rhythm piano learning items

import { getChapter, CHAPTER_CATALOG } from '../data/chapters';
import { getWritingChapter } from '../data/writing/writingData';
import { getSpeakingChapter } from '../data/speaking/speakingData';
import { getListeningChapter } from '../data/listening/listeningData';
import { COMMON_MISTAKES_DATA } from '../data/mistakes/commonMistakes';
import { getQA1000Item, QA1000Item } from '../data/qa1000/qa1000Data';
import { VocabWord } from '../types';

export type KnowledgeCategoryType = 
  | 'chapter' 
  | 'qa-speaking' 
  | 'qa-writing' 
  | 'qa-master'
  | 'writing' 
  | 'speaking' 
  | 'listening' 
  | 'mistakes' 
  | 'vocab-vault';

export interface PianoKnowledgeItem {
  id: string;
  category: KnowledgeCategoryType;
  categoryLabel: string;
  topicTitle: string;
  topicSubtitle: string;
  chapterOrTopicId: number | string;
  itemType: 'vocab' | 'sentence' | 'mistake' | 'idiom' | 'collocation' | 'structure' | 'qa-question' | 'qa-sentence';
  
  // Q&A Specific Step Metadata (e.g., '❓ CÂU HỎI', '💬 CÂU 1/5: MỞ ĐẦU')
  qaStepBadge?: string;
  qaStepRole?: string;
  qaQuestionId?: number;
  qaTotalSentences?: number;
  qaCurrentStep?: number;

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

// Convert QA1000Item into a 6-note sequence (1 Question + 5 Sentence answers)
function convertQAItemToNotes(qa: QA1000Item): PianoKnowledgeItem[] {
  const notes: PianoKnowledgeItem[] = [];

  // Note 1: The Question / Task Prompt
  notes.push({
    id: `qa-${qa.id}-q`,
    category: qa.type === 'speaking' ? 'qa-speaking' : 'qa-writing',
    categoryLabel: `${qa.subType} #${qa.id}`,
    topicTitle: qa.topic,
    topicSubtitle: `Bộ 1000 Q&A: ${qa.subType} (${qa.category})`,
    chapterOrTopicId: qa.id,
    itemType: 'qa-question',
    qaStepBadge: '❓ CÂU HỎI / ĐỀ BÀI',
    qaStepRole: 'Question Prompt',
    qaQuestionId: qa.id,
    qaTotalSentences: 5,
    qaCurrentStep: 0,
    englishText: qa.question,
    vietnameseText: qa.questionVi,
    band: qa.bandTarget,
    explanation: `Đề bài ${qa.subType} trọng điểm. Gõ nốt tiếp theo để tấu từng câu trả lời mẫu chuẩn Band 8.5+!`
  });

  // Notes 2 to 6: The 5-Sentence Sample Breakdown
  qa.sentences.forEach((st) => {
    notes.push({
      id: `qa-${qa.id}-s-${st.stepIndex}`,
      category: qa.type === 'speaking' ? 'qa-speaking' : 'qa-writing',
      categoryLabel: `${qa.subType} #${qa.id}`,
      topicTitle: qa.topic,
      topicSubtitle: `Câu trả lời cho: ${qa.question.slice(0, 60)}...`,
      chapterOrTopicId: qa.id,
      itemType: 'qa-sentence',
      qaStepBadge: `💬 CÂU ${st.stepIndex}/5`,
      qaStepRole: st.role,
      qaQuestionId: qa.id,
      qaTotalSentences: 5,
      qaCurrentStep: st.stepIndex,
      englishText: st.en,
      vietnameseText: st.vi,
      band: qa.bandTarget,
      collocations: st.keyCollocations,
      exampleSentence: qa.question,
      explanation: `${st.role} - Chiến lược ghi điểm Band 8.5+ chuẩn cấu trúc học thuật.`
    });
  });

  return notes;
}

// 1. Get Topic Items for a specific Category & Topic ID
export function getPianoKnowledgeItems(category: KnowledgeCategoryType, topicId: number | string): PianoKnowledgeItem[] {
  const items: PianoKnowledgeItem[] = [];
  const numId = typeof topicId === 'number' ? topicId : parseInt(topicId, 10) || 1;

  if (category === 'qa-speaking') {
    // Each pack contains 20 Speaking Q&As (20 * 6 = 120 notes)
    const pack = Math.max(1, Math.min(25, numId));
    const startQ = (pack - 1) * 20 + 1;
    const endQ = Math.min(500, startQ + 19);

    for (let q = startQ; q <= endQ; q++) {
      const qa = getQA1000Item(q);
      items.push(...convertQAItemToNotes(qa));
    }

  } else if (category === 'qa-writing') {
    // Each pack contains 20 Writing Q&As (20 * 6 = 120 notes)
    const pack = Math.max(1, Math.min(25, numId));
    const startQ = 500 + (pack - 1) * 20 + 1;
    const endQ = Math.min(1000, startQ + 19);

    for (let q = startQ; q <= endQ; q++) {
      const qa = getQA1000Item(q);
      items.push(...convertQAItemToNotes(qa));
    }

  } else if (category === 'qa-master') {
    // Master Endless Mode: Load batches of 50 Q&As starting from numId
    const startQ = Math.max(1, ((numId - 1) * 30) + 1);
    const endQ = Math.min(1000, startQ + 29);

    for (let q = startQ; q <= endQ; q++) {
      const qa = getQA1000Item(q);
      items.push(...convertQAItemToNotes(qa));
    }

  } else if (category === 'chapter') {
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

  // Fallback if empty
  if (items.length === 0) {
    const defaultQA = getQA1000Item(1);
    items.push(...convertQAItemToNotes(defaultQA));
  }

  return items;
}

// 2. Helper to get next topic in sequence for Endless Play (Continuous 10-Hour Non-Stop)!
export function getNextTopic(
  currentCategory: KnowledgeCategoryType, 
  currentTopicId: number | string
): { nextCategory: KnowledgeCategoryType; nextTopicId: number | string; nextTitle: string } {
  const numId = typeof currentTopicId === 'number' ? currentTopicId : parseInt(currentTopicId, 10) || 1;

  if (currentCategory === 'qa-speaking') {
    if (numId < 25) {
      const nextId = numId + 1;
      return { nextCategory: 'qa-speaking', nextTopicId: nextId, nextTitle: `Speaking Q&A Gói ${nextId}/25 (500 Câu)` };
    } else {
      return { nextCategory: 'qa-writing', nextTopicId: 1, nextTitle: 'Writing Q&A Gói 1/25 (Task 1 & 2 Sample 5 Câu)' };
    }
  } else if (currentCategory === 'qa-writing') {
    if (numId < 25) {
      const nextId = numId + 1;
      return { nextCategory: 'qa-writing', nextTopicId: nextId, nextTitle: `Writing Q&A Gói ${nextId}/25 (500 Câu)` };
    } else {
      return { nextCategory: 'qa-master', nextTopicId: 1, nextTitle: 'Master 1000 Q&A Chuỗi Đàn Bất Tận' };
    }
  } else if (currentCategory === 'qa-master') {
    if (numId < 34) {
      const nextId = numId + 1;
      return { nextCategory: 'qa-master', nextTopicId: nextId, nextTitle: `Master 1000 Q&A Giai Đoạn ${nextId}/34` };
    } else {
      return { nextCategory: 'chapter', nextTopicId: 1, nextTitle: 'Chương 1: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số' };
    }
  } else if (currentCategory === 'chapter') {
    if (numId < 100) {
      const nextId = numId + 1;
      const ch = getChapter(nextId);
      return { nextCategory: 'chapter', nextTopicId: nextId, nextTitle: `Chương ${nextId}: ${ch.title}` };
    } else {
      return { nextCategory: 'qa-speaking', nextTopicId: 1, nextTitle: 'Speaking Q&A Gói 1/25 (500 Câu Hỏi & Trả Lời Mẫu)' };
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
    return { nextCategory: 'qa-speaking', nextTopicId: 1, nextTitle: '500 Speaking Q&A Chuỗi 5 Câu Mẫu' };
  } else {
    return { nextCategory: 'qa-speaking', nextTopicId: 1, nextTitle: '500 Speaking Q&A Chuỗi 5 Câu Mẫu' };
  }
}

// 3. Get catalog list for the topic switcher dropdown/modal
export function getTopicsCatalogForCategory(category: KnowledgeCategoryType): TopicCatalogItem[] {
  if (category === 'qa-speaking') {
    return Array.from({ length: 25 }, (_, i) => {
      const packId = i + 1;
      const startQ = (packId - 1) * 20 + 1;
      const endQ = packId * 20;
      const sampleItem = getQA1000Item(startQ);
      return {
        id: packId,
        category: 'qa-speaking',
        title: `Speaking Gói ${packId}: ${sampleItem.topic}`,
        titleEn: `Questions ${startQ}-${endQ} (${sampleItem.subType})`,
        categoryName: sampleItem.subType,
        itemCount: 120 // 20 questions * 6 notes
      };
    });
  }

  if (category === 'qa-writing') {
    return Array.from({ length: 25 }, (_, i) => {
      const packId = i + 1;
      const startQ = 500 + (packId - 1) * 20 + 1;
      const endQ = 500 + packId * 20;
      const sampleItem = getQA1000Item(startQ);
      return {
        id: packId,
        category: 'qa-writing',
        title: `Writing Gói ${packId}: ${sampleItem.topic}`,
        titleEn: `Essays/Reports ${startQ}-${endQ} (${sampleItem.subType})`,
        categoryName: sampleItem.subType,
        itemCount: 120 // 20 prompts * 6 notes
      };
    });
  }

  if (category === 'qa-master') {
    return Array.from({ length: 34 }, (_, i) => {
      const batchId = i + 1;
      const startQ = (batchId - 1) * 30 + 1;
      const endQ = Math.min(1000, batchId * 30);
      return {
        id: batchId,
        category: 'qa-master',
        title: `Master 1000 Q&A Giai Đoạn ${batchId}`,
        titleEn: `Continuous 1000 Q&A Batch (${startQ} - ${endQ})`,
        categoryName: '1000 Q&A Endless',
        itemCount: 180
      };
    });
  }

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
