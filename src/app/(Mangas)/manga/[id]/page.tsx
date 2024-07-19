"use client";

import ChapterList from "@/components/ChapterList";
import MangaInfo from "@/components/MangaInfo";
import Panel from "@/components/panels/Panel";
import { useMangaChapters } from "@/lib/mangaStore";
import { useParams } from "next/navigation";

const Manga = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const currentSelectedChapter = useMangaChapters(
    (state) => state.selectedChapter
  );

  const sel = useMangaChapters((state) => state.selectedChapter);
  console.log(sel);

  return (
    <section className=" w-full px-1 lg:px-3">
      {/* <TestCookies /> */}
      {!currentSelectedChapter ? (
        <>
          <MangaInfo id={id} />
          <ChapterList id={id} />
        </>
      ) : (
        <Panel mangaId={id} chapterId={currentSelectedChapter} />
      )}
    </section>
  );
};

export default Manga;
