import { ITypeList } from "@/types/manga";

const mangaListEndpoint = "api/manga";
const coverArtEndpoint = "api/cover-art";

const MANGADEX_BASE_URL = "https://api.mangadex.org";
const COVER_ART_BASE_URL = "https://uploads.mangadex.org/covers";

export const limitList: number = 2;
export const chapterLimitList: number = 40;

export const headers = {
  Authorization: `Bearer nh9Uq1J2qIE2IM7H8hDp7yz0NHYXtiZs`,
  "Content-Type": "application/json",
};

export const getManga = async (id: string) => {
  try {
    const response = await fetch(`${mangaListEndpoint}/manga/${id}`, {
      method: "GET",
      headers: headers,
      next: { revalidate: 172800 }, // Caches the response for 2 days
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
    const limitList = 10;
    const queryParams = new URLSearchParams({
      limit: limitList.toString(),
      offset: ((page - 1) * limitList).toString(),
      order: "desc",
      listType,
    });

    const response = await fetch(`${mangaListEndpoint}?${queryParams}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching trending manga:", error);
    return [];
  }
};

export const getCoverArt = async (coverArtId: string) => {
  try {
    const response = await fetch(
      `${coverArtEndpoint}?coverArtId=${coverArtId}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const coverArt = data.data;

    if (coverArt && coverArt.attributes && coverArt.attributes.fileName) {
      const fileName = coverArt.attributes.fileName;
      const mangaId = coverArt.relationships.find(
        (rel: any) => rel.type === "manga"
      ).id;
      const imageUrl = `${COVER_ART_BASE_URL}/${mangaId}/${fileName}`;
      return imageUrl;
    } else {
      console.error("Cover art filename not found");
      return null;
    }
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
      "order[volume]": "desc",
      "order[chapter]": "desc",
      "order[readableAt]": "desc",
      "order[updatedAt]": "desc",
      "order[createdAt]": "desc",
      "translatedLanguage[]": "en",
    });

    const response = await fetch(
      `${mangaListEndpoint}/chapter?${queryParams}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 600 }, // Cache for 10 minutes
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error((data as any) || "Error fetching manga chapters");
    }

    allChapters = [...allChapters, ...data.data];

    return allChapters;
  } catch (error) {
    console.error("Error fetching all manga chapters:", error);
    return [];
  }
};

// CHAPTER CONTENT

export const getChapterPanels = async (chapterId: string) => {
  try {
    const response = await fetch(
      `${mangaListEndpoint}/at-home/server/${chapterId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 600 }, // Cache for 10 minutes
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error fetching chapter pages");
    }
    return data.chapter.data.map(
      (page: string) => `${data.baseUrl}/data/${data.chapter.hash}/${page}`
    );
  } catch (error) {
    console.error("Error fetching chapter pages:", error);
    return [];
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

    const response = await fetch(`${mangaListEndpoint}?${queryParams}`, {
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
