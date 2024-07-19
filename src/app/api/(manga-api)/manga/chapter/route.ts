import { responseToClient } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const mangaId = request.nextUrl.searchParams.get("manga")!;
  const chapterLimitList = request.nextUrl.searchParams.get("limit")!;
  const offset = request.nextUrl.searchParams.get("offset")!;

  let allChapters: any[] = [];

  //   return NextResponse.json({ mangaId, chapterLimitList, offset });

  try {
    const queryParams = new URLSearchParams({
      manga: mangaId,
      limit: chapterLimitList,
      offset: offset,
      "order[volume]": "desc",
      "order[chapter]": "desc",
      // "order[readableAt]": "desc",
      // "order[updatedAt]": "desc",
      "order[createdAt]": "desc",
      "translatedLanguage[]": "en",
    });

    const response = await fetch(
      `https://api.mangadex.org/chapter?${queryParams}`,
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

    return NextResponse.json(
      responseToClient({
        data: allChapters,
        status: "success",
        message: "Successfully fetched data",
      })
    );
  } catch (error) {
    return NextResponse.json(
      responseToClient({
        status: "error",
        message: "Error fetching data",
        data: error,
      })
    );
  }
}
