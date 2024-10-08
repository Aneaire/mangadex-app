import { useCupcakeContext } from "@/context/cookiesContext";
import { useMangaChapters } from "@/lib/mangaStore";
import { useGetChapterPanels } from "@/lib/query/queries";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ChapterNav from "../common/ChapterNav";
import ImageWithPlaceholder from "../ImageWithPlaceholder";
import { Button } from "../ui/button";

const Panel = ({
  mangaId,
  chapterId,
}: {
  mangaId: string;
  chapterId: string;
}) => {
  const { addToReadedChapters } = useCupcakeContext();
  const { data: panelList } = useGetChapterPanels(chapterId);
  const setSelectedChapter = useMangaChapters(
    (state) => state.setSelectedChapter
  );

  const [visiblePanels, setVisiblePanels] = useState<string[]>([]);
  const [ref, inView] = useInView();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mangaId]);

  const chunkSize = 10; // Number of panels to load initially and per chunk

  useEffect(() => {
    if (mangaId) {
      addToReadedChapters(mangaId, chapterId);
    }
  }, [chapterId]);

  useEffect(() => {
    if (panelList && panelList.length > 0) {
      // Load initial chunk
      setVisiblePanels(panelList.slice(0, chunkSize));
    }
  }, [panelList]);

  useEffect(() => {
    if (inView && visiblePanels.length < panelList.length) {
      // Load the next chunk when the last visible panel is in view
      const nextChunk = panelList.slice(
        visiblePanels.length,
        visiblePanels.length + chunkSize
      );
      setVisiblePanels((prevPanels) => [...prevPanels, ...nextChunk]);
    }
  }, [inView]);

  return (
    <section className=" scroll-smooth bg-secondaryBackground relative w-full">
      <Button
        onClick={() => setSelectedChapter("")}
        className=" px-2 py-0 top-2 right-2 absolute w-fit "
      >
        <XIcon className="" size={24} />
      </Button>
      <ChapterNav id={chapterId} />
      {!panelList && (
        <div className="w-full h-screen rounded-none bg-secondaryBackground animate-pulse flex items-center justify-center" />
      )}
      {visiblePanels &&
        visiblePanels.map((url: string, index: number) => (
          <div key={url} ref={index === visiblePanels.length - 1 ? ref : null}>
            <ImageWithPlaceholder src={url} />
          </div>
        ))}
      <ChapterNav id={chapterId} />
    </section>
  );
};

export default Panel;
