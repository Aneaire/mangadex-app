import { useMangaChapters } from "@/lib/mangaStore";
import { formatDateToDDMMYY } from "@/lib/utils";
import { IChapters } from "@/types/manga";
import { Separator } from "./ui/separator";

const Chapter = ({
  chapter,
  mangaId,
  isReaded,
}: {
  chapter: IChapters;
  mangaId: string;
  isReaded: boolean;
}) => {
  const setCurrentSelectedChapter = useMangaChapters(
    (state) => state.setSelectedChapter
  );
  return (
    <div
      onClick={() => {
        setCurrentSelectedChapter(chapter.id);
      }}
      key={chapter.id}
      className={`flex justify-between rounded w-full cursor-pointer bg-chapter px-4 gap-4 py-2 ${
        isReaded && "opacity-50"
      }`}
    >
      <span className=" flex ga">
        <p className=" pr-1">
          Chapter{" "}
          {chapter.attributes.chapter ? chapter.attributes.chapter : "Unknown"}
        </p>
        <Separator orientation="vertical" className=" mx-2" />
        <p className=" line-clamp-1">{chapter.attributes.title}</p>
      </span>

      <span className=" ml-auto">
        {formatDateToDDMMYY(chapter.attributes.readableAt)}
      </span>
    </div>
  );
};

export default Chapter;
