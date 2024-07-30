import { useMangaChapters } from "@/lib/mangaStore";
import { useRouter } from "next/navigation";
import React from "react";

const OpenManga = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const router = useRouter();
  const recentClickedManga = useMangaChapters(
    (state) => state.recentClickedManga
  );
  const setChapters = useMangaChapters((state) => state.setChapters);
  const setSelectedChapter = useMangaChapters(
    (state) => state.setSelectedChapter
  );
  const setRecentClickedManga = useMangaChapters(
    (state) => state.setRecentClickedManga
  );

  const handleClick = () => {
    router.push(`/manga/${id}`);
    setSelectedChapter("");
    if (recentClickedManga !== id) {
      setChapters([]);
      setRecentClickedManga(id);
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default OpenManga;
