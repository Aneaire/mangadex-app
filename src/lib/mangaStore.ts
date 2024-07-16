import { create } from "zustand";

type MangaStore = {
  chapters: any[];
  setChapters: (chapters: any[]) => void;
  addChapters: (newChapters: any[]) => void;
};

export const useMangaChapters = create<MangaStore>((set) => ({
  chapters: [],
  setChapters: (chapters) => set({ chapters }),
  addChapters: (newChapters) =>
    set((state) => ({ chapters: [...state.chapters, ...newChapters] })),
}));
