import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import Divider from "./Divider";

export default function ProductItem({
  id,
  image,
  name,
  category,
  sub_category,
  description,
  delivery,
  asking_price,
}) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer border border-solid border-gray-400 rounded-md overflow-hidden"
    >
      {/* <div className="overflow-hidden h-36 sm:h-52"> */}
      <img
        src={image}
        alt=""
        className="hover:scale-110 transition ease-in-out w-full h-36 sm:h-44"
      />
      {/* </div> */}

      <div className="p-2 flex flex-col gap-1">
        <p className="text-sm font-bold line-clamp-1">{name}</p>
        <div className="flex items-center gap-1 text-gray-600 text-xs">
          <p className="">Category: </p>
          <p className="capitalize">{category}</p>
        </div>
        <p className="text-xs line-clamp-2 mb-1">{description}</p>
        <hr className="h-[1.5px] bg-gray-400" />
        <p className="flex items-center justify-between">
          <span className="text-sm font-medium flex items-center  text-green-800">
            {currency}
            {asking_price?.toLocaleString()}
          </span>
          <span
            className={`text-xs ${
              delivery ? "py-1 px-2" : "p-0"
            } rounded bg-green-500 text-white`}
          >
            {delivery ? "Plus Shipping" : null}
          </span>
        </p>
      </div>
    </Link>
  );
}
