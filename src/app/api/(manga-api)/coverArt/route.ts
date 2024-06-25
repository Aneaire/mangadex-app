import { responseToClient } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const BASE_URL = process.env.MANGADEX_COVER_ART_BASE_URL;
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";
  const order = searchParams.get("order") || "desc";

  try {
    const queryParams = new URLSearchParams({
      limit,
      offset,
      "order[followedCount]": order,
      "order[updatedAt]": order,
    });

    const fetchedData = await fetch(`${BASE_URL}?${queryParams}`, {
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
