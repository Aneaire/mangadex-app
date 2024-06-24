import MangaList from "@/components/MangaList";
import { cookies } from "next/headers";

const Home = () => {
  cookies();
  return (
    <main className=" w-full min-h-screen flex gap-5 flex-col px-1.5 lg:px-5 ">
      <MangaList type="trending" />
      <MangaList type="new releases" />
      {/* <TestingQuery /> */}
    </main>
  );
};

export default Home;
