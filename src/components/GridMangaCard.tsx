"use client";

import { getCoverArt } from "@/lib/mangadex";
import { useMangaChapters } from "@/lib/mangaStore";
import { getTitle } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    getCoverArt(coverArt, id).then((data: any) => {
      setImageUrl(data.imageUrl);
    });
  };

  useEffect(() => {
    fetchCoverArts();
  }, [coverArt]);

  const handleClick = () => {
    router.push(`/manga/${id}`);
    setChapters([]);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-card cursor-pointer text-foreground rounded w-full sm:w-5/6 p-2"
    >
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
        <p className="text-accent text-xs mt-0.5">
          CH : {chapters && chapters.length > 0 ? chapters : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default GridMangaCard;
