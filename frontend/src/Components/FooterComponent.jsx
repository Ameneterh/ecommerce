import React from "react";
import { assets } from "../assets/assets";

export default function FooterComponent() {
  const date = new Date();

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.nav_img} className="w-24 sm:w-44 mb-2" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
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
        <p className="py-5 text-sm text-center">
          Copyright {date.getFullYear()}@ Amene Ter'Hemen - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
