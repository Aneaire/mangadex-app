import { responseToClient } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const BASE_URL = process.env.MANGADEX_BASE_URL;
  const key = process.env.MANGADEX_API_KEY;

  try {
    const url = `${BASE_URL}/manga/${params.id}`;
    // const fetchedData = await fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${key}`,
    //   },
    // });

    // if (!fetchedData.ok) throw Error;

    // const data = await fetchedData.json();

    return NextResponse.json(
      responseToClient({
        data: url,
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
