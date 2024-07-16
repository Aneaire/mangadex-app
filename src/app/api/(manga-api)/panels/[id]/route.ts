import { responseToClient } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const BASE_URL = process.env.MANGADEX_BASE_URL;
  const chapterId = params.id;

  try {
    const response = await fetch(`${BASE_URL}/at-home/server/${chapterId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: false },
    });

    if (!response.ok) throw Error;

    const data = await response.json();

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
