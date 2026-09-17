// Piano Knowledge Adapter: Unifies all knowledge bases + 1000 Q&A Sequences + 5 Core Mastery Pillars

import { getChapter, CHAPTER_CATALOG } from '../data/chapters';
import { getWritingChapter } from '../data/writing/writingData';
import { getSpeakingChapter } from '../data/speaking/speakingData';
import { getListeningChapter } from '../data/listening/listeningData';
import { COMMON_MISTAKES_DATA } from '../data/mistakes/commonMistakes';
import { getQA1000Item, QA1000Item } from '../data/qa1000/qa1000Data';
import { 
  GRAMMAR_MASTERY_DATA, 
  CONNECTORS_MATRIX_DATA, 
  PARAPHRASE_MATRIX_DATA, 
  SPOKEN_IDIOMS_DATA, 
  PHONOLOGY_MASTERY_DATA,
  MasteryItem
} from '../data/mastery/coreIeltsMastery';
import { VocabWord } from '../types';

export type KnowledgeCategoryType = 
  | 'qa-speaking' 
  | 'qa-writing' 
  | 'qa-master'
  | 'grammar-mastery'
  | 'connectors-matrix'
  | 'paraphrase-matrix'
  | 'spoken-idioms'
  | 'listening-phonology'
  | 'chapter' 
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
  itemType: 'vocab' | 'sentence' | 'mistake' | 'idiom' | 'collocation' | 'structure' | 'qa-question' | 'qa-sentence' | 'mastery-rule';
  
  // Q&A / Mastery Step Metadata
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

// Convert MasteryItem into Piano Knowledge Items
function convertMasteryItemToNotes(m: MasteryItem, category: KnowledgeCategoryType): PianoKnowledgeItem[] {
  const notes: PianoKnowledgeItem[] = [];

  // Note 1: Formula / Rule Definition
  notes.push({
    id: `${m.id}-rule`,
    category,
    categoryLabel: m.title,
    topicTitle: m.title,
    topicSubtitle: m.subtitle,
    chapterOrTopicId: m.id,
    itemType: 'mastery-rule',
    qaStepBadge: '📐 CÔNG THỨC / QUY TẮC',
    qaStepRole: 'Formula & Rule Definition',
    englishText: m.formulaOrRule || m.englishText,
    vietnameseText: m.subtitle,
    band: m.bandTarget,
    explanation: m.explanation,
    collocations: m.collocations
  });

  // Note 2: Band 8.5+ Model Application Sentence
  notes.push({
    id: `${m.id}-model`,
    category,
    categoryLabel: m.title,
    topicTitle: m.title,
    topicSubtitle: `Áp dụng mẫu Band 8.5+`,
    chapterOrTopicId: m.id,
    itemType: 'sentence',
    qaStepBadge: '✨ CÂU MẪU BAND 8.5+',
    qaStepRole: 'Band 8.5+ Applied Model',
    englishText: m.englishText,
    vietnameseText: m.vietnameseText,
    band: m.bandTarget,
    exampleSentence: m.exampleSentence,
    exampleSentenceVi: m.exampleSentenceVi,
    explanation: m.explanation,
    collocations: m.collocations
  });

  // Note 3: Concrete Context Illustration
  if (m.exampleSentence) {
    notes.push({
      id: `${m.id}-example`,
      category,
      categoryLabel: m.title,
      topicTitle: m.title,
      topicSubtitle: `Ví dụ ngữ cảnh thực tế`,
      chapterOrTopicId: m.id,
      itemType: 'sentence',
      qaStepBadge: '💡 VÍ DỤ NGỮ CẢNH',
      qaStepRole: 'Contextual Example',
      englishText: m.exampleSentence,
      vietnameseText: m.exampleSentenceVi || m.vietnameseText,
      band: m.bandTarget,
      explanation: m.explanation,
      collocations: m.collocations
    });
  }

  return notes;
}

