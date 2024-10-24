import Image from "next/image";
import barrios from "/public/barrios.png";
import PeopleData from "./PeopleData";

const FirstSection = () => {
  return (
    <section
      className="h-screen bg-[#455672] flex justify-around items-center gap-20"
      id="section1"
    >
      <div className="mt-20">
        <PeopleData year="2019" people="406" />
        <PeopleData year="2022" people="429" />
        <div></div>
      </div>
      <Image
        src={barrios}
        alt="barrios"
        width={600}
        className="rounded-lg cursor-pointer"
      />
    </section>
  );
};

export default FirstSection;
