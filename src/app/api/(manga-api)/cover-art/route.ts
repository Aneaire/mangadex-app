import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const coverArtId = searchParams.get("coverArtId");

  return NextResponse.json({
    status: "success",
  });
}
