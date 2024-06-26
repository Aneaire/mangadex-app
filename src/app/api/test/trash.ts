import { responseToClient } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const BASE_URL = process.env.MANGADEX_COVER_ART_BASE_URL || "";
  const { searchParams } = new URL(request.url);
  const coverArtId = searchParams.get("coverArtId");

  if (!coverArtId) {
    return NextResponse.json({
      status: "error",
      message: "coverArtId query parameter is required",
    });
  }

  try {
    const fetchedData = await fetch(`${BASE_URL}/${coverArtId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!fetchedData.ok) {
      return NextResponse.json({
        status: "error",
        message: "Error fetching cover art details",
      });
    }

    const data = await fetchedData.json();
    const coverArt = data.data;
    const headers = {
      Authorization: `Bearer nh9Uq1J2qIE2IM7H8hDp7yz0NHYXtiZs`,
      "Content-Type": "application/json",
    };
    if (coverArt && coverArt.attributes && coverArt.attributes.fileName) {
      const fileName = coverArt.attributes.fileName;
      const mangaId = coverArt.relationships.find(
        (rel: any) => rel.type === "manga"
      ).id;
      const imageUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;

      const imageResponse = await fetch(imageUrl, {
        method: "GET",
        headers: headers,
      });

      if (!imageResponse.ok) {
        return NextResponse.json({
          status: "error",
          message: "Error fetching image",
        });
      }

      const imageBuffer = await imageResponse.arrayBuffer();
      const base64Image = Buffer.from(imageBuffer).toString("base64");

      return NextResponse.json(
        responseToClient({
          data: base64Image,
          status: "success",
          message: "Successfully fetched data",
        })
      );
    } else {
      return NextResponse.json({
        status: "error",
        message: "Cover art details are missing",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "Error fetching cover art details",
      data: error.message,
    });
  }
}
