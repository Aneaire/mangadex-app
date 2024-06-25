import { responseToClient } from "@/lib/server";
import { ITypeList } from "@/types/manga";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const BASE_URL = process.env.MANGADEX_BASE_URL;
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";
  const order = searchParams.get("order") || "desc";
  const listType: ITypeList | string =
    searchParams.get("listType") || "trending";

  try {
    const queryParams = new URLSearchParams({
      limit,
      offset,
    });

    if (listType == "trending") {
      queryParams.append("order[followedCount]", order);
      queryParams.append("order[updatedAt]", order);
    }

    if (listType == "new releases") {
      queryParams.append("order[latestUploadedChapter]", "desc");
    }

    const fetchedData = await fetch(`${BASE_URL}/manga?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

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
