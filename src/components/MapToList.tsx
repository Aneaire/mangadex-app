import { getCoverArtTypes } from "@/lib/utils";
import { IMangaCard } from "@/types/manga";
import MangaCard from "./MangaCard";

const MapToList = ({ mangaList }: { mangaList: IMangaCard[] }) => {
  return mangaList.map((manga: IMangaCard) => {
    const coverArtId = getCoverArtTypes(manga)[0].id;

    return (
      <MangaCard
        id={manga.id}
        key={manga.id}
        coverArt={coverArtId}
        title={manga.attributes.title}
        chapters={manga.attributes.lastChapter}
      />
    );
  });
};

export default MapToList;
