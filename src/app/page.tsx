"use client";

import MangaList from "@/components/MangaList";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Clock, LibrarySquare } from "lucide-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <main className=" w-full min-h-screen flex gap-5 flex-col px-1.5 lg:px-5 ">
      {/* <TestApi /> */}
      <span className=" ml-auto -mb-4 flex gap-5 ">
        <Button
          onClick={() => toast({ description: "Not yet Available" })}
          className=" -mb-4 flex items-center text-base gap-2 bg-green-600"
        >
          Recent <Clock />
        </Button>
        <Button
          onClick={() => router.push("/library")}
          className="flex items-center text-base gap-2 bg-blue-600"
        >
          Library <LibrarySquare />
        </Button>
      </span>
      <MangaList
        heading={`Trending In  in ${new Date().getFullYear()}`}
        type="trending"
      />
      <MangaList heading="New Releases" type="new releases" />
      <MangaList heading="Complete" type="complete" />
      <MangaList heading="Best In Action" type="action" />
      <MangaList heading="Romance" type="romance" />
      <MangaList heading="Ecchi SHh" type="ecchi" />
      {/* <TestApi /> */}
    </main>
  );
};

export default Home;
