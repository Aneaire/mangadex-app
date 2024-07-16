import Image from "next/image";

const GuraLoading = () => {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  return (
    <Image
      width={1920}
      height={1080}
      src={`/gura-loading-${randomNumber}.gif`}
      alt="animated gif"
      priority
      className="w-3/6 aspect-square object-cover rounded-full"
    />
  );
};

export default GuraLoading;
