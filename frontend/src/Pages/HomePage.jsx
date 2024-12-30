import React from "react";
import MainLayout from "../layout/MainLayout";
import HeroComponent from "../Components/HeroComponent";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsLetterBox";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="">
        <HeroComponent />
        <LatestCollection />
        {/* <BestSeller /> */}
        <OurPolicy />
        <NewsletterBox />
      </div>
    </MainLayout>
  );
}
