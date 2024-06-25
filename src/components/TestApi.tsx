"use client";

import { testApiCall } from "@/lib/mangadex";
import { Button } from "./ui/button";

const TestApi = () => {
  const fetchManga = async () => {
    console.log("fetching manga");
    testApiCall();
  };

  return (
    <div>
      Hi i am API Tester <Button onClick={fetchManga}>Fetch</Button>
    </div>
  );
};

export default TestApi;
