"use client";

import ChapterList from "@/components/ChapterList";
import MangaInfo from "@/components/MangaInfo";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const { id } = params as { id: string };

  return (
    <section className=" w-full px-1 lg:px-3">
      <MangaInfo id={id} />
      <ChapterList id={id} />
    </section>
  );
};

export default page;
