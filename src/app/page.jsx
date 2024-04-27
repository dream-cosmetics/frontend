import style from "./homePage.module.css";

import SectionNewArrivals from "@/components/SectionNewArrivals/SectionNewArrivals";
import SectionBestSellers from "@/components/SectionBestSellers/SectionBestSellers";
import SectionProductKits from "@/components/SectionProductKits/SectionProductKits";
import SectionOnTheBlog from "@/components/SectionOnTheBlog/SectionOnTheBlog";
import SectionSkinQuiz from "@/components/SectionSkinQuiz/SectionSkinQuiz";
import SectionShare from "@/components/SectionShare/SectionShare";

export default function HomePage() {
  return (
      <>
          <SectionNewArrivals />
          <SectionBestSellers />
          <SectionProductKits />
          <SectionOnTheBlog />
          <SectionSkinQuiz />
          <SectionShare />
      </>
  );
}