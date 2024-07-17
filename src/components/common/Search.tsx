"use client";
import { useSearchManga } from "@/lib/query/queries";
import { getCoverArtTypes } from "@/lib/utils";
import { IMangaCard } from "@/types/manga";
import { Loader, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MangaLongCard from "../MangaLongCard";
import NoDataPlaceholder from "./NoDataPlaceholder";
import PlainInput from "./PlainInput";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [onSearch, setOnSearch] = useState(false);

  const { mutate: searchManga, data, isPending } = useSearchManga();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchManga(searchValue.toLowerCase());
  };

  console.log(data);

  return (
    <div>
      <div
        className={`flex absolute transition-all duration-500 top-2 right-2 z-10 px-2 rounded-md ${
          search ? " bg-background lg:max-w-600 w-9/12" : " bg-slate-700 w-fit"
        }`}
      >
        <span className=" flex items-center cursor-pointer px-1 py-2">
          {isPending ? (
            <Loader className=" animate-spin" />
          ) : (
            <SearchIcon
              className=" scale-140"
              onClick={() => setSearch(!search)}
            />
          )}
        </span>
        <form className=" w-full" action="submit" onSubmit={handleSubmit}>
          <PlainInput
            handleBlur={() => setTimeout(() => setOnSearch(false), 100)}
            onChange={setSearchValue}
            onClick={() => setOnSearch(true)}
            placeholder="Search"
            className={`px-0 w-0 placeholder:hidden duration-150 transition-all ease-in delay-500 ${
              search && "px-2 w-full flex-1"
            }`}
          />
        </form>
      </div>
      {data && onSearch && (
        <div className="absolute bg-secondaryBackground top-12 right-0 z-10 rounded-md w-full mx-auto md:mx-0 md:w-7/12 lg:w-5/12 overflow-y-scroll overflow-x-hidden max-h-[400px] no-scrollbar border-secondaryBackground border-4">
          {data.data.length === 0 && <NoDataPlaceholder text="No results" />}

          {data?.data.data.map((manga: IMangaCard) => {
            const coverArtId = getCoverArtTypes(manga)[0].id;
            return (
              <MangaLongCard
                year={manga.attributes.year}
                status={manga.attributes.status}
                desc={manga.attributes.description.en}
                key={manga.id}
                coverArt={coverArtId}
                title={manga.attributes.title}
                chapters={manga.attributes.lastChapter}
                id={manga.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
