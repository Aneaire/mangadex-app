import { NextResponse } from "next/server";

export async function GET() {
  // try {
  //   // const response = await fetch(
  //   //   `${BASE_URL}/manga/5f20aded-1216-41e3-b48d-87b0c4d9957c}`
  //   // );

  //   // if (!response.ok) {
  //   //   throw new Error("Network response was not ok");
  //   // }

  //   // const data = await response.json();
  //   return NextResponse.json({ message: "Data fetched successfully" });
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return NextResponse.json({ message: "Error fetching data" });
  // }
  NextResponse.json({ message: "Data fetched successfully" });
}
