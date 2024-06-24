import { IChapters } from "@/types/manga";
import { useRouter } from "next/navigation";

const Chapter = ({ chapter }: { chapter: IChapters }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/panel/${chapter.id}`)}
      key={chapter.id}
      className=" rounded w-full bg-chapter px-4 py-2 "
    >
      Chapter{" "}
      {chapter.attributes.chapter ? chapter.attributes.chapter : "Unknown"}
    </div>
  );
};

export default Chapter;
