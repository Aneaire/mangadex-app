import { responseToClient } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const order = searchParams.get("order[createdAt]");

  try {
    const fetchedData = await fetch(
      `https://api.mangadex.org/manga?limit=${limit}&offset=${offset}&order[createdAt]=${order}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
