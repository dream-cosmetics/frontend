"use client"
import SectionTitle from "../SectionTitle/SectionTitle";
import CustomSwiper from "../CustomSwiper/CustomSwiper";

import prodImage from "@/images/product.png";

export default function SectionNewArrivals(){

    const newArrivalsProducts = new Array(7);
    newArrivalsProducts.fill({
        image: prodImage,
        name: "Soft Finish",
        rate: "5",
        desc: "All Around Safe Block Sun Milk SPF50+/PA+++",
        price: "35"
    });

    return (
        <section id="newArrivals">
            <div className="container">
                <SectionTitle title="New Arrivals" link="/collection" />
                <CustomSwiper items={newArrivalsProducts}/>
            </div>
        </section>
    )
}