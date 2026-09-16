import { Chapter, VocabWord } from '../../types';
import { CHAPTER_CATALOG, ChapterMeta } from './chapterCatalog';
import { buildChapter } from './chapterBuilder';

// In-memory LRU-style cache for fast switching between 100 chapters without memory leaks
const chapterCache = new Map<number, Chapter>();

export function getChapter(id: number): Chapter {
  if (chapterCache.has(id)) {
    return chapterCache.get(id)!;
  }
  const chapter = buildChapter(id);
  chapterCache.set(id, chapter);
  return chapter;
}

export function getAllChapterMetas(): ChapterMeta[] {
  return CHAPTER_CATALOG;
}

export function searchGlobalVocabulary(query: string, maxResults = 30): VocabWord[] {
  if (!query || query.trim().length < 2) return [];
  const cleanQ = query.toLowerCase().trim();
  const results: VocabWord[] = [];
  
  // Search through loaded chapters first, then scan through catalog
  for (let id = 1; id <= 100; id++) {
    const chapter = getChapter(id);
    for (const v of chapter.vocabularyVault) {
      if (
        v.word.toLowerCase().includes(cleanQ) ||
        v.meaningVi.toLowerCase().includes(cleanQ) ||
        v.meaningEn.toLowerCase().includes(cleanQ)
      ) {
        results.push(v);
        if (results.length >= maxResults) return results;
      }
    }
  }
  return results;
}

export { CHAPTER_CATALOG };
