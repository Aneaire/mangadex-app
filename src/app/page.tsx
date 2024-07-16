import MangaList from "@/components/MangaList";

const Home = () => {
  return (
    <main className=" w-full min-h-screen flex gap-5 flex-col px-1.5 lg:px-5 ">
      <MangaList type="trending" />
      <MangaList type="new releases" />
      {/* <TestApi /> */}
    </main>
  );
};

export default Home;
