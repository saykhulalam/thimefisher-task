import React from "react";
import Container from "./components/Container";
import { TiHomeOutline } from "react-icons/ti";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <div className="bg-[#121414] py-[24px] fixed w-full z-10">
        <Container>
          <div className=" flex ">
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
            <div className="flex justify-between items-center bg-[#121414] xl:w-[70%] w-full px-5">
              <div className="">
                <div className="flex items-center gap-[16px]">
                  <div className=" w-[40px] h-[40px] bg-[#F89222] rounded-[5px] flex items-center justify-center">
                    <TiHomeOutline className="text-white text-[24px]" />
                  </div>
                  <h2 className="text-[24px] font-bold text-white ">Home</h2>
                </div>
              </div>
              <button className="w-[128px] h-[45px] border-[1px] rounded-[50px] border-[#F89222] text-[#F5BD4D] hover:border-white duration-200 hover:text-white">
                Talk To Me
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Hero />
    </div>
  );
};

export default App;
