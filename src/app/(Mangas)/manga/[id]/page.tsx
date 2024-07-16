"use client";

import MangaInfo from "@/components/MangaInfo";
import { useParams } from "next/navigation";

const Manga = () => {
  const params = useParams();
  const { id } = params as { id: string };
  console.log(id);
  return (
    <section className=" w-full px-1 lg:px-3">
      <MangaInfo id={id} />
      {/* <ChapterList id={id} /> */}
    </section>
  );
};

export default Manga;
