import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div>
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-semibold mt-[50px] md:mt-[80px] mb-[32px]">
        Pricing
      </h2>
      <div className="flex flex-wrap flex-col xl:flex-row lg:flex-row md:flex-row w-[688px] justify-between mx-auto xl:mx-0 gap-[20px]">
        <PricingCard
          name="Intro"
          prize="$49"
          features={[
            "Interface Design",
            "Front-end Code",
            "Back-end Development",
            "Search Engine Optimization",
            "Awesome Support",
            "Responsive site",
            "Easy in use",
            "Useful site",
          ]}
          lineThroughFeatures={[2, 4, 5, 7]} // Specify indexes for line-through
          className="additional-styling"
        />

        <PricingCard
          name="Base"
          prize="$79"
          features={[
            "Interface Design",
            "Front-end Code",
            "Back-end Development",
            "Search Engine Optimization",
            "Awesome Support",
            "Responsive site",
            "Easy in use",
            "Useful site",
            "Speedy web",
          ]}
          lineThroughFeatures={[1, 3, 5]} // Specify different indexes
          className="additional-styling"
        />

        <PricingCard
          name="Popular"
          prize="$99"
          features={[
            "Interface Design",
            "Front-end Code",
            "Back-end Development",
            "Search Engine Optimization",
            "Awesome Support",
            "Responsive site",
            "Easy in use",
            "Useful site",
            "Speedy web",
          ]}
          lineThroughFeatures={[3, 2, 4, 6]} // Specify different indexes
          className="additional-styling"
        />

        <PricingCard
          name="Enterprise"
          prize="$199"
          features={[
            "Interface Design",
            "Front-end Code",
            "Back-end Development",
            "Search Engine Optimization",
            "Awesome Support",
            "Responsive site",
            "Easy in use",
            "Useful site",
            "Speedy web",
          ]}
          lineThroughFeatures={[0, 7]} // Specify different indexes
          className="additional-styling"
        />
      </div>
    </div>
  );
};

export default Pricing;
