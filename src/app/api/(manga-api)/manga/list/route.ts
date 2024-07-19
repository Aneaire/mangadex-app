import { responseToClient } from "@/lib/server";
import { ITypeList } from "@/types/manga";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const BASE_URL = process.env.MANGADEX_BASE_URL;
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const order = searchParams.get("order") || "desc";
  const listType: ITypeList = searchParams.get("listType") as ITypeList;

  try {
    const queryParams = new URLSearchParams({});

    if (listType == "trending") {
      queryParams.append("order[followedCount]", order);
      queryParams.append("order[updatedAt]", order);
      queryParams.append("order[relevance]", order);
    }

    if (listType == "new releases") {
      queryParams.append("order[latestUploadedChapter]", "desc");
    }

    if (listType == "complete") {
      queryParams.append("status[]", "completed");
      queryParams.append("order[updatedAt]", "desc");
      queryParams.append("order[followedCount]", order);
    }

    if (listType == "action") {
      const tags = [
        "391b0423-d847-456f-aff0-8b0cfc03066b",
        "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
        "ace04997-f6bd-436e-b261-779182193d3d",
        "87cc87cd-a395-47af-b27a-93258283bbc6",
      ];
      queryParams.append("order[latestUploadedChapter]", "desc");
      tags.map((tag) => queryParams.append("includedTags[]", tag));
    }

    if (listType == "romance") {
      const tags = [
        "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
        "4d32cc48-9f00-4cca-9b5a-a839f0764984",
      ];
      // queryParams.append("contentRating[]", "erotica");
      queryParams.append("order[latestUploadedChapter]", "desc");
      queryParams.append("order[relevance]", order);

      tags.map((tag) => queryParams.append("includedTags[]", tag));
    }

    if (listType == "ecchi") {
      queryParams.append("contentRating[]", "erotica");
      queryParams.append("order[latestUploadedChapter]", "desc");
      queryParams.append(
        "excludedTags[]",
        "5920b825-4181-4a17-beeb-9918b0ff7a30"
      );
    }

    const fetchedData = await fetch(
      `${BASE_URL}/manga?${queryParams}&limit=${limit}&offset=${offset}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: [listType],
          revalidate:
            listType === "trending" || "complete"
              ? 604800
              : listType === "new releases"
              ? 3600
              : 86400,
        },
      }
    );
    console.log(fetchedData);

    if (!fetchedData.ok) {
      return NextResponse.json({
        status: "error",
        message: "Error fetching data",
      });
    }

    const data = await fetchedData.json();

    return NextResponse.json(
      responseToClient({
        data: data.data,
        status: "success",
        message: "Successfully fetched data",
      })
    );
  } catch (error: any) {
    return NextResponse.json(
      responseToClient({
        status: "error",
        message: "Error fetching data",
        data: error.message,
      })
    );
  }
}
