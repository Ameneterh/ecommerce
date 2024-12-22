import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer border rounded-md overflow-hidden"
    >
      <div className="overflow-hidden h-36 sm:h-52">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out w-full"
        />
      </div>
      <div className="p-2">
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium flex items-center">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}
