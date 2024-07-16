import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const coverArtId = request.nextUrl.searchParams.get("coverArtId");
  const mangaId = params.id;
  const baseUrl = process.env.MANGADEX_BASE_URL;
  const imageBaseUrl = process.env.MANGADEX_COVER_ART_IMAGE_BASE_URL;

  try {
    const getCoverInfo = await fetch(`${baseUrl}/cover/${coverArtId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!getCoverInfo.ok) throw Error;

    const data = await getCoverInfo.json();
    const fileName = data.data.attributes.fileName;

    const url = `${imageBaseUrl}/${mangaId}/${fileName}`;

    // const getImage = await fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.MANGADEX_API_KEY}`,
    //   },
    // });

    // if (!getImage.ok) throw Error;

    // const imageData = await getImage.json();

    return NextResponse.json({
      status: "success",
      data: data,
      imageUrl: url,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Error fetching cover art details",
    });
  }
}
