import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume from "./Resume";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Contact from "./Contact";

const RightSide = () => {
  return (
    <div className="xl:w-[65%]  mt-24 px-4 xl:p-0">
      <h5 className="text-[#F89222] text-[16px] font-semibold mb-[10px]">
        INTRODUCTION
      </h5>
      <h1 className="text-white text-[48px] mb-[16px] font-bold">
        I'm a Creative Developer & <br />
        UI/UX Design Expert
      </h1>
      <h3 className="text-[16px] text-white mb-[39px]">
        24 years / Robert Smith / UK London
      </h3>
      <p className="text-[16px] text-white">
        Prolific, full stack web developer with a passion for metrics and
        beating former <br /> "best-yets. Prototyped 25 new product features per
        year for Flexor, Inc. <br /> Decreased rework by 22% and costs by 15%.
        Consistently receive high <br /> user experience scores for all web
        development projects, including a <br /> 55% increase for Flexor, Inc.
        Passionate about building world class web <br /> applications. One of my
        sites received a 2020 Webby for Best Navigation and Structure.
      </p>
      <button className="text-white w-[197px] h-[48px] rounded-full bg-[#F89222] text-[16px] flex items-center justify-center gap-[10px] mt-[35px] hover:bg-transparent hover:border-[1px] duration-200 hover:border-[#F5BD4D]">
        Downdolad CV{" "}
        <MdOutlineFileDownload className="text-white text-[24px]" />
      </button>
      <Resume />
      <Skills />
      <Portfolio />
      <Blog />
      <Pricing />
      <Contact />
    </div>
  );
};

export default RightSide;
