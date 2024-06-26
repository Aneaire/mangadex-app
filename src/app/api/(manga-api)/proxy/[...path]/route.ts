import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, pathname } = new URL(request.url);
  const path = pathname.replace("/api/proxy/", ""); // Extract the path after "/api/proxy/"

  const url = `https://uploads.mangadex.org/${path}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "image/jpeg", // Adjust the content type as needed
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Error fetching data" },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type");
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(imageBuffer), {
      status: 200,
      headers: {
        "Content-Type": contentType || "image/jpeg",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching data", error: error.message },
      { status: 500 }
    );
  }
}
