import { Raleway } from "@next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Props {
  year: string;
  people: string;
}

const PeopleData = ({ year, people }: Props) => {
  return (
    <div className="flex h-48">
      <h1 className="flex justify-center items-center rounded-full bg-[#f5f5f5] w-28 h-28 text-[#ce3074] font-bold text-2xl">
        {year}
      </h1>
      <div className={`${raleway.className} flex flex-col gap-1 mt-1`}>
        <p className="text-[#f5f5f5] text-xl font-semibold">Somos</p>
        <p className="text-[#038cff] text-4xl font-extrabold ml-2 hover:scale-110 cursor-pointer transition-all duration-300 hover:text-[#f04d94]">
          {people} mil
        </p>
        <p className="text-[#f5f5f5] text-xl font-semibold"> personas</p>
      </div>
    </div>
  );
};

export default PeopleData;
