"use client";

import { fetchMangaList } from "@/lib/mangadex";
import { IMangaCard, IResponseToClient, ITypeList } from "@/types/manga";
import { useEffect, useMemo, useState } from "react";
import MapToList from "./MapToList";
import NoDataPlaceholder from "./common/NoDataPlaceholder";

const MangaList = ({ type }: { type: ITypeList }) => {
  const [mangaList, setMangaList] = useState<IMangaCard[]>([]);
  const [page, setPage] = useState<number>(1);
  const [fetchResult, setFetchResult] = useState<IResponseToClient["status"]>();

  const heading =
    type === "trending"
      ? `Trending In  in ${new Date().getFullYear()}`
      : "New Releases";

  const getMangaList = useMemo(() => {
    return async (): Promise<void> => {
      await fetchMangaList(page, type).then((data: IResponseToClient) => {
        const newData = data.data.filter((manga: IMangaCard) => {
          return !mangaList.some((m) => m.id === manga.id);
        });
        setFetchResult(data.status);
        setMangaList(newData);
        setPage((prev) => prev + 1);
      });
    };
  }, [type]);

  useEffect(() => {
    getMangaList();
  }, [type]);
  return (
    <div className="  py-1 relative">
      <h5 className=" font-medium font-montserrat pb-2">{heading}</h5>
      {fetchResult === "success" && <MapToList mangaList={mangaList} />}
      {fetchResult === "error" && <NoDataPlaceholder />}
      <div className=" py-[1px] w-full bg-white/20 mt-5" />
    </div>
  );
};

export default MangaList;
