import Image from "next/image";

const ServicesCard = ({ name, img, alt }: any) => {
  return (
    <div className="bg-[#F4F5F6] rounded-lg">
      <div className="card-zoom">
        <Image
          src={img.src}
          width={358}
          height={250}
          alt={alt}
          className="rounded-t-lg h-[340px] w-full card-zoom-image"
        />
      </div>

      <div className="h-[105px] px-9 grid content-center">
        <div className="text-2xl font-bold">{name}</div>
      </div>
    </div>
  );
};

export default ServicesCard;
