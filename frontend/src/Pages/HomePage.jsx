import React from "react";
import MainLayout from "../Components/MainLayout";
import HeroComponent from "../Components/HeroComponent";
import CategoryComponent from "../Components/CategoryComponent";
import clothing from "/clothing.png";
import bags from "/bags.png";
import shoes from "/shoes.png";
import hairs from "/hairs.png";
import perfumes from "/perfumes.png";
import accessories from "/accessories.png";
import dealofweek from "/dealofweek.png";
import ListingComponent from "../Components/ListingComponent";
import { Tabs } from "flowbite-react";
import {
  GiLoincloth,
  GiShoppingBag,
  GiConverseShoe,
  GiHairStrands,
  GiDelicatePerfume,
  GiJewelCrown,
} from "react-icons/gi";
import { Link } from "react-router-dom";
import { products } from "../products";

export default function HomePage() {
  // console.log(products);

  return (
    <>
      <div className="w-full mx-auto">
        <HeroComponent />
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-6 p-4 lg:p-10">
        {/* clothing, bags, shoes, hair, perfumes, accessories */}
        <CategoryComponent image={clothing} category="clothing" />
        <CategoryComponent image={bags} category="bags" />
        <CategoryComponent image={shoes} category="shoes" />
        <CategoryComponent image={hairs} category="hair" />
        <CategoryComponent image={perfumes} category="perfumes" />
        <CategoryComponent image={accessories} category="accessories" />
      </div>

      {/* new arrivals */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between flex-wrap gap-4 p-4 lg:p-10">
        <h1 className="text-4xl font-bold">New Arrivals</h1>{" "}
        <hr className="border-2 border-red-600 w-20" />
        {/* clothing, bags, shoes, hair, perfumes, accessories */}
        <div className="overflow-x-auto w-full mt-4">
          <Tabs variant="fullWidth">
            <Tabs.Item title="CLOTHING" icon={GiLoincloth}>
              <div className="w-full flex flex-wrap justify-between gap-y-4">
                {products.map((product, key) => (
                  <ListingComponent key={key} data={product} />
                ))}
              </div>
            </Tabs.Item>
            <Tabs.Item title="BAGS" icon={GiShoppingBag}>
              for bags
            </Tabs.Item>
            <Tabs.Item title="SHOES" icon={GiConverseShoe}>
              for shoes
            </Tabs.Item>
            <Tabs.Item title="HAIR" icon={GiHairStrands}>
              for hair
            </Tabs.Item>
            <Tabs.Item title="PERFUMES" icon={GiDelicatePerfume}>
              for perfumes
            </Tabs.Item>
            <Tabs.Item title="ACCESSORIES" icon={GiJewelCrown}>
              for accessories
            </Tabs.Item>
          </Tabs>
        </div>
      </div>

      <div className="h-96 w-full bg-gray-200 px-2 lg:px-20">
        <div
          className="h-full w-full bg-gray-200 px-2 lg:px-20 flex items-center justify-end"
          style={{
            backgroundImage: `url(${dealofweek})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "contain",
          }}
        >
          <div className="h-60 w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Deal of the Week</h1>{" "}
            <hr className="border-2 border-red-600 w-20" />
            <div className="mt-8 h-10 w-full bg-black"></div>
            <div className="w-32 h-10 px-3 bg-red-400 text-white flex items-center justify-center rounded-md text-sm font-bold">
              <Link to="/">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>

      {/* best sellers */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between flex-wrap gap-4 p-4 lg:p-10">
        <h1 className="text-4xl font-bold">Best Sellers</h1>{" "}
        <hr className="border-2 border-red-600 w-20" />
        <div className="w-full flex flex-wrap mt-4">
          {/* <ListingComponent image={clothing} category="clothing" />
          <ListingComponent image={clothing} category="clothing" /> */}
        </div>
      </div>
    </>
  );
}
