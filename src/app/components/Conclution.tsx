import ConclutionCard from "./ConclutionCard";
import analizar from "/public/analizar.jpg";
import construir from "/public/construir.jpg";
import crecer from "/public/crecer.jpg";
import arrow_right from "/public/arrow_right.svg";
import Image from "next/image";

const Conclution = () => {
  return (
    <section
      className="h-screen bg-[#01ad5c] flex flex-col md:flex-row justify-center items-center text-[#f2f2f4] text-3xl font-semibold gap-20"
      id="section3"
    >
      <ConclutionCard image={analizar} title="Analizar" />
      <Image src={arrow_right} alt="arrow" width={100} />
      <ConclutionCard image={construir} title="Construir" />
      <Image src={arrow_right} alt="arrow" width={100} />
      <ConclutionCard image={crecer} title="Crecer" />
    </section>
  );
};

export default Conclution;
