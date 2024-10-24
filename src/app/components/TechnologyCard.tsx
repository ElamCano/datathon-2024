import Image from "next/image";

interface Props {
  title: string;
  image: any;
}

const TechnologyCard = ({ title, image }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center filter grayscale transition duration-300 ease-in-out hover:grayscale-0 cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="rounded-xl "
      />
      <p className="text-[#212743] font-semibold">{title}</p>
    </div>
  );
};

export default TechnologyCard;
