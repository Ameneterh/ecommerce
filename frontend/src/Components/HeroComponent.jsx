import React from "react";
import heroimage from "/heroimage.png";
import { Button } from "flowbite-react";

export default function HeroComponent() {
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
        <p className="uppercase font-semibold">August Collection</p>
        <h1 className="text-3xl lg:text-7xl">
          Get up to <span className="text-red-400">30%</span> Off{" "}
          <span className="block">New Arrivals</span>
        </h1>
        <Button className="w-32 bg-red-600">SHOP NOW</Button>
      </div>
    </div>
  );
}
