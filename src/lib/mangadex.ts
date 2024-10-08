import { ITypeList } from "@/types/manga";

const mangaBaseUrl = "api/manga";
const panelsBaseUrl = "api/panels";
const port = process.env.PORT || 3000;
const url = `http://localhost:${port}`;

const MANGADEX_BASE_URL = "https://api.mangadex.org";

export const limitList: number = 10;
export const chapterLimitList: number = 40;

export const getManga = async (id: string) => {
  try {
    const response = await fetch(`../api/manga?manga_id=${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching trending manga:", error);
    return [];
  }
};

export const fetchMangaList = async (page = 1, listType: ITypeList) => {
  try {
    const queryParams = new URLSearchParams({
      limit: page == 1 ? limitList.toString() : "5",
      offset: ((page - 1) * limitList).toString(),
      order: "desc",
      listType,
    });

    const response = await fetch(`${mangaBaseUrl}/list?${queryParams}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching trending manga:", error);
    return [];
  }
};

export const searchManga = (query: string) => {
  try {
    return fetch(`/api/manga/search?title=${query}`, {
      method: "GET",
    }).then((response) => response.json());
  } catch (error) {
    console.error("Error fetching trending manga:", error);
    return [];
  }
};

export const getCoverArt = async (
  coverArtId: string,
  mangaId: string,
  quality: "original" | "optimized"
) => {
  try {
    const response = await fetch(
      `/api/cover-art/${mangaId}?coverArtId=${coverArtId}&quality=${quality}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error("Error fetching image:", response.statusText);
      return null;
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    return objectUrl;
  } catch (error) {
    console.error("Error fetching cover art details:", error);
    return null;
  }
};

// CHAPTERS

export const getAllMangaChapters = async (
  mangaId: string,
  page: number = 1
) => {
  const offset = (page - 1) * chapterLimitList;
  let allChapters: any[] = [];

  try {
    const queryParams = new URLSearchParams({
      manga: mangaId,
      limit: chapterLimitList.toString(),
      offset: offset.toString(),
    });

    const res = await fetch(`../${mangaBaseUrl}/chapter?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error;

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching all manga chapters:", error);
    return [];
  }
};

// CHAPTER CONTENT

export const getChapterPanels = async (chapterId: string) => {
  try {
    const response = await fetch(`/${panelsBaseUrl}/${chapterId}`, {
      method: "GET",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error fetching chapter pages");
    }
    return data.data.chapter.data.map(
      (page: string) =>
        `${data.data.baseUrl}/data/${data.data.chapter.hash}/${page}`
    );
  } catch (error) {
    console.error("Error fetching chapter pages:", error);
    return [];
  }
};

export const getPanelImage = async (url: string) => {
  try {
    const response = await fetch(`/api/panels/image?url=${url}`);
    if (!response.ok) {
      console.error("Error fetching image:", response.statusText);
      return null;
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    return objectUrl;
  } catch (error) {
    console.error("Error fetching panel image:", error);
    return null;
  }
};

// export const getChapterPanels = async (chapterId: string, page = 1) => {
//   try {
//     const offset = (page - 1) * chapterLimitList;
//     const queryParams = new URLSearchParams({
//       offset: offset.toString(),
//       limit: chapterLimitList.toString(),
//     });

//     const response = await fetch(
//       `${BASE_URL}/at-home/server/${chapterId}?${queryParams}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         next: { revalidate: 600 }, // Cache for 10 minutes
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || "Error fetching chapter pages");
//     }
//     console.log(data);
//     return data.chapter.data.map(
//       (page: string) => `${data.baseUrl}/data/${data.chapter.hash}/${page}`
//     );
//   } catch (error) {
//     console.error("Error fetching chapter pages:", error);
//     return [];
//   }
// };

// ==============================================================================

export const testApiCall = async (page = 1) => {
  try {
    const limitList = 10;
    const queryParams = new URLSearchParams({
      limit: limitList.toString(),
      offset: ((page - 1) * limitList).toString(),
      "order[createdAt]": "desc",
    });

    const response = await fetch(`${mangaBaseUrl}?${queryParams}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);

    return data.data;
  } catch (error) {
    console.error("Error fetching trending manga:", error);
    return [];
  }
};
