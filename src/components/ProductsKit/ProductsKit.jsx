"use client"
import style from "./productsKit.module.css";
import CustomButton from "../CustomButton/CustomButton";

import Image from "next/image";
import Link from "next/link";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

export default function ProductsKit({side, product}){
    return (
        <div className={`${style.productsKit} ${style[side]}`}>
            <div className={style.kitInfo}>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <div className={style.kitTags}>
                    {product.tags.map((tag, index) => {
                        return <span key={index} className={style.tag}># {tag}</span>;
                    })}
                </div>
                <div className={style.buttons}>
                    <CustomButton width="40%" bgColor="var(--primaryPink)" color="#fff" text="Shop Now" handler={() => {
                        console.log("Shop now");
                    }}/>
                    <Link className={style.explore} href="/collection">
                        Explore More <EastRoundedIcon sx={{fontSize: "0.875rem"}}/>
                    </Link>
                </div>
            </div>
            <div className={style.kitImage}>
                <img src={product.image.src} alt={product.name} />
            </div>
        </div>
    );
}