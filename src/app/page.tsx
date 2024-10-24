import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import Conclution from "./components/Conclution";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-36" id="section0"></div>
      <Cover />
      <FirstSection />
      <div className="bg-[#455672] w-full flex flex-col justify-center items-center">
        <div className="h-2 bg-[#07011b] rounded-xl w-[80%] mr-4"></div>
        <div className="h-2 bg-[#f2f2f4] rounded-xl w-[80%] ml-4"></div>
      </div>
      <SecondSection />
      <Conclution />
      <Technologies />
      <Footer />
    </>
  );
}
