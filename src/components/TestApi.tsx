"use client";

import { useEffect } from "react";

const TestApi = () => {
  const headers = {
    Authorization: `Bearer nh9Uq1J2qIE2IM7H8hDp7yz0NHYXtiZs`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get("/api/test", {
    //       params: { page: 1, offset: 10, "order[createdAt]": "desc" },
    //     });
    //     console.log(data); // Logs: { message: 'Hello, Next.js!' }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();
    const fetchData = async () => {
      try {
        const response = await fetch("/api/test", {
          method: "GET",
        });
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Hi i am API Tester</div>;
};

export default TestApi;
