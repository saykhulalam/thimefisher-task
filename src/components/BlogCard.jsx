import React from "react";
import Image from "./Image";

const BlogCard = ({ date, title, description, postid, imgurl }) => {
  return (
    <div>
      <div className="w-[320px]">
        <Image src={imgurl} />
        <div className="p-[24px] bg-[#000000]">
          <h5 className="text-[#747474] text-[12px] font-normal tracking-[2px] mb-[10px]">
            {date}
          </h5>
          <h3 className="text-white font-semibold tracking-[1px] mb-[16px]">
            {title}
          </h3>
          <p className="text-[#979797] text-[14px] mb-[24px] font-normal">
            {description}
          </p>
          <div className="flex items-center gap-[6px]">
            <div className=" w-[16px] h-[1px] bg-[#F89222] rounded-full"></div>
            <h4 className="text-[14px] text-white font-normal">{postid}</h4>
            <div className=" w-[16px] h-[1px] bg-[#F89222] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
