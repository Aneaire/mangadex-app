"use client";

import { useRef } from "react";
import { Button } from "./ui/button";

const TestApi = () => {
  const image = useRef<any>();

  const fetchManga = async () => {
    const res = await fetch(
      "https://uploads.mangadex.org/covers/77bee52c-d2d6-44ad-a33a-1734c1fe696a/c384dedc-0f09-46ed-ae68-c81eb5eacdf4.jpg"
    );
    if (!res.ok) {
      throw new Error("Image could not be fetched");
    }
    const imageBlob = await res.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    image.current.src = imageURL;
  };

  return (
    <div>
      <img className=" size-10" ref={image} src="" alt="" />
      Hi i am API Tester <Button onClick={fetchManga}>Fetch</Button>
    </div>
  );
};

export default TestApi;
