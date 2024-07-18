import { useMangaChapters } from "@/lib/mangaStore";
import { useGetCoverArt, useGetManga } from "@/lib/query/queries";
import { getCoverArtTypes } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";

const LibraryData = ({ id }: { id: string }) => {
  const router = useRouter();
  const setChapters = useMangaChapters((state) => state.setChapters);
  const { data: manga, isLoading, error } = useGetManga(id);
  const {
    data: imageUrl,
    isLoading: imageUrlLoading,
    error: imageUrlError,
  } = useGetCoverArt(
    manga ? getCoverArtTypes(manga)[0].id : "",
    id,
    "optimized"
  );

  if (isLoading) return <div></div>;

  const handleClick = () => {
    router.push(`/manga/${id}`);
    setChapters([]);
  };

  return (
    <div
      onClick={handleClick}
      className=" cursor-pointer flex gap-3 w-full bg-secondaryBackground "
    >
      <div className="relative w-20 aspect-[9/12] rounded overflow-hidden">
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
      <div className="flex-1">
        <h2 className=" line-clamp-2 text-lg font-bold font-montserrat w-full">
          {manga?.attributes.title.en}
        </h2>
        <p className=" text-sm leading-4 line-clamp-2">
          {manga?.attributes.description.en}
        </p>
        <div className=" flex mt-2 gap-2">
          <Badge variant={"outline"}>{manga?.attributes.year}</Badge>
          <Badge variant={"accent"}>{manga?.attributes.status}</Badge>
        </div>
      </div>
    </div>
  );
};

export default LibraryData;
