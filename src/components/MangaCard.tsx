"use client";

import { getCoverArt } from "@/lib/mangadex";
import { getTitle } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MangaCard = ({
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

  useEffect(() => {
    return () => {
      getCoverArt(coverArt).then(async (data: any) => {
        const blob = await data.blob();
        const url = URL.createObjectURL(blob);
        console.log(url);
        setImageUrl(url);
      });
    };
  }, [coverArt]);

  return (
    <div
      onClick={() => router.push(`/manga/${id}`)}
      className="bg-card text-foreground rounded w-32 font-poppins"
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

export default MangaCard;
