"use client";

import { getCoverArt } from "@/lib/mangadex";
import { useMangaChapters } from "@/lib/mangaStore";
import { getTitle } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import OpenManga from "./common/OpenManga";

const GridMangaCard = ({
  coverArt,
  title,
  chapters,
  id,
}: {
  coverArt: string;
  title: any;
  chapters: string;
  id: string;
}) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const setChapters = useMangaChapters((state) => state.setChapters);

  const fetchCoverArts = async () => {
    getCoverArt(coverArt, id, "optimized").then((data: any) => {
      setImageUrl(data);
    });
  };

  useEffect(() => {
    fetchCoverArts();
  }, [coverArt]);

  return (
    <OpenManga id={id}>
      <div className="bg-card cursor-pointer text-foreground rounded w-full sm:w-5/6 p-2 transition-all hover:bg-secondaryBackground hover:-rotate-2">
        <div className="relative w-full aspect-[9/12] rounded overflow-hidden">
          {imageUrl && (
            <Image
              quality={50}
              sizes="200px"
              src={imageUrl}
              alt="Manga"
              priority
              className=" w-full h-full object-cover"
              fill
            />
          )}
        </div>
        <div className="px-0.5">
          <p className="text-sm font-medium line-clamp-1 break-all text-white">
            {getTitle(title)}
          </p>
          <p className=" text-[10px]">
            CH : {chapters && chapters.length > 0 ? chapters : "N/A"}
          </p>
        </div>
      </div>
    </OpenManga>
  );
};

export default GridMangaCard;
