import { responseToClient } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const BASE_URL = process.env.MANGADEX_BASE_URL;
  const key = process.env.MANGADEX_API_KEY;
  const mangaId = request.nextUrl.searchParams.get("manga_id");

  try {
    const url = `${BASE_URL}/manga/${mangaId}`;
    const fetchedData = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });

    if (!fetchedData.ok) throw Error;

    const data = await fetchedData.json();

    return NextResponse.json(
      responseToClient({
        data: data,
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
