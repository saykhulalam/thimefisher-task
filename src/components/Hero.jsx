import React from "react";
import LeftSide from "./LeftSide";
import Container from "./Container";
import RightSide from "./RightSide";

const Hero = () => {
  return (
    <div className="bg-[#171B1A]">
      <Container>
        <div className="flex flex-col xl:flex-row">
          <LeftSide />
          <RightSide />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
