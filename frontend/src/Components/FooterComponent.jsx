import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  const date = new Date();

  return (
    <div className="border-t-4 border-slate-500 rounded-lg">
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
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-2">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+2348154230654</li>
            <li>ameneterh@gmail.com</li>
            <li>WhatsApp</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center flex items-center justify-center">
          Copyright {date.getFullYear()}{" "}
          <Link
            to="https://ameneterh-portfolio.onrender.com"
            target="_blank"
            className="text-blue-600 underline underline-offset-2 font-semibold mx-1"
          >
            @Amene Ter'Hemen
          </Link>{" "}
          - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
