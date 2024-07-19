import { useMangaChapters } from "@/lib/mangaStore";
import { findIndices } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo, useMemo, useState } from "react";
import { Button } from "../ui/button";

const ChapterNav = ({ id }: { id: string }) => {
  const chapters = useMangaChapters((state) => state.chapters);
  const setSelectedChapter = useMangaChapters(
    (state) => state.setSelectedChapter
  );
  const router = useRouter();

  const [indices, setIndices] = useState<{
    previousIndex: number | null;
    nextIndex: number | null;
  }>({ previousIndex: null, nextIndex: null });

  useMemo(() => {
    const { previousIndex, nextIndex } = findIndices(chapters, id);
    setIndices({ previousIndex, nextIndex });
  }, [chapters, id]);

  const handlePrevBtn = () => {
    if (indices.previousIndex === null) return;
    setSelectedChapter(chapters[indices.previousIndex].id);
  };

  const handleNextBtn = () => {
    if (indices.nextIndex === null) return;
    setSelectedChapter(chapters[indices.nextIndex].id);
  };

  return (
    <div className="w-full flex py-5 gap-2 justify-center bg-background">
      <Button
        className="flex gap-2 bg-secondaryBackground"
        onClick={handlePrevBtn}
        disabled={indices.previousIndex === null}
      >
        <ChevronLeft /> Prev Chapter
      </Button>
      <Button
        className="flex gap-2 bg-secondaryBackground"
        onClick={handleNextBtn}
        disabled={indices.nextIndex === null}
      >
        Next Chapter <ChevronRight />
      </Button>
    </div>
  );
};

export default memo(ChapterNav);
