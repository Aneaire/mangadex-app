"use client";

import { useFetchMangaList } from "@/lib/query/queries";
import { ITypeList } from "@/types/manga";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import MapToList from "./MapToList";
import ShowAllCard from "./ShowAllCard";
import NoDataPlaceholder from "./common/NoDataPlaceholder";
import { Button } from "./ui/button";
import { Carousel, CarouselContent } from "./ui/carousel";

const MangaList = ({ type, heading }: { type: ITypeList; heading: string }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [ref, inView] = useInView();

  const { data, isLoading, error, fetchNextPage } = useFetchMangaList({ type });

  if (inView) fetchNextPage();

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
    // if (seeMore) fetchNextPage();
  };

  if (isLoading) return <></>;
  return (
    <div className=" relative">
      <h5 className=" font-medium font-montserrat pb-2 w-full flex justify-between items-center">
        <span>{heading}</span>{" "}
        <Button onClick={handleSeeMore} className="">
          <p className=" lg:inline hidden">
            {seeMore ? "See less" : "See more"}{" "}
          </p>
          {seeMore ? (
            <EyeOffIcon className=" ml-2" size={20} />
          ) : (
            <EyeIcon className=" ml-2" size={20} />
          )}
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              <ShowAllCard mangaList={data} />{" "}
              <div
                className=" w-5/6 mt-auto py-10  flex items-center justify-center"
                ref={ref}
              >
                <Loader2 />
              </div>
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
