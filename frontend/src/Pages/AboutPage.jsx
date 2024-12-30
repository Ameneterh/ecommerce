import React from "react";
import MainLayout from "../layout/MainLayout";
import TitleText from "../Components/TitleText";
import Divider from "../Components/Divider";
import { assets } from "../assets/assets";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="flex flex-col max-w-7xl mx-auto min-h-[60svh]">
        <div className="text-2xl text-center">
          <TitleText text1={"about"} text2={"us"} />
        </div>

        <div className="flex-1 my-10 flex flex-col md:flex-row gap-16">
          <img
            src={assets.about_img}
            alt=""
            className="w-full md:max-w-[480px] h-auto rounded-lg"
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-800 text-sm">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              optio excepturi itaque minima ullam cumque harum voluptatibus
              magni facere alias. Amet, quisquam. Sapiente obcaecati repudiandae
              voluptates cupiditate minus illo facilis.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis nihil dolorum blanditiis quasi corporis quidem id nisi
              eius inventore accusamus impedit enim, minima error! Minus totam
              saepe nulla. Obcaecati, iste?
            </p>

            <Divider />
            <div className="flex flex-col gap-4">
              <b className="">Our Mission</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae quaerat illo quam. Blanditiis reiciendis incidunt
                quos perspiciatis quam eos earum!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <b className="">Our Vision</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae quaerat illo quam. Blanditiis reiciendis incidunt
                quos perspiciatis quam eos earum!
              </p>
            </div>
          </div>
        </div>

        <div className="text-4xl py-4">
          <TitleText text1={"why"} text2={"choose us"} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border border-gray-700 px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              reiciendis temporibus asperiores sunt earum excepturi sit expedita
              illum, cum inventore magni incidunt blanditiis distinctio. Dolor
              accusamus iusto est doloribus numquam.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
            <b>With you 24/7:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              reiciendis temporibus asperiores sunt earum excepturi sit expedita
              illum, cum inventore magni incidunt blanditiis distinctio. Dolor
              accusamus iusto est doloribus numquam.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
            <b>Exceptional Satisfaction:</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              reiciendis temporibus asperiores sunt earum excepturi sit expedita
              illum, cum inventore magni incidunt blanditiis distinctio. Dolor
              accusamus iusto est doloribus numquam.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
