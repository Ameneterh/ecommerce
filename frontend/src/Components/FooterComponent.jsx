import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  const date = new Date();

  return (
    <div className="border-t-2 border-solid border-l-transparent border-r-transparent border-b-transparent border-gray-300">
      <div className="px-4 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img src={assets.nav_img} className="w-36 sm:w-44 mb-2" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            libero accusamus omnis modi accusantium sunt animi magni repellat,
            vel non aspernatur architecto voluptatum sint fugiat sapiente, earum
            est laborum eos.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-2">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/delivery">Delivery</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-2">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="mailto:ameneterh@gmail.com">ameneterh@gmail.com</Link>
            <Link to="https://wa.me/2348154230654" target="_blank">
              08154230654
            </Link>
            <Link to="tel:+2348154230654">08154230654</Link>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {date.getFullYear()}{" "}
          <Link
            to="https://ameneterh-portfolio.onrender.com"
            target="_blank"
            className="text-blue-600 underline underline-offset-2 font-semibold mx-1"
          >
            @Amene Ter'Hemen
          </Link>{" "}
          <span className="block sm:inline-block">- All Rights Reserved.</span>
        </p>
      </div>
    </div>
  );
}
