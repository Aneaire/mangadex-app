import axios from "axios";

const BASE_URL = "https://api.mangadex.org";

export const limitList: number = 20;

export const getTrendingManga = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/manga`, {
      params: {
        limitList,
        offset: (page - 1) * limitList,
        order: { rating: "desc" },
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching trending manga:", error);
    return [];
  }
};
