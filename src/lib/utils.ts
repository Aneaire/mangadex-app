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
