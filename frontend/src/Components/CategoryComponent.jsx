import React from "react";
import { Link } from "react-router-dom";

export default function CategoryComponent(props) {
  return (
    <div
      className="h-60 w-full lg:w-80 bg-gray-100 rounded-lg flex items-end justify-center p-6 shadow-md"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Link
        to="#"
        className="px-4 py-2 bg-slate-300 hover:bg-slate-400 hover:scale-110 transition-all font-bold rounded-md uppercase"
      >
        {props.category}
      </Link>
    </div>
  );
}
