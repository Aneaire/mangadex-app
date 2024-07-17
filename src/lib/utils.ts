import { IMangaCard } from "@/types/manga";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCoverArtTypes = (
  manga: IMangaCard
): { id: string; type: string }[] => {
  return manga.relationships.filter((rel) => rel.type === "cover_art");
};

export function getTitle(title: Record<string, string>): string {
  return title["ja-ro"] || Object.values(title)[0];
}

export const findIndices = (array: any[], idToFind: string) => {
  // Find the index of the object with the specified id
  const currentIndex = array.findIndex((obj) => obj.id === idToFind);

  // If currentIndex is -1 (not found), return null or handle as needed
  if (currentIndex === -1) {
    return {
      previousIndex: null,
      nextIndex: null,
    };
  }

  // Calculate previous index
  const nextIndex = currentIndex > 0 ? currentIndex - 1 : null;

  // Calculate next index
  const previousIndex =
    currentIndex < array.length - 1 ? currentIndex + 1 : null;

  return {
    previousIndex,
    nextIndex,
  };
};
