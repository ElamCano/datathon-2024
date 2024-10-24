import Image from "next/image";
import escuelas from "/public/escuelas.png";
import SchoolData from "./SchoolData";

const SecondSection = () => {
  return (
    <section
      className="h-screen bg-[#455672] flex justify-around items-center gap-20"
      id="section2"
    >
      <div className="mt-20">
        <SchoolData circle_data="2019" description="63.665 niños" />
        <SchoolData circle_data="25" description="Escuelas primarias" />
      </div>
      <Image
        src={escuelas}
        alt="escuelas"
        width={600}
        className="rounded-lg cursor-pointer"
      />
    </section>
  );
};

export default SecondSection;
