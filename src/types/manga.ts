export type IMangaCard = {
  id: string;
  attributes: {
    title: {
      en: string;
    };
    description: {
      en: string;
    };
    createdAt: string;
    contentRating: "safe" | "suggestive" | "erotica" | "pornographic";
    lastChapter: string;
    updatedAt: string;
    year: number;
    status: "ongoing" | "completed" | "hiatus";
  };
  latestChapter: string;
  relationships: {
    id: string;
    type: string;
  }[];
};

export type IRelationship = {
  id: string;
  type: string;
}[];

export type IChapters = {
  attributes: { chapter: string; readableAt: string; title: string };
  id: string;
};

export type IResponseToClient = {
  status: "success" | "error";
  data: any | undefined;
  message: "Successfully fetched data" | "Error fetching data";
};

export type ITypeList =
  | "trending"
  | "new releases"
  | "complete"
  | "romance"
  | "action"
  | "ecchi";
