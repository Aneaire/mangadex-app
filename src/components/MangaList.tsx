"use client";

import { getNewReleases, getTrendingManga } from "@/lib/mangadex";
import { IMangaCard } from "@/types/manga";
import { useEffect, useMemo, useState } from "react";
import MapToList from "./MapToList";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const MangaList = ({ type }: { type: "trending" | "new releases" }) => {
  const [mangaList, setMangaList] = useState<IMangaCard[]>([]);
  const [page, setPage] = useState<number>(1);

  const heading =
    type === "trending"
      ? `Trending In  in ${new Date().getFullYear()}`
      : "New Releases";

  const getMangaList = useMemo(() => {
    return (): void => {
      if (type === "trending") {
        getTrendingManga(page).then((data: any) => {
          const newData = data.filter((manga: IMangaCard) => {
            return !mangaList.some((m) => m.id === manga.id);
          });
          setMangaList(newData);
          setPage((prev) => prev + 1);
        });
      }
      if (type === "new releases") {
        getNewReleases(page).then((data: any) => {
          const newData = data.filter((manga: IMangaCard) => {
            return !mangaList.some((m) => m.id === manga.id);
          });
          setMangaList(newData);
          setPage((prev) => prev + 1);
        });
      }
    };
  }, [type]);

  useEffect(() => {
    getMangaList();
  }, [type]);
  console.log(mangaList);
  return (
    <div className="  py-1 relative">
      <h5 className=" font-medium font-montserrat pb-2">{heading}</h5>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="-ml-4">
          <MapToList mangaList={mangaList} />
        </CarouselContent>
        <CarouselPrevious className="  hidden lg:flex" />
        <CarouselNext className=" hidden lg:flex" />
      </Carousel>
      <div className=" py-[1px] w-full bg-white/20 mt-5" />
    </div>
  );
};

export default MangaList;
