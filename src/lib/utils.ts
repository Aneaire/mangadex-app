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

export function formatDateToDDMMYY(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

export function waitSeconds(seconds: number) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {
    return true;
  }
}
