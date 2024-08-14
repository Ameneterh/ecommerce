import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import { addToCart } from "../store/cart";

export default function ListingComponent(props) {
  const carts = useSelector((store) => store.cart.items);

  console.log(carts);

  const { id, name, price, oldprice, image, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  return (
    <div className="group relative w-full lg:w-60 min-h-96 flex flex-col justify-between gap-1 hover:border hover:shadow-md overflow-hidden shadow-md">
      <div className="flex items-center justify-between w-full h-10 p-2">
        <div className=""></div>
        <div className="flex flex-col">
          <div className="rounded-sm bg-red-500 px-1 font-semibold text-white z-10">
            ${oldprice - price} off
          </div>
          <div className="bg-red-500 h-3 w-3 rotate-45 ml-2 -mt-2"></div>
        </div>
      </div>
      <Link to={slug}>
        <img src={image} alt="image name" className="h-52 mx-auto" />
      </Link>
      <p className="text-center text-sm font-semibold">{name}</p>
      <div className="flex items-center justify-between font-bold text-sm p-2">
        <span className="text-red-500">${price}</span>
        <span className="text-slate-400 font-normal line-through">
          ${oldprice}
        </span>
      </div>
      {/* <div className="w-full h-10 bg-red-600 hidden group-hover:flex text-white items-center justify-center text-sm font-semibold"> */}
      <Button
        onClick={handleAddToCart}
        className="rounded-none gap-1 items-center hidden group-hover:flex"
      >
        <FaCartPlus className="text-xl" />
        ADD TO CART
      </Button>
      {/* </div> */}
    </div>
  );
}
