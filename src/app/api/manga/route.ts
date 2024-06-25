import { responseToClient } from "@/lib/server";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

const BASE_URL = "https://mangadex.org";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const order = searchParams.get("order[followedCount]");

  if (!limit || !offset || !order) return;

  try {
    const queryParams = new URLSearchParams({
      limit,
      offset,
      order,
    });
    const response = await fetch(`${BASE_URL}/manga?${queryParams}`, {
      method: "GET",
    });

    if (!response.ok) {
      return NextResponse.json(
        responseToClient({
          data: undefined,
          status: "error",
          message: "Error fetching data",
        })
      );
    }

    const data = await response.json();
    return NextResponse.json(
      responseToClient({
        data,
        status: "success",
        message: "Successfully fetched data",
      })
    );
  } catch (error) {
    NextResponse.json({ message: "Error fetching data" });
  }
}
