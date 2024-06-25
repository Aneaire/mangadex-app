import { responseToClient } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const BASE_URL = process.env.MANGADEX_COVER_ART_BASE_URL;
  const { searchParams } = new URL(request.url);
  const coverArtId = searchParams.get("coverArtId");

  try {
    const fetchedData = await fetch(`${BASE_URL}/${coverArtId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!fetchedData.ok) {
      return NextResponse.json(
        responseToClient({
          status: "error",
          message: "Error fetching data",
          data: undefined,
        })
      );
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
