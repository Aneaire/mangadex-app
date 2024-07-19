"use client";

import ChapterList from "@/components/ChapterList";
import MangaInfo from "@/components/MangaInfo";
import Panel from "@/components/panels/Panel";
import { useParams } from "next/navigation";
import { useState } from "react";

const Manga = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const [currentSelectedChapter, setCurrentSelectedChapter] = useState("");

  return (
    <section className=" w-full px-1 lg:px-3">
      {/* <TestCookies /> */}
      {!currentSelectedChapter ? (
        <>
          <MangaInfo id={id} />
          <ChapterList
            id={id}
            setCurrentSelectedChapter={setCurrentSelectedChapter}
          />
        </>
      ) : (
        <Panel mangaId={id} chapterId={currentSelectedChapter} />
      )}
    </section>
  );
};

export default Manga;
