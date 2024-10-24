import Image from "next/image";

interface Props {
  image: any;
  title: string;
}

const ConclutionCard = ({ image, title }: Props) => {
  return (
    <div className="flex flex-col gap-4  items-center hover:bg-[#fff] hover:cursor-pointer hover:scale-110 duration-300 hover:shadow-lg hover:bg-white/10 hover:backdrop-blur-md p-8 hover:text-[#212743] rounded-2xl">
      <Image src={image} alt={title} width={200} className="rounded-full" />
      <p>{title}</p>
    </div>
  );
};

export default ConclutionCard;
