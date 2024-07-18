"use client";

import { useCupcakeContext } from "@/context/cookiesContext";
import LibraryData from "./LibraryData";

const LibraryList = () => {
  const { library, saveToLibrary, removeToLibrary } = useCupcakeContext();
  return (
    <div className="  py-1 relative">
      <h5 className=" font-medium font-montserrat pb-2 w-full flex justify-between items-center">
        <span># Library</span>
      </h5>
      <div className=" flex flex-col-reverse gap-2">
        {library.map((id) => {
          return <LibraryData id={id} key={id} />;
        })}
      </div>
      <div className=" py-[1px] w-full bg-white/20 mt-5" />
    </div>
  );
};

export default LibraryList;
