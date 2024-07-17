import { responseToClient } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title")!;

  //   return NextResponse.json({ mangaId, chapterLimitList, offset });

  try {
    const queryParams = new URLSearchParams({
      title: title,
      limit: "7",
      "order[rating]": "desc",
      "order[followedCount]": "desc",
    });

    const response = await fetch(
      `https://api.mangadex.org/manga?${queryParams}`,
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

    return NextResponse.json(
      responseToClient({
        data: data,
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
