import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const BASE_URL = process.env.MANGADEX_BASE_URL;
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";
  const order = searchParams.get("order[createdAt]") || "desc";

  try {
    const fetchedData = await fetch(
      `${BASE_URL}/manga?limit=${limit}&offset=${offset}&order[createdAt]=${order}`,
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

    return NextResponse.json({
      status: "success",
      message: "Data fetched successfully",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "Error fetching data",
      data: error.message,
    });
  }
}
