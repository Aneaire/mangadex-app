import { getCoverArt, getManga } from "@/lib/mangadex";
import { getCoverArtTypes, getTitle } from "@/lib/utils";
import { IMangaCard } from "@/types/manga";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { Badge } from "./ui/badge";

const MangaInfo = ({ id }: { id: string }) => {
  const [manga, setManga] = useState<IMangaCard>();

  useEffect(() => {
    getManga(id).then((data) => {
      setManga(data);
      getCoverArt(getCoverArtTypes(data)[0].id, id).then((data: any) => {
        setImageUrl(data);
      });
    });
  }, [id]);

  const [toggleDesc, setToggleDesc] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  if (!manga) return <></>;

  return (
    <section className=" w-full flex flex-col text-center sm:text-start sm:flex-row gap-4">
      <div className=" w-full sm:w-[300px] mx-auto">
        <div className="relative object-cover w-full aspect-[9/12] ">
          {imageUrl && (
            <Image
              objectFit="cover"
              src={imageUrl}
              fill
              alt="cover art"
              sizes="400px"
            />
          )}
        </div>
      </div>
      <div className=" basis-10/12">
        <h2 className=" break-all font-montserrat font-bold leading-8 line-clamp-2 text-title ">
          {getTitle(manga.attributes.title)}
        </h2>
        <p
          className={`${toggleDesc ? "" : "line-clamp-5"} font-light`}
          onClick={() => setToggleDesc(!toggleDesc)}
        >
          {manga.attributes.description.en}
        </p>
        <span className=" flex gap-4 justify-center sm:justify-start items-center pt-2">
          <h5 className=" text-sm text-accent ">
            CH :{" "}
            {manga.attributes.lastChapter &&
            manga.attributes.lastChapter.length > 0
              ? manga.attributes.lastChapter
              : "N/A"}
          </h5>
          <Badge className=" text-[12px] font-normal tracking-wide py-1 bg-secondaryBackground">
            {manga.attributes.status}
          </Badge>
        </span>
      </div>
    </section>
  );
};

export default memo(MangaInfo);
