import { useCupcakeContext } from "@/context/cookiesContext";
import { useGetCoverArt, useGetManga } from "@/lib/query/queries";
import { getCoverArtTypes, getTitle } from "@/lib/utils";
import { HeartHandshakeIcon, HeartPulseIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const MangaInfo = ({ id }: { id: string }) => {
  const { library, saveToLibrary, removeToLibrary } = useCupcakeContext();

  const [toggleDesc, setToggleDesc] = useState(false);
  const [coverArtId, setCoverArtId] = useState("");

  const { data: manga } = useGetManga(id);
  const { data: imageUrl } = useGetCoverArt(
    coverArtId,
    manga ? manga.id : "",
    "original"
  );
  console.log(manga);

  useEffect(() => {
    if (!manga) return;
    const coverArtId = getCoverArtTypes(manga)[0].id;
    setCoverArtId(coverArtId);
  }, [manga]);

  const saved = library.includes(id);

  if (!manga) return <></>;

  return (
    <section className=" w-full flex flex-col text-start sm:flex-row gap-4">
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
          className={` break-all ${
            toggleDesc ? "" : "line-clamp-5"
          } font-light`}
          onClick={() => setToggleDesc(!toggleDesc)}
        >
          {manga.attributes.description.en}
        </p>
        <span className=" mt-2 flex flex-wrap gap-2">
          Genre :
          {manga.attributes.tags.map((t) => (
            <Badge variant={"secondary"} key={t.id}>
              {t.attributes.name.en}
            </Badge>
          ))}
        </span>
        <span className=" flex gap-4 justify-start items-center pt-3">
          <p>Currently : </p>
          <Badge variant={"outline"}>{manga.attributes.status}</Badge>
          <h5 className=" text-sm ">
            CH :{" "}
            {manga.attributes.lastChapter &&
            manga.attributes.lastChapter.length > 0
              ? manga.attributes.lastChapter
              : "N/A"}
          </h5>
        </span>
        {!saved ? (
          <Button
            onClick={() => saveToLibrary(id)}
            className=" flex items-center justify-center gap-2 bg-blue-600 px-3 mt-3 text-base"
          >
            Save to Library <HeartHandshakeIcon />
          </Button>
        ) : (
          <Button
            onClick={() => removeToLibrary(id)}
            className=" flex items-center justify-center gap-2 bg-rose-600 px-3 mt-3 text-base"
          >
            Unsaved <HeartPulseIcon />
          </Button>
        )}
      </div>
    </section>
  );
};

export default MangaInfo;
