"use client";

import Trending from "@/components/Trending";
import { getTrendingManga } from "@/lib/mangadex";

const Home = async () => {
  const trendingManga = await getTrendingManga();
  return (
    <main className=" w-full min-h-screen flex items-center justify-center">
      <Trending />
    </main>
  );
};

export default Home;
