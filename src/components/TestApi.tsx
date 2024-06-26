"use client";

import { useEffect, useState } from "react";

const TestApi = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const coverArtId = "your-cover-art-id"; // Replace with your actual cover art ID
        const response = await fetch(`/api/cover?coverArtId=${coverArtId}`);
        const data = await response.json();

        if (data.status === "success" && data.data) {
          const base64Image = `data:${data.contentType};base64,${data.data}`;
          setImageSrc(base64Image);
        } else {
          console.error("Error fetching image:", data.message);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h1>Image from API</h1>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Cover Art"
          style={{ width: "500px", height: "300px" }}
        />
      )}
    </div>
  );
};

export default TestApi;
