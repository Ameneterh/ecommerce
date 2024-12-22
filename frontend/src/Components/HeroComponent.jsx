import React from "react";
import { assets } from "../assets/assets";

export default function HeroComponent() {
  const date = new Date();

  return (
    <div className="flex flex-col sm:flex-row">
      {/* hero left side */}
      <div className="w-full sm:w-2/3 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-full h-[2px] bg-[#414141] flex-1"></p>
            <p className="text-sm md:text-base uppercase font-semibold">
              {date.toLocaleString("default", { month: "long" })} bestseller
            </p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-full h-[2px] bg-[#414141] flex-1"></p>
          </div>
        </div>
      </div>

      {/* hero right side */}
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
}
