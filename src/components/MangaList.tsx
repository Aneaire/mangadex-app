"use client";

import { useFetchMangaList } from "@/lib/query/queries";
import { ITypeList } from "@/types/manga";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import MapToList from "./MapToList";
import ShowAllCard from "./ShowAllCard";
import NoDataPlaceholder from "./common/NoDataPlaceholder";
import { Button } from "./ui/button";
import { Carousel, CarouselContent } from "./ui/carousel";

const MangaList = ({ type }: { type: ITypeList }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [ref, inView] = useInView();

  const heading =
    type === "trending"
      ? `Trending In  in ${new Date().getFullYear()}`
      : "New Releases";

  const { data, isLoading, error, fetchNextPage } = useFetchMangaList({ type });

  // useEffect(() => {
  //   console.log(inView);
  //   if (inView) fetchNextPage();
  // }, [inView]);

  if (inView) fetchNextPage();

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
    if (seeMore) fetchNextPage();
  };

  if (isLoading) return <></>;
  return (
    <div className="  py-1 relative">
      <h5 className=" font-medium font-montserrat pb-2 w-full flex justify-between items-center">
        <span>{heading}</span>{" "}
        <Button onClick={handleSeeMore} className="">
          See more
        </Button>
      </h5>
      {!seeMore && data && (
        <Carousel>
          <CarouselContent>
            <MapToList mangaList={data?.pages[0].data} />
          </CarouselContent>
        </Carousel>
      )}
      <div className=" flex flex-wrap gap-3 ">
        {seeMore && (
          <>
            <ShowAllCard mangaList={data} />
            <div className=" h-full flex items-center justify-center" ref={ref}>
              <Loader2 />
            </div>
          </>
        )}
      </div>
      {error === undefined && <NoDataPlaceholder />}
      <div className=" py-[1px] w-full bg-white/20 mt-5" />
    </div>
  );
};

export default MangaList;
