"use client";

import ChapterNav from "@/components/common/ChapterNav";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { useCupcakeContext } from "@/context/cookiesContext";
import { getChapterPanels } from "@/lib/mangadex";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Panel = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  const { addToReadedChapters } = useCupcakeContext();

  const searchParams = useSearchParams();
  const mangaId = searchParams.get("mangaId");

  const [panelList, setPanelList] = useState([]);
  useEffect(() => {
    let ignore = false;

    const fetchPanelList = async () => {
      const data = await getChapterPanels(id);
      if (!ignore) {
        setPanelList(data);
      }
    };
    if (mangaId) {
      addToReadedChapters(mangaId, id);
    }
    fetchPanelList();
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <section className="scroll-smooth bg-secondaryBackground relative w-full">
      <ChapterNav id={id} />
      {!panelList && (
        <div className="w-full h-screen rounded-none bg-secondaryBackground animate-pulse flex items-center justify-center" />
      )}
      {panelList.map((url) => (
        <Suspense key={url} fallback={<div>Loading...</div>}>
          <ImageWithPlaceholder src={url} key={url} />
        </Suspense>
      ))}
      <ChapterNav id={id} />
    </section>
  );
};

export default Panel;
