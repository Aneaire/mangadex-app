import { useGetPanelImage } from "@/lib/query/queries";
import Image from "next/image";

const ImagePanel = ({ url, loading }: { url: string; loading?: boolean }) => {
  const { data } = useGetPanelImage(url);

  return (
    data && (
      <Image
        width={1920}
        height={1080}
        className={`w-full flex-shrink-0 transition-opacity duration-500`}
        src={data}
        alt="panel"
        sizes="100vw"
        quality={100}
        loading="lazy"
      />
    )
  );
};

export default ImagePanel;
