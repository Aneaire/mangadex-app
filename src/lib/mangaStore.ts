import { create } from "zustand";

type MangaStore = {
  recentClickedManga: string;
  chapters: any[];
  setChapters: (chapters: any[]) => void;
  addChapters: (newChapters: any[]) => void;
  selectedChapter: string;
  setSelectedChapter: (chapter: string) => void;
  setRecentClickedManga: (mangaId: string) => void;
};

export const useMangaChapters = create<MangaStore>((set) => ({
  recentClickedManga: "",
  setRecentClickedManga: (mangaId: string) =>
    set({ recentClickedManga: mangaId }),
  chapters: [],
  setChapters: (chapters) => set({ chapters }),
  addChapters: (newChapters) =>
    set((state) => ({ chapters: [...state.chapters, ...newChapters] })),
  selectedChapter: "",
  setSelectedChapter: (chapter: string) => set({ selectedChapter: chapter }),
}));
