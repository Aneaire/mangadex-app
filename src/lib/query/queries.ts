import { IMangaCard, ITypeList } from "@/types/manga";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchMangaList,
  getChapterPanels,
  getCoverArt,
  getManga,
  getPanelImage,
  searchManga,
} from "../mangadex";

export const useFetchMangaList = ({ type }: { type: ITypeList }) => {
  return useInfiniteQuery({
    queryKey: ["mangaList", type],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchMangaList(pageParam, type);
      return response; // Ensure this returns the expected data structure
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage && lastPage.data.length > 0) {
        return allPages.length + 1; // Increment page param
      }
      return null; // No more pages to fetch
    },
    initialPageParam: 1, // Initial page param
  });
};

export const useGetManga = (id: string) => {
  return useQuery({
    queryKey: ["manga", id],
    queryFn: async () => {
      const response = await getManga(id);
      return response.data as IMangaCard; // Ensure this returns the expected data structure
    },
  });
};

export const useGetCoverArt = (
  coverArtId: string,
  mangaId: string,
  quality: "original" | "optimized"
) => {
  return useQuery({
    queryKey: ["coverArt", coverArtId, mangaId],
    queryFn: async () => {
      const response = await getCoverArt(coverArtId, mangaId, quality);
      return response; // Ensure this returns the expected data structure
    },
    enabled: !!coverArtId && !!mangaId,
    gcTime: 5 * 60 * 1000,
  });
};

export const useSearchManga = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (query: string) => searchManga(query),
    mutationKey: ["searchManga"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mangaList"] });
    },
  });
};

export const useGetChapterPanels = (id: string) => {
  return useQuery({
    queryKey: ["chapterPanels", id],
    queryFn: async () => {
      const response = await getChapterPanels(id);
      return response; // Ensure this returns the expected data structure
    },
  });
};

export const useGetPanelImage = (url: string) => {
  return useQuery({
    queryKey: ["panelImage", url],
    queryFn: async () => {
      const response = await getPanelImage(url);
      return response; // Ensure this returns the expected data structure
    },
    enabled: !!url,
  });
};

// export const useSearchManga = (query: string) => {
//   return useInfiniteQuery({
//     queryKey: ["searchManga", query],
//     queryFn: async ({ pageParam = 1 }) => {
//       const response = await searchManga(pageParam, "search", query);
//       return response; // Ensure this returns the expected data structure
//     },
//     getNextPageParam: (lastPage, allPages) => {
//       if (lastPage && lastPage.data.length > 0) {
//         return allPages.length + 1; // Increment page param
//       }},
//     initialPageParam: 1,
// }

// export const useFetchMangaList = ({ type }: { type: ITypeList }) => {
//   return useInfiniteQuery({
//     queryKey: [QUERY_KEYS.mangaList, type],
//     queryFn: ({ pageParam }: { pageParam: number }) =>
//       fetchMangaList(pageParam, type) as any,
//     getNextPageParam: (lastPage: any) => {
//       console.log(lastPage);
//       if (lastPage && lastPage.data.length === 0) {
//         return null;
//       }
//       const lastId = lastPage?.documents[lastPage?.documents.length - 1].$id;
//       return lastId;
//     },
//     enabled: !!type,
//     initialPageParam: null,
//   });
// };
