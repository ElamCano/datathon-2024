import { IBM_Plex_Sans } from "@next/font/google";
import leonardo from "/public/leonardo.png";
import gliff from "/public/gliff.png";
import tailwind from "/public/tailwind.jpg";
import nextjs from "/public/nextjs.svg";
import typescript from "/public/typescript.png";
import excel from "/public/excel.svg";
import kepler from "/public/kepler.png";
import TechnologyCard from "./TechnologyCard";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const list = [
  { title: "NextJS", image: nextjs },
  { title: "TypeScript", image: typescript },
  { title: "Kepler.gl", image: kepler },
  { title: "Excel Functions", image: excel },
  { title: "Tailwind", image: tailwind },
  { title: "Leonardo AI", image: leonardo },
  { title: "Glif", image: gliff },
];

const Technologies = () => {
  return (
    <section className="flex flex-col h-96 bg-[#efeff1]" id="section4">
      <h1 className={`${ibmPlexSans.className} font-semibold text-5xl p-10`}>
        Tecnologías
      </h1>
      <div className="flex p-10 gap-16 flex-wrap items-center justify-center">
        {list.map((item, index) => {
          return (
            <TechnologyCard title={item.title} image={item.image} key={index} />
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
