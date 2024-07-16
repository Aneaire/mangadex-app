import { useMangaChapters } from "@/lib/mangaStore";
import { findIndices } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { Button } from "../ui/button";

const ChapterNav = ({ id }: { id: string }) => {
  const chapters = useMangaChapters((state) => state.chapters);
  const router = useRouter();

  const handlePrevBtn = () => {
    const findIndex: number = findIndices(chapters, id).previousIndex!;
    console.log(findIndex);
    if (findIndex === null) return;
    router.replace(`/panel/${chapters[findIndex].id}`);
  };

  const handleNextBtn = () => {
    const findIndex: number = findIndices(chapters, id).nextIndex!;
    console.log(findIndex);
    if (findIndex === null) return;
    router.replace(`/panel/${chapters[findIndex].id}`);
  };

  return (
    <div className="w-full flex py-5 gap-2 justify-center bg-background">
      <Button
        className=" flex gap-2 bg-secondaryBackground"
        onClick={handlePrevBtn}
      >
        <ChevronLeft /> Prev Chapter
      </Button>
      <Button
        className=" flex gap-2 bg-secondaryBackground"
        onClick={handleNextBtn}
      >
        Next Chapter <ChevronRight />
      </Button>
    </div>
  );
};

export default memo(ChapterNav);
