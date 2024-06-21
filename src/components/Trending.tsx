"use client";

import { getTrendingManga } from "@/lib/mangadex";
import { IMangaCard } from "@/types/manga";
import { useState } from "react";
import { Button } from "./ui/button";

const Trending = () => {
  const [trendingManga, setTrendingManga] = useState<any[]>([]);

  const [page, setPage] = useState<number>(1);

  const fetchManga = async () => {
    await getTrendingManga(page).then((data: any) => {
      setTrendingManga((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    });
  };

  console.log(trendingManga);
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <Button onClick={() => fetchManga()}>Next Page</Button>
      <div className=" flex flex-col">
        {trendingManga.map((manga: IMangaCard) => (
          <>
            {/* <p>{getCoverArtTypes(manga)}</p> */}
            <p>{manga.attributes.title.en}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Trending;
