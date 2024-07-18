"use client";

import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

const TestApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch("https://api.mangadex.org/manga/tag");
        const data = await res.json();
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImage();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" w-full flex flex-wrap gap-2">
      {data.map((item: any) => (
        <div className=" relative">
          <Badge className=" peer/id">{item.attributes.name.en}</Badge>
          <span
            className={`absolute top-5 right-0 peer-hover/id:bg-slate-800 peer-hover/id:block w-52 hidden z-10 hover:block hover:bg-slate-800 p-3`}
          >
            {item.id}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TestApi;
