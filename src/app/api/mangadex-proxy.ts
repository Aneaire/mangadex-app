// pages/api/mangadex-proxy.ts

import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch"; // Ensure node-fetch is installed

const BASE_URL = "https://api.mangadex.org"; // Replace with your MangaDex API base URL
const headers = {
  "Content-Type": "application/json",
  // Add your headers here as needed
};
const limitList = 10; // Define your default limitList

export const getTrendingManga = async (page = 1) => {
  try {
    const queryParams = new URLSearchParams({
      limit: limitList.toString(),
      offset: ((page - 1) * limitList).toString(),
      "order[followedCount]": "desc",
    });

    const response = await fetch(`${BASE_URL}/manga?${queryParams}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: any = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching trending manga:", error);
    return [];
  }
};

export const getNewReleases = async (page = 1) => {
  try {
    const queryParams = new URLSearchParams({
      limit: limitList.toString(),
      offset: ((page - 1) * limitList).toString(),
      "order[latestUploadedChapter]": "desc",
    });

    const response = await fetch(`${BASE_URL}/manga?${queryParams}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: any = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching new releases manga:", error);
    return [];
  }
};

// Default handler to export the API routes
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method } = req;

  try {
    let data = [];

    if (method === "GET") {
      if (query.path === "getTrendingManga") {
        const { page } = query;
        data = await getTrendingManga(Number(page));
      } else if (query.path === "getNewReleases") {
        const { page } = query;
        data = await getNewReleases(Number(page));
      } else {
        throw new Error("Invalid API endpoint");
      }
    } else {
      throw new Error("Only GET method is supported");
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
