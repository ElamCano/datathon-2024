import Image from "next/image";
import escuela_cover from "/public/escuela_cover.jpg";
import escuela_cover2 from "/public/escuela_cover2.jpg";
import { IBM_Plex_Sans } from "@next/font/google";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Cover = () => {
  return (
    <section
      className={`${inter.className} h-[550px] flex w-full justify-start items-start gap-10`}
    >
      <div className="flex flex-col items-center mt-20 gap-10 ml-4 xl:ml-16 2xl:ml-36">
        <h1
          className={`${ibmPlexSans.className} text-[#038cff] text-5xl font-extrabold`}
        >
          Datathon 2024 <span className="text-[#ce3074]">/</span>{" "}
          <span className="text-[#01e97c]">Corrientes</span>{" "}
        </h1>
        <h2 className="text-[#efeff1] drop-shadow-[0_0_20px_#efeff1] text-4xl font-semibold">
          Un Futuro más cerca
        </h2>
        <h3 className="text-[#f2f2f4] bg-gradient-to-r from-[#038cff] to-[#ce3074] max-w-fit p-2 rounded-md text-xl font-semibold cursor-pointer">
          Elam Cano
        </h3>
      </div>
      <div className="w-[500px] relative">
        <Image
          src={escuela_cover}
          alt="escuela_cover"
          objectFit="cover"
          className="cursor-pointer rounded-2xl absolute top-0 left-0 z-10 border-2 border-[#01e97c]"
        />
        <Image
          src={escuela_cover2}
          alt="escuela_cover 2"
          objectFit="cover"
          className="cursor-pointer rounded-2xl absolute top-28 left-28 z-0 border-2 border-[#ce3074] hover:border-[#212743] hover:z-20 hover:top-24 hover:left-24 transition duration-700 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Cover;
