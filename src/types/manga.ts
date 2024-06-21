export type IMangaCard = {
  id: string;
  attributes: {
    title: {
      en: string;
    };
    lastChapter: string;
    updatedAt: string;
    year: number;
  };
  latestChapter: string;
  relationships: {
    id: string;
    type: string;
  }[];
};
