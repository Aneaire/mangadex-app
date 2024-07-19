"use client";

import { getCoverArt } from "@/lib/mangadex";
import { useMangaChapters } from "@/lib/mangaStore";
import { getTitle } from "@/lib/utils";
import { IMangaCard } from "@/types/manga";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

const MangaLongCard = ({
  coverArt,
  title,
  chapters,
  id,
  desc,
  status,
  year,
}: {
  coverArt: string;
  title: any;
  chapters: string;
  id: string;
  status: IMangaCard["attributes"]["status"];
  desc: string;
  year: number;
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

  const handleClick = () => {
    router.push(`/manga/${id}`);
    setChapters([]);
  };

  return (
    <div
      onClick={handleClick}
      className=" flex gap-2 hover:bg-background transition py-2 cursor-pointer text-foreground rounded w-full font-poppins"
    >
      <div className="relative w-32 aspect-[9/12] rounded overflow-hidden">
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
      <div className="px-0.5 flex-1">
        <p className="text-xl font-medium line-clamp-1 break-all text-white">
          {getTitle(title)}
        </p>
        <span className=" space-x-2">
          <Badge>
            CH : {chapters && chapters.length > 0 ? chapters : "N/A"}
          </Badge>
          <Badge variant={status == "hiatus" ? "destructive" : "accent"}>
            {status}
          </Badge>
          <Badge variant="outline">yr : {year}</Badge>
        </span>

        <p className=" line-clamp-3 break-all">{desc}</p>
      </div>
    </div>
  );
};

export default MangaLongCard;
