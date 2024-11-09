import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { RiFileCheckFill } from "react-icons/ri";

const Resume = () => {
  const educationData = [
    {
      year: "2016-2020",
      institution: "Harvard University",
      degree: "B.A. and M.S., Computer Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
    {
      year: "2016-2020",
      institution: "Harvard University",
      degree: "B.A. and M.S., Computer Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
  ];

  const workHistoryData = [
    {
      year: "2016-2022",
      title: "UI/UX Design",
      position: "Web site design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
    {
      year: "2012-2016",
      title: "Junior Web Designer",
      position: "Product designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
  ];

  const Section = ({ icon, title, data }) => (
    <div className="mt-[80px]">
      <div className="flex text-white items-center gap-[10px]">
        <div className="w-[32px] h-[32px] bg-[#333333] rounded-[4px] flex items-center justify-center">
          {icon}
        </div>
        <h2>{title}</h2>
      </div>
      <div className="flex gap-[25px]">
        <div className="w-[8px] h-[510px] border-[2px] border-[#646464] rounded-full ml-2 mt-[32px] relative">
          <div className="w-4 h-4 border-[2px] border-[#646464] bg-[#171B1A] rotate-45 absolute top-5 right-[-6px]"></div>
          <div className="w-4 h-4 border-[2px] border-[#646464] bg-[#171B1A] rotate-45 absolute xl:top-[280px] top-[340px] right-[-6px]"></div>
        </div>
        <div className="mt-[48px]">
          {data.map((item, index) => (
            <div key={index} className="mb-[32px]">
              <div className="w-[87px] h-[26px] border-[1px] border-[#FFFFFF33] rounded-[4px] flex items-center justify-center">
                <h2 className="text-[14px] font-semibold text-white">
                  {item.year}
                </h2>
              </div>
              <div className="xl:w-[646px] w-full xl:h-[190px] h-[250px] border-[1px] border-[#FFFFFF1A] bg-[#121414] p-[20px] rounded-[8px] mt-[12px]">
                <h2 className="text-[18px] text-[#F5BD4D] font-semibold mb-[8px]">
                  {item.institution || item.title}
                </h2>
                <h5 className="text-[12px] font-normal text-[#8F8F8F] mb-[16px]">
                  {item.degree || item.position}
                </h5>
                <div className="w-full bg-[#FFFFFF33] h-[1px]"></div>
                <p className="text-[16px] text-white font-normal mt-[16px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-[48px] text-white font-semibold mt-[102px]">
        Resume
      </h2>
      <Section
        icon={<LuGraduationCap className="text-[22px] text-[#F89222]" />}
        title="Education"
        data={educationData}
      />
      <Section
        icon={<RiFileCheckFill className="text-[22px] text-[#F89222]" />}
        title="Work History"
        data={workHistoryData}
      />
    </div>
  );
};

export default Resume;
