import React from "react";
import Container from "./components/Container";
import { TiHomeOutline } from "react-icons/ti";
import Hero from "./components/Hero";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      {" "}
      {/* Prevent horizontal scrolling */}
      <div className="bg-[#121414] py-[24px] fixed w-full z-10">
        <Container>
          <div className="flex justify-between items-center w-full max-w-full px-5">
            {/* Left section (hidden on small screens) */}
            <div className="xl:w-[35%] hidden xl:block">
              <h2 className="text-[32px] font-bold text-white">
                Daryl{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5BD4D] to-[#F89222]">
                  Smith
                </span>
              </h2>
              <p className="text-[18px] font-normal text-[#C2C2C2]">
                UI/UX designer
              </p>
            </div>
            {/* Right section (responsive) */}
            <div className="flex justify-between items-center w-full xl:w-[70%] px-5">
              {/* Home icon and title */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[40px] h-[40px] bg-[#F89222] rounded-[5px] flex items-center justify-center">
                  <TiHomeOutline className="text-white text-[24px]" />
                </div>
                <h2 className="text-[24px] font-bold text-white">Home</h2>
              </div>
              {/* Talk to Me button */}
              <button className="xl:w-[128px] xl:h-[45px] w-[100px] h-[30px] border-[1px] rounded-[50px] border-[#F89222] text-[#F5BD4D] hover:border-white duration-200 hover:text-white text-[15px] sm:w-[128px] sm:h-[45px]">
                Talk To Me
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Hero />
      <ScrollToTop className="pl-1" smooth />
    </div>
  );
};

export default App;
