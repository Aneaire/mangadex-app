"use client";

import { useCookies } from "next-client-cookies";
import { Button } from "./ui/button";

const TestCookies = () => {
  const testCookies = useCookies();
  const mangaListId = ["1", "2", "3", "4"];

  const handleSet = () => {
    testCookies.set("one", JSON.stringify(mangaListId), { expires: 60 });
  };

  const handleGet = () => {
    const list = testCookies.get("one")!;

    const data = JSON.parse(list);

    console.log(data);
  };

  const handleDelete = () => {
    testCookies.remove("one");
  };

  return (
    <div className=" flex py-5 gap-3">
      <Button className=" bg-accent" onClick={handleSet}>
        Set Cookies
      </Button>

      <Button className=" bg-accent" onClick={handleGet}>
        Get Cookies
      </Button>

      <Button className=" bg-accent" onClick={handleDelete}>
        Delete Cookies
      </Button>
    </div>
  );
};

export default TestCookies;
