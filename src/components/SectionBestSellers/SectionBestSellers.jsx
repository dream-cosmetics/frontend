"use client";
import SectionTitle from "../SectionTitle/SectionTitle";
import CustomSwiper from "../CustomSwiper/CustomSwiper";

import prodImage from "@/images/product.png";

export default function SectionBestSellers() {
    const bestSellersProducts = new Array(7);
    bestSellersProducts.fill({
        image: prodImage,
        name: "Soft Finish",
        rate: "4",
        desc: "All Around Safe Block Sun Milk SPF50+/PA+++",
        price: "32",
    });

    return (
        <section id="bestSellers">
            <div className="container">
                <SectionTitle title="Best Sellers" link="/collection" />
                <CustomSwiper items={bestSellersProducts} />
            </div>
        </section>
    );
}
