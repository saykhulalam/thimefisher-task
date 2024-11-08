import React from "react";

const PricingCard = ({
  name,
  prize,
  features,
  lineThroughFeatures = [],
  className,
}) => {
  return (
    <div className="w-[332px] bg-black px-[24px] py-[45px] relative">
      <h5 className="w-[95px] h-[45px] bg-orange-950 text-white text-[16px] flex items-center justify-center rounded-r-full absolute left-0 top-5">
        {name}
      </h5>
      <h2 className="text-[48px] text-white font-bold mt-[24px]">
        {prize} <span className="text-[18px]">/ month</span>
      </h2>
      <ul className="w-[284px] bg-[#121414] py-[20px] px-[16px] mt-[30px] rounded-[10px]">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`text-[16px] text-white mb-[16px] font-normal ${className} ${
              lineThroughFeatures.includes(index) ? "line-through" : ""
            }`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <button className="text-[16px] text-white bg-[#F89222] w-[139px] h-[45px] rounded-[8px] mt-[32px] hover:bg-transparent hover:border-[1px] hover:border-[#F89222] hover:text-[#F89222] duration-200">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
