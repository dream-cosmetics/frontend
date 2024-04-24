import style from "./homePage.module.css";

import SectionNewArrivals from "@/components/SectionNewArrivals/SectionNewArrivals";
import SectionBestSellers from "@/components/SectionBestSellers/SectionBestSellers";
import SectionProductKits from "@/components/SectionProductKits/SectionProductKits";

export default function HomePage() {
  return (
      <>
          <SectionNewArrivals />
          <SectionBestSellers />
          <SectionProductKits />
      </>
  );
}