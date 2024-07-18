import { useCupcakeContext } from "@/context/cookiesContext";
import { getCoverArt, getManga } from "@/lib/mangadex";
import { useGetManga } from "@/lib/query/queries";
import { getCoverArtTypes, getTitle } from "@/lib/utils";
import { IMangaCard } from "@/types/manga";
import { HeartHandshakeIcon, HeartPulseIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const MangaInfo = ({ id }: { id: string }) => {
  const [manga, setManga] = useState<IMangaCard>();
  const { library, saveToLibrary, removeToLibrary } = useCupcakeContext();

  const [toggleDesc, setToggleDesc] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const { data } = useGetManga(id);
  console.log(data);

  useEffect(() => {
    getManga(id).then((data) => {
      setManga(data.data);
      const coverArtId = getCoverArtTypes(data.data)[0].id;
      getCoverArt(coverArtId, id, "original").then((data: any) => {
        setImageUrl(data);
      });
    });
  }, [id]);

  const saved = library.includes(id);

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
        {!saved ? (
          <Button
            onClick={() => saveToLibrary(id)}
            className=" flex items-center justify-center gap-2 bg-blue-600 px-3 mt-5 text-base"
          >
            Save to Library <HeartHandshakeIcon />
          </Button>
        ) : (
          <Button
            onClick={() => removeToLibrary(id)}
            className=" flex items-center justify-center gap-2 bg-rose-600 px-3 mt-5 text-base"
          >
            Unsaved <HeartPulseIcon />
          </Button>
        )}
      </div>
    </section>
  );
};

export default MangaInfo;