// 1. Get Topic Items for a specific Category & Topic ID
export function getPianoKnowledgeItems(category: KnowledgeCategoryType, topicId: number | string): PianoKnowledgeItem[] {
  const items: PianoKnowledgeItem[] = [];
  const numId = typeof topicId === 'number' ? topicId : parseInt(topicId, 10) || 1;

  if (category === 'grammar-mastery') {
    GRAMMAR_MASTERY_DATA.forEach(g => {
      items.push(...convertMasteryItemToNotes(g, 'grammar-mastery'));
    });
  } else if (category === 'connectors-matrix') {
    CONNECTORS_MATRIX_DATA.forEach(c => {
      items.push(...convertMasteryItemToNotes(c, 'connectors-matrix'));
    });
  } else if (category === 'paraphrase-matrix') {
    PARAPHRASE_MATRIX_DATA.forEach(p => {
      items.push(...convertMasteryItemToNotes(p, 'paraphrase-matrix'));
    });
  } else if (category === 'spoken-idioms') {
    SPOKEN_IDIOMS_DATA.forEach(i => {
      items.push(...convertMasteryItemToNotes(i, 'spoken-idioms'));
    });
  } else if (category === 'listening-phonology') {
    PHONOLOGY_MASTERY_DATA.forEach(ph => {
      items.push(...convertMasteryItemToNotes(ph, 'listening-phonology'));
    });
  } else if (category === 'qa-speaking') {
    const pack = Math.max(1, Math.min(25, numId));
    const startQ = (pack - 1) * 20 + 1;
    const endQ = Math.min(500, startQ + 19);

    for (let q = startQ; q <= endQ; q++) {
      const qa = getQA1000Item(q);
      items.push(...convertQAItemToNotes(qa));
    }
  } else if (category === 'qa-writing') {
    const pack = Math.max(1, Math.min(25, numId));
    const startQ = 500 + (pack - 1) * 20 + 1;
    const endQ = Math.min(1000, startQ + 19);

    for (let q = startQ; q <= endQ; q++) {
      const qa = getQA1000Item(q);
      items.push(...convertQAItemToNotes(qa));
    }
  } else if (category === 'qa-master') {
    const startQ = Math.max(1, ((numId - 1) * 30) + 1);
    const endQ = Math.min(1000, startQ + 29);

    for (let q = startQ; q <= endQ; q++) {
      const qa = getQA1000Item(q);
      items.push(...convertQAItemToNotes(qa));
    }
  } else if (category === 'chapter') {
    const chapter = getChapter(numId);
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
            vietnameseText: `${d.speaker} (${d.speakerRole || 'Nhân vật'}): Lời thoại kịch tính`,
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

  if (currentCategory === 'grammar-mastery') {
    return { nextCategory: 'connectors-matrix', nextTopicId: 1, nextTitle: 'Ma Trận Từ Nối Logic Cohesion (CC 8.5+)' };
  } else if (currentCategory === 'connectors-matrix') {
    return { nextCategory: 'paraphrase-matrix', nextTopicId: 1, nextTitle: 'Bảng Paraphrase Từ Đồng Nghĩa Thay Thế' };
  } else if (currentCategory === 'paraphrase-matrix') {
    return { nextCategory: 'spoken-idioms', nextTopicId: 1, nextTitle: 'Thành Ngữ Tự Nhiên Spoken Idioms' };
  } else if (currentCategory === 'spoken-idioms') {
    return { nextCategory: 'listening-phonology', nextTopicId: 1, nextTitle: 'Quy Tắc Ngữ Âm & Bẫy Listening' };
  } else if (currentCategory === 'listening-phonology') {
    return { nextCategory: 'qa-speaking', nextTopicId: 1, nextTitle: '500 Speaking Q&A Chuỗi 5 Câu Mẫu' };
  } else if (currentCategory === 'qa-speaking') {
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
      return { nextCategory: 'grammar-mastery', nextTopicId: 1, nextTitle: '8 Cấu Trúc Ngữ Pháp Điểm Tuyệt Đối (GRA 8.5+)' };
    }
  } else {
    return { nextCategory: 'qa-speaking', nextTopicId: 1, nextTitle: '500 Speaking Q&A Chuỗi 5 Câu Mẫu' };
  }
}

// 3. Get catalog list for the topic switcher dropdown/modal
export function getTopicsCatalogForCategory(category: KnowledgeCategoryType): TopicCatalogItem[] {
  if (category === 'grammar-mastery') {
    return [
      {
        id: 1,
        category: 'grammar-mastery',
        title: '8 Cấu Trúc Ngữ Pháp Điểm Tuyệt Đối',
        titleEn: 'The 8 Advanced Band 8.5+ Grammatical Structures',
        categoryName: 'GRA 8.5+ Mastery',
        itemCount: 24
      }
    ];
  }

  if (category === 'connectors-matrix') {
    return [
      {
        id: 1,
        category: 'connectors-matrix',
        title: 'Ma Trận Từ Nối Logic & Liên Kết Ý',
        titleEn: 'Academic Discourse Markers & Transition Connectors',
        categoryName: 'Coherence & Cohesion',
        itemCount: 16
      }
    ];
  }

  if (category === 'paraphrase-matrix') {
    return [
      {
        id: 1,
        category: 'paraphrase-matrix',
        title: 'Bảng Paraphrase Từ Đồng Nghĩa Thay Thế',
        titleEn: 'Lexical Paraphrase Matrix & Repetition Buster',
        categoryName: 'Lexical Resource',
        itemCount: 15
      }
    ];
  }

  if (category === 'spoken-idioms') {
    return [
      {
        id: 1,
        category: 'spoken-idioms',
        title: 'Kho Thành Ngữ Tự Nhiên Speaking',
        titleEn: 'High-Scoring Spoken Idioms for Speaking 7.5+',
        categoryName: 'Idiomatic Language',
        itemCount: 15
      }
    ];
  }

  if (category === 'listening-phonology') {
    return [
      {
        id: 1,
        category: 'listening-phonology',
        title: 'Quy Tắc Ngữ Âm & Bắt Bẫy Listening',
        titleEn: 'Connected Speech, Elision & Distractor Trap Rules',
        categoryName: 'Listening Phonology',
        itemCount: 12
      }
    ];
  }

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
        itemCount: 120
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
        itemCount: 120
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
