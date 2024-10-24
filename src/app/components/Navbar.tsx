"use client";
import Image from "next/image";
import logo from "/public/logo.png";

const smoothScroll = (e: any, target: string) => {
  e.preventDefault();
  const section = document.getElementById(target);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-transparent fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-[#efeff1] text-lg">
      <Image
        src={logo}
        width={60}
        height={60}
        alt="logo"
        className="cursor-pointer rounded-full ml-1 mt-1 mb-1"
        onClick={(e) => smoothScroll(e, "section0")}
      />
      <div className=" text-[#efeff1] flex justify-between gap-20 px-10">
        <p
          className="cursor-pointer hover:text-[#01e97c]"
          onClick={(e) => smoothScroll(e, "section1")}
        >
          Población
        </p>
        <p
          className="cursor-pointer hover:text-[#01e97c]"
          onClick={(e) => smoothScroll(e, "section2")}
        >
          Escuelas
        </p>
        <p
          className="cursor-pointer hover:text-[#01e97c]"
          onClick={(e) => smoothScroll(e, "section3")}
        >
          Conclusión
        </p>
        <p
          className="cursor-pointer hover:text-[#01e97c]"
          onClick={(e) => smoothScroll(e, "section4")}
        >
          Tecnologías
        </p>
      </div>
    </div>
  );
};

export default Navbar;
