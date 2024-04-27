"use client"

import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useId } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BlogPostCard from "../BlogPostCard/BlogPostCard";

import style from "@/components/CustomSwiper/customSwiper.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import postImage from "@/images/product.png";

export default function SectionOnTheBlog(){

    const prevID = useId().slice(1, -1);
    const nextID = useId().slice(1, -1);

    const blogPosts = new Array(5);
    blogPosts.fill({
        image: postImage,
        title: "Cracking the Coconut Code",
        desc: "Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams",
    });

    return (
        <section id="onTheBlog">
            <div className="container">
                <SectionTitle title="On The Blog" link="/blog" />
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
                        400: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {blogPosts.map((product, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <BlogPostCard
                                    image={product.image}
                                    title={product.title}
                                    desc={product.desc}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <IconButton
                    className={`${style.sliderNavBtn} ${style.buttonPrev}`}
                    id={prevID}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                    className={`${style.sliderNavBtn} ${style.buttonNext}`}
                    id={nextID}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </section>
    );
}