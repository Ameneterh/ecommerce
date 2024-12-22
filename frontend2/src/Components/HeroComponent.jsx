import React from "react";
import heroimage from "/heroimage.png";
import { Button } from "flowbite-react";

export default function HeroComponent() {
  const date = new Date();

  return (
    <div
      className="w-full md:h-screen  p-2 lg:px-16 flex items-center"
      style={{
        background: `url(${heroimage}), linear-gradient(0deg, rgb(216,216,216) 40%, transparent)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "contain",
      }}
    >
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-center flex-1">
          <p className="uppercase font-semibold text-xl">
            {date.toLocaleString("default", { month: "long" })} Collection
          </p>
          <p className="h-[1.5px] bg-gray-600 flex-1"></p>
        </div>
        <h1 className="text-3xl lg:text-7xl">
          Get up to <span className="text-red-400 font-semibold">30%</span>
          <span className="block">Off New Arrivals</span>
        </h1>
        <Button className="w-32 bg-red-600">SHOP NOW</Button>
      </div>
      <div></div>
    </div>
  );
}
