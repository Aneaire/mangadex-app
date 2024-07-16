import Image from "next/image";
import { useState } from "react";
import GuraLoading from "./icons/GuraLoading";

const ImageWithPlaceholder = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          {/* Placeholder */}
          <div className="w-full h-full bg-secondaryBackground animate-pulse flex items-center justify-center">
            <GuraLoading />
          </div>
        </div>
      )}
      <Image
        width={1920}
        height={1080}
        className={`w-full flex-shrink-0 transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        src={src}
        alt="panel"
        sizes="100vw"
        quality={100}
        onLoad={() => setLoading(false)}
        priority
      />
    </div>
  );
};

export default ImageWithPlaceholder;
