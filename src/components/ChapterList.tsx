import { getAllMangaChapters } from "@/lib/mangadex";
import { LoaderPinwheelIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Chapter from "./Chapter";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const ChapterList = ({ id }: { id: string }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [chapterList, setChapterList] = useState<any[]>([]);
  const [chapterListFiltered, setChapterListFiltered] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [noMorePage, setNoMorePage] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [filterDuplication, setFilterDuplication] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchChapterList = async () => {
      const data = await getAllMangaChapters(id, page);

      console.log(data);
      if (data.length === 0) {
        setNoMorePage(true);
      }
      if (!ignore) {
        const newData = data.filter((chapter: any) => {
          const exist = chapterList.some(
            (c: any) => c.attributes.chapter === chapter.attributes.chapter
          );
          if (!exist) {
            return chapter;
          }
        });
        setChapterList((prev) => [...prev, ...newData]);
        ignore = false;
      }
    };

    fetchChapterList();

    return () => {
      ignore = true;
    };
  }, [id, page, inView]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  const displayedChapters = new Set();

  return (
    <section className=" pb-10 flex items-center flex-col gap-5 ">
      <span className=" pt-5 mt-5 w-full flex gap-3 items-center justify-end border-t border-solid border-secondaryBackground border-opacity-70">
        <Switch
          className=" bg-slate-200"
          onCheckedChange={(e) => setFilterDuplication(e)}
        />
        <p>Remove Duplicate Chapters</p>
      </span>
      <div className=" w-full space-y-2">
        {filterDuplication
          ? chapterList.map((chapter) => {
              const chapterNumber = chapter.attributes.chapter;

              // Skip if the chapter number is already displayed
              if (displayedChapters.has(chapterNumber)) {
                return null;
              }

              // Add the chapter number to the set of displayed chapters
              displayedChapters.add(chapterNumber);

              return <Chapter key={chapter.id} chapter={chapter} />;
            })
          : chapterList.map((chapter: any) => (
              <Chapter key={chapter.id} chapter={chapter} />
            ))}
      </div>
      {!showMore ? (
        <Button
          className={`bg-secondaryBackground`}
          onClick={() => setShowMore(true)}
        >
          Show More
        </Button>
      ) : (
        !noMorePage && (
          <LoaderPinwheelIcon
            ref={ref}
            className=" animate-spin size-10 my-5"
          />
        )
      )}
    </section>
  );
};

export default ChapterList;
