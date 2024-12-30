import TitleText from "../Components/TitleText";
import React from "react";
import MainLayout from "../layout/MainLayout";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto min-h-[60svh]">
        <div className="text-center text-2xl">
          <TitleText text1={"contact"} text2={"us"} />
        </div>

        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
          <img
            src={assets.contact_img}
            alt=""
            className="w-full md:max-w-[480px] rounded-md"
          />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-bold text-xl text-gray-700">
              Our Corporate Office:
            </p>
            <p className="text-gray-500">
              Shop 77 AB Shopping Mall, Opp Oja Oba, <br />
              Ado-Ekiti, Ekiti State, Nigeria
            </p>
            <p className="text-gray-500 flex flex-col gap-1">
              <span className="flex items-center gap-1">
                <MdEmail />
                <Link to="mailto:contact@pharmazone.com.ng">
                  ameneterh@gmail.com
                </Link>
              </span>
              <span className="flex items-center gap-1">
                <MdPhoneInTalk />
                <Link to="tel:2348154230654">+2348154230654</Link>
              </span>
            </p>
            <p className="font-bold text-xl text-gray-700">
              Follow us on Social Media:
            </p>
            <p className="flex items-center gap-2">
              <Link to="https://www.facebook.com">
                <FaFacebookSquare className="text-2xl text-blue-800 hover:scale-125 transition-all duration-300" />
              </Link>
              <Link to="https://instagram.com">
                <FaInstagramSquare className="text-2xl text-blue-800 hover:scale-125 transition-all duration-300" />
              </Link>
              <Link to="https://linkedin.com">
                <FaLinkedin className="text-2xl text-blue-800 hover:scale-125 transition-all duration-300" />
              </Link>
              <Link to="https://twitter.com">
                <FaTwitterSquare className="text-2xl text-blue-800 hover:scale-125 transition-all duration-300" />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
