import { responseToClient } from "@/lib/server";
import { ITypeList } from "@/types/manga";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const BASE_URL = process.env.MANGADEX_BASE_URL;
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const order = searchParams.get("order") || "desc";
  const listType: ITypeList | string =
    searchParams.get("listType") || "trending";

  try {
    const queryParams = new URLSearchParams({});

    if (listType == "trending") {
      queryParams.append("order[followedCount]", order);
      queryParams.append("order[updatedAt]", order);
    }

    if (listType == "new releases") {
      queryParams.append("order[latestUploadedChapter]", "desc");
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
          revalidate: listType === "trending" ? 604800 : 3600,
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
