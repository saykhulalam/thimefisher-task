import React from "react";

const skillsData = [
  { name: "UI/UX Design", level: "95%" },
  { name: "Photography", level: "90%" },
  { name: "Creativity", level: "80%" },
  { name: "Team Work", level: "95%" },
  { name: "Web Design", level: "97%" },
];

const Skills = () => {
  return (
    <div>
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-semibold mt-[50px] md:mt-[80px] mb-[32px]">
        Skills
      </h2>
      <div className="xl:w-[685px]">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-[32px]">
            <div className="flex items-center justify-between mb-[10px]">
              <h5 className="text-[16px] md:text-[18px] lg:text-[20px] text-white font-normal">
                {skill.name}
              </h5>
              <h5 className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F5BD4D]">
                {skill.level}
              </h5>
            </div>
            <div className="w-full h-[12px] md:h-[16px] bg-amber-800 rounded-full">
              <div
                className="h-full bg-[#F5BD4D] rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
