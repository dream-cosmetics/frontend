import ProductsKit from "../ProductsKit/ProductsKit";

import prodImage from "@/images/product.png";

export default function SectionProductKits(){

    const productKits = new Array(2);
    productKits.fill({
        image: prodImage,
        name: "Blossom Glow Kit",
        desc: "Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types. Vegan, cruelty-free, eco-friendly.",
        tags: [
            "GreatGift",
            "AntiAging",
            "Ingredients",
            "GreatGift",
            "AntiAging",
        ],
    });

    return (
        <section id="productKits">
            <div className="container">
                {productKits.map((kit, index) => {
                    return index % 2 === 0 ?
                    <ProductsKit key={index} side="left" product={kit} /> :
                    <ProductsKit key={index} side="right" product={kit} />
                })}
            </div>
        </section>
    );
}