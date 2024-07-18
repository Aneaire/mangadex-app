import { formatDateToDDMMYY } from "@/lib/utils";
import { IChapters } from "@/types/manga";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  console.log(isReaded);
  return (
    <div
      onClick={() => router.push(`/panel/${chapter.id}?mangaId=${mangaId}`)}
      key={chapter.id}
      className={`flex justify-between rounded w-full cursor-pointer bg-chapter px-4 py-2 ${
        isReaded && "opacity-50"
      }`}
    >
      <span className=" flex ga">
        <p className=" pr-1">
          Chapter{" "}
          {chapter.attributes.chapter ? chapter.attributes.chapter : "Unknown"}
        </p>
        <Separator orientation="vertical" className=" mx-2" />
        <p>{chapter.attributes.title}</p>
      </span>

      <span className=" ml-auto">
        {formatDateToDDMMYY(chapter.attributes.readableAt)}
      </span>
    </div>
  );
};

export default Chapter;
