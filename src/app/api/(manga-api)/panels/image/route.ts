import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const imageUrl = request.nextUrl.searchParams.get("url");

  try {
    const getImage = await fetch(imageUrl!, {
      next: { revalidate: false },
    });

    if (!getImage.ok) throw Error;

    const imageData = await getImage.arrayBuffer();

    if (!imageData) throw Error;

    return new NextResponse(imageData, {
      headers: {
        "Content-Type": getImage.headers.get("content-type")!,
        "Content-Length": getImage.headers.get("content-length")!,
      },
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Error fetching cover art details",
    });
  }
}
