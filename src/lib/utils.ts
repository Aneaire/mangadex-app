import { IMangaCard } from "@/types/manga";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCoverArtTypes = (manga: IMangaCard): string[] => {
  return manga.relationships
    .filter((rel) => rel.type === "cover_art")
    .map((rel) => rel.type);
};
