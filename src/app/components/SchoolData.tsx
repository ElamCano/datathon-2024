import { Raleway } from "@next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Props {
  circle_data: string;
  description: string;
}

const SchoolData = ({ circle_data, description }: Props) => {
  return (
    <div className="flex h-48">
      <h1 className="flex justify-center items-center rounded-full bg-[#f5f5f5] w-28 h-28 text-[#ce3074] font-bold text-2xl">
        {circle_data}
      </h1>
      <div className={`${raleway.className} flex items-center h-28 ml-2`}>
        <p className="text-[#f5f5f5] text-4xl font-extrabold ml-2 hover:scale-110 cursor-pointer transition-all duration-300 hover:text-[#01e97c]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SchoolData;
