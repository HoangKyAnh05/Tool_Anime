// Master Dataset: 1000 Authentic IELTS Speaking & Writing Questions with 5-Sentence Band 8.5+ Precision Models

import { getSpeakingPart1Item } from './speakingPart1';
import { getSpeakingPart2Item } from './speakingPart2';
import { getSpeakingPart3Item } from './speakingPart3';
import { getWritingTask1Item } from './writingTask1';
import { getWritingTask2Item } from './writingTask2';

export interface QASentence {
  stepIndex: number; // 1 to 5
  role: string; // 'Câu 1/5: Mở Đầu / Thesis', etc.
  roleEn: string;
  en: string;
  vi: string;
  keyCollocations?: string[];
}

export interface QA1000Item {
  id: number; // 1 to 1000
  type: 'speaking' | 'writing';
  subType: 'Speaking Part 1' | 'Speaking Part 2' | 'Speaking Part 3' | 'Writing Task 1' | 'Writing Task 2';
  topic: string;
  category: string;
  question: string;
  questionVi: string;
  bandTarget: string;
  sentences: QASentence[];
}

// Memory cache to instantly retrieve items
const qaItemCache = new Map<number, QA1000Item>();

// Master lookup for any index from 1 to 1000
export function getQA1000Item(id: number): QA1000Item {
  const cleanId = Math.max(1, Math.min(1000, id));
  if (qaItemCache.has(cleanId)) {
    return qaItemCache.get(cleanId)!;
  }

  let item: QA1000Item;

  // 1 to 200: Speaking Part 1
  if (cleanId <= 200) {
    const raw = getSpeakingPart1Item(cleanId);
    item = {
      id: cleanId,
      type: 'speaking',
      subType: 'Speaking Part 1',
      topic: raw.topic,
      category: raw.category,
      question: raw.question,
      questionVi: raw.questionVi,
      bandTarget: 'Band 8.5+',
      sentences: raw.sentences
    };
  }
  // 201 to 350: Speaking Part 2
  else if (cleanId <= 350) {
    const raw = getSpeakingPart2Item(cleanId - 200);
    item = {
      id: cleanId,
      type: 'speaking',
      subType: 'Speaking Part 2',
      topic: raw.topic,
      category: raw.category,
      question: raw.question,
      questionVi: raw.questionVi,
      bandTarget: 'Band 8.5 - 9.0',
      sentences: raw.sentences
    };
  }
  // 351 to 500: Speaking Part 3
  else if (cleanId <= 500) {
    const raw = getSpeakingPart3Item(cleanId - 350);
    item = {
      id: cleanId,
      type: 'speaking',
      subType: 'Speaking Part 3',
      topic: raw.topic,
      category: raw.category,
      question: raw.question,
      questionVi: raw.questionVi,
      bandTarget: 'Band 8.5 - 9.0',
      sentences: raw.sentences
    };
  }
  // 501 to 750: Writing Task 1 (Charts, Graphs, Maps, Processes)
  else if (cleanId <= 750) {
    const raw = getWritingTask1Item(cleanId - 500);
    item = {
      id: cleanId,
      type: 'writing',
      subType: 'Writing Task 1',
      topic: raw.topic,
      category: raw.category,
      question: raw.question,
      questionVi: raw.questionVi,
      bandTarget: 'Band 8.5 - 9.0',
      sentences: raw.sentences
    };
  }
  // 751 to 1000: Writing Task 2 (Essays)
  else {
    const raw = getWritingTask2Item(cleanId - 750);
    item = {
      id: cleanId,
      type: 'writing',
      subType: 'Writing Task 2',
      topic: raw.topic,
      category: raw.category,
      question: raw.question,
      questionVi: raw.questionVi,
      bandTarget: 'Band 8.5 - 9.0',
      sentences: raw.sentences
    };
  }

  qaItemCache.set(cleanId, item);
  return item;
}

// Helper to get pack of 20 Q&A items (120 notes)
export function getQAPack(packId: number): QA1000Item[] {
  const cleanPack = Math.max(1, Math.min(50, packId));
  const startId = (cleanPack - 1) * 20 + 1;
  const items: QA1000Item[] = [];
  for (let i = startId; i < startId + 20; i++) {
    items.push(getQA1000Item(i));
  }
  return items;
}
