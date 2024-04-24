import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useId } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "../ProductCard/ProductCard";

import style from "./customSwiper.module.css";

export default function CustomSwiper({items}){

    const prevID = useId().slice(1, -1);
    const nextID = useId().slice(1, -1);

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                    clickableClass: `swiper-pagination-clickable ${style.swiperPagination}`,
                    bulletClass: `swiper-pagination-bullet ${style.swiperPaginationBullet}`,
                    bulletActiveClass: `swiper-pagination-bullet-active ${style.swiperPaginationBulletActive}`,
                }}
                navigation={{
                    prevEl: `#${prevID}`,
                    nextEl: `#${nextID}`,
                }}
                loop={true}
                breakpoints={{
                    250: {
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {items.map((product, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <ProductCard
                                image={product.image}
                                name={product.name}
                                rate={product.rate}
                                desc={product.desc}
                                price={product.price}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <IconButton className={`${style.sliderNavBtn} ${style.buttonPrev}`} id={prevID}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton className={`${style.sliderNavBtn} ${style.buttonNext}`} id={nextID}>
                <ArrowForwardIosIcon />
            </IconButton>
        </>
    );
}