import React from "react";
import { FaLink } from "react-icons/fa6";
import portimgSeven from "../assets/portimgSeven.png";
import portimgOne from "../assets/portimgOne.png";
import portimgThree from "../assets/portimgThree.png";
import portimgTow from "../assets/portimgTow.png";
import portimgFour from "../assets/portimgFour.png";
import portimgFive from "../assets/portimgFive.png";
import portimgSix from "../assets/portimgSix.png";
import Image from "./Image";

const Portfolio = () => {
  // Image data with titles and descriptions
  const leftColumnImages = [
    {
      src: portimgSeven,
      title: "Project 1",
      description: "Description of Project 1",
    },
    {
      src: portimgThree,
      title: "Project 2",
      description: "Description of Project 2",
    },
    {
      src: portimgFive,
      title: "Project 3",
      description: "Description of Project 3",
    },
  ];

  const rightColumnImages = [
    {
      src: portimgOne,
      title: "Figma Mockup",
      description: "Description of Figma Mockup",
    },
    {
      src: portimgTow,
      title: "Figma Mockup",
      description: "Description of Figma Mockup",
    },
    {
      src: portimgFour,
      title: "Figma Mockup",
      description: "Description of Figma Mockup",
    },
    {
      src: portimgSix,
      title: "Figma Mockup",
      description: "Description of Figma Mockup",
    },
  ];

  return (
    <div className="mb-20">
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-semibold mt-[50px] md:mt-[80px] mb-[32px]">
        Portfolio
      </h2>
      <div className="xl:w-[688px] bg-[#000000] py-[21px] px-[50px] rounded-[6px] mx-auto xl:mx-0">
        <ul className="flex justify-between mb-[24px] flex-wrap gap-[12px]">
          {[
            "All",
            "Graphic Design",
            "Mobile App",
            "Photography",
            "UI/UX Design",
          ].map((item, index) => (
            <li
              key={index}
              className="group relative text-[16px] font-normal text-white hover:text-[#F89222] cursor-pointer transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-[#F89222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[24px] w-full max-w-[688px] mx-auto xl:mx-0 flex flex-col gap-[20px] md:flex-row md:gap-[20px]">
        {/* Left Column */}
        <div className="flex flex-col gap-[20px] w-full md:w-1/2">
          {leftColumnImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image
                src={image.src}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h3 className="text-white text-[20px] font-semibold">
                  {image.title}
                </h3>
                <p className="text-white text-[14px]">{image.description}</p>
                <div className="bg-black rounded-full p-2 w-[30px] h-[30px]">
                  <FaLink className="text-white text-[12px]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[20px] w-full md:w-1/2">
          {rightColumnImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image
                src={image.src}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h3 className="text-white text-[20px] font-semibold">
                  {image.title}
                </h3>
                <p className="text-white text-[14px]">{image.description}</p>
                <div className="rounded-full p-2 w-[30px] h-[30px] bg-black">
                  <FaLink className="text-white text-[12px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[688px] mx-auto xl:mx-0 flex flex-col xl:flex-row justify-between gap-6 mt-[24px]">
        <div className="relative w-full xl:w-[332px] h-[204px] bg-black p-6 md:p-20">
          <h2 className="text-[18px] md:text-[20px] text-white font-semibold mb-2">
            Website design
          </h2>
          <p className="text-[#AFAFAF] text-[14px] md:text-[16px]">
            Fitness Studio Website
          </p>
          <div className="absolute right-4 top-4 md:right-5 md:top-5 rounded-full p-2 w-[26px] h-[26px] md:w-[30px] md:h-[30px] bg-[#AFAFAF]">
            <FaLink className="text-black text-[10px] md:text-[12px]" />
          </div>
        </div>

        <div className="relative w-full xl:w-[332px] h-[204px] bg-black p-6 md:p-20">
          <h2 className="text-[18px] md:text-[20px] text-white font-semibold mb-2">
            Website design
          </h2>
          <p className="text-[#AFAFAF] text-[14px] md:text-[16px]">
            Fitness Studio Website
          </p>
          <div className="absolute right-4 top-4 md:right-5 md:top-5 rounded-full p-2 w-[26px] h-[26px] md:w-[30px] md:h-[30px] bg-[#AFAFAF]">
            <FaLink className="text-black text-[10px] md:text-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
