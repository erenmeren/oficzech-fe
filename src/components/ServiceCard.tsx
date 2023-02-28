import Image from "next/image";

const ServicesCard = ({ name, img, alt, h }: any) => {
  return (
    <div className="bg-[#F4F5F6] rounded-lg">
      <Image
        src={img.src}
        width={358}
        height={250}
        alt={alt}
        className="rounded-t-lg h-[340px] w-full"
      />
      <div className="h-[105px] px-9 grid align-middle ">
        <p className="text-2xl font-bold">{name}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
