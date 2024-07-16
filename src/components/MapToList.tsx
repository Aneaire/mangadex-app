import { getCoverArtTypes } from "@/lib/utils";
import { IMangaCard } from "@/types/manga";
import MangaCard from "./MangaCard";
import { CarouselItem } from "./ui/carousel";

const MapToList = ({ mangaList }: { mangaList: IMangaCard[] }) => {
  return mangaList.map((manga: IMangaCard) => {
    const coverArtId = getCoverArtTypes(manga)[0].id;

    return (
      <CarouselItem key={manga.id} className=" basis-1.5/12">
        <MangaCard
          id={manga.id}
          key={manga.id}
          coverArt={coverArtId}
          title={manga.attributes.title}
          chapters={manga.attributes.lastChapter}
        />
      </CarouselItem>
    );
  });
};

export default MapToList;
