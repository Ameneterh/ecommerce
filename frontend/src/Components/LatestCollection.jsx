import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import TitleText from "./TitleText";
import ProductItem from "./ProductItem";

export default function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <TitleText text1={"latest"} text2={"collection"} />
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod
          tempora fuga ullam explicabo sint quidem ipsum? Officia dolores iusto
          quod culpa. A reprehenderit ullam modi inventore dolore, error
          excepturi!
        </p>
      </div>

      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
