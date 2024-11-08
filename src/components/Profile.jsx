import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { MdManageAccounts } from "react-icons/md";
import { ImBriefcase } from "react-icons/im";
import { LuPenSquare } from "react-icons/lu";
import { MdPermPhoneMsg } from "react-icons/md";
import Image from "./Image";
import profileimage from "../assets/profile.png";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <div className=" flex xl:mt-[120px] mt-[95px] xl:fixed z-10">
        <div className="flex flex-col xl:gap-[40px] gap-5 px-[30px] mt-8 xl:mt-[70px]">
          <div className=" w-[45px] h-[45px] hover:border-[1px] flex   items-center justify-center rounded-full">
            <TiHomeOutline className="text-white text-[35px] hover:text-[#F5BD4D] " />
          </div>
          <div className="w-[45px] h-[45px] hover:border-[1px] flex  items-center justify-center rounded-full">
            <MdManageAccounts className="text-white text-[35px] hover:text-[#F5BD4D] " />
          </div>
          <div className="w-[45px] h-[45px] hover:border-[1px] flex  items-center justify-center rounded-full">
            <ImBriefcase className="text-white text-[32px] hover:text-[#F5BD4D] " />
          </div>
          <div className="w-[45px] h-[45px] hover:border-[1px] flex  items-center justify-center rounded-full">
            <LuPenSquare className="text-white text-[32px] hover:text-[#F5BD4D] " />
          </div>
          <div className="w-[45px] h-[45px] hover:border-[1px] flex  items-center justify-center rounded-full">
            <MdPermPhoneMsg className="text-white text-[32px] hover:text-[#F5BD4D] " />
          </div>
        </div>
        <div className="w-[390px] bg-black pl-5 pb-2">
          <Image src={profileimage} />
          <div className="flex items-center justify-center">
            <div className=" w-[32px] h-[32px] bg-[#121414] text-[10px] rounded-full flex items-center justify-center text-white">
              <TfiFacebook />
            </div>
            <div className=" w-[32px] h-[32px] bg-[#121414] text-[10px] rounded-full flex items-center justify-center text-white">
              <FaLinkedinIn />
            </div>
            <div className=" w-[32px] h-[32px] bg-[#121414] text-[10px] rounded-full flex items-center justify-center text-white">
              <FaPinterestP />
            </div>
            <div className=" w-[32px] h-[32px] bg-[#121414] text-[10px] rounded-full flex items-center justify-center text-white">
              <FaInstagram />
            </div>
            <div className=" w-[32px] h-[32px] bg-[#121414] text-[10px] rounded-full flex items-center justify-center text-white">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
