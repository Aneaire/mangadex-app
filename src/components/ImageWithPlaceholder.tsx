import { useGetPanelImage } from "@/lib/query/queries";
import Image from "next/image";

const ImageWithPlaceholder = ({ src }: { src: string }) => {
  const { data } = useGetPanelImage(src);
  return (
    <div className="relative w-full">
      {!data && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          {/* Placeholder */}
          <div className="w-full h-full bg-secondaryBackground animate-pulse flex items-center justify-center">
            {/* <GuraLoading /> */}
          </div>
        </div>
      )}
      {data && (
        <Image
          width={1920}
          height={1080}
          className={`w-full flex-shrink-0 transition-opacity duration-500`}
          src={data}
          alt="panel"
          sizes="50vw"
          quality={100}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ImageWithPlaceholder;
