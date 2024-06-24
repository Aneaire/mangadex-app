/* eslint-disable */
"use client";

import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { getChapterPanels } from "@/lib/mangadex";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const { id } = params as { id: string };

  const [panelList, setPanelList] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchPanelList = async () => {
      const data = await getChapterPanels(id);
      if (!ignore) {
        setPanelList(data);
      }
    };

    fetchPanelList();
    return () => {
      ignore = true;
    };
  }, [id]);

  console.log(panelList);
  return (
    <section className="scroll-smooth bg-secondaryBackground relative w-full">
      {panelList.map((url) => (
        <Suspense key={url} fallback={<div>Loading...</div>}>
          <ImageWithPlaceholder src={url} key={url} />
        </Suspense>
      ))}
    </section>
  );
};

export default page;
