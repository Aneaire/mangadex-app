import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const coverArtId = request.nextUrl.searchParams.get("coverArtId");
  const quality = request.nextUrl.searchParams.get("quality");
  const mangaId = params.id;
  const baseUrl = process.env.MANGADEX_BASE_URL;
  const imageBaseUrl = process.env.MANGADEX_COVER_ART_IMAGE_BASE_URL;

  try {
    const getCoverInfo = await fetch(`${baseUrl}/cover/${coverArtId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MANGADEX_API_KEY}`,
      },
    });

    if (!getCoverInfo.ok) throw Error;

    const data = await getCoverInfo.json();
    const fileName = data.data.attributes.fileName;

    const url = `${imageBaseUrl}/${mangaId}/${fileName}${
      quality === "original" ? "" : `.256.jpg`
    }`;

    const getImage = await fetch(url, {
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
