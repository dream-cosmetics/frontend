"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Rating,
  Typography,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

import style from "./SectionProducts.module.css";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import "./Swiper.css";

export default function SectionProduct() {
  const [expanded, setExpanded] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className={`container ${style.productSection}`}>
      <ul className={style.navList}>
        <li>
          <a href="#" className={style.navListItemText}></a>
        </li>
      </ul>
      <div className={style.swiperContainer}>
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: "#product-page-image-prev-btn",
            nextEl: "#product-page-image-next-btn",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <IconButton
          id="product-page-image-prev-btn"
          className={`${style.sliderNavBtn} ${style.sliderNavBtnPrev}`}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          id="product-page-image-next-btn"
          className={`${style.sliderNavBtn} ${style.sliderNavBtnNext}`}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <div>
        <h3 className={style.productTitle}>Dewy Glow Jelly Cream</h3>
        <div className={style.productReviewsWrapper}>
          <Rating
            name="text-feedback"
            value={3}
            readOnly
            precision={0.5}
            icon={<StarIcon className={style.productRatingIcon} />}
            emptyIcon={<StarIcon className={style.productRatingEmptyIcon} />}
          />
          <span className={style.productReviews}>3 reviews</span>
        </div>
        <p className={style.productPrice}>$26.00</p>
        <p className={style.productDescription}>
          A gel moisturizer packed with glow-boosting Cherry Blossom Extracts,
          visibly brightening niacinamide, and hydrating betaine from sugar
          beets. Advanced with glycerin and Cherry Blossom flavanoids with
          visibly soothing and moisturizing benefits for skin that’s ready for
          makeup! Dermatologist tested.
        </p>
        <p className={style.productSize}>Size: 50 ml</p>
        <p className={style.productUsageTitle}>RECOMMENDED FOR</p>
        <ul className={style.productUsageList}>
          <li className={style.productUsageItem}>
            <svg className={style.productUsageItemIcon} width={20} height={20}>
              <use href=""></use>
            </svg>
            <p className={style.productUsageItemText}>All Skin Types</p>
          </li>
          <li className={style.productUsageItem}>
            <svg className={style.productUsageItemIcon} width={20} height={20}>
              <use href=""></use>
            </svg>
            <p className={style.productUsageItemText}>All Skin Types</p>
          </li>
          <li className={style.productUsageItem}>
            <svg className={style.productUsageItemIcon} width={20} height={20}>
              <use href=""></use>
            </svg>
            <p className={style.productUsageItemText}>All Skin Types</p>
          </li>
        </ul>
        <div className={style.productActionsWrapper}>
          <button type="button" className={style.productBtnCart}>
            add to cart
          </button>
          <button type="button" className={style.productBtnFavorite}>
            <FavoriteIcon className={style.productBtnFavoriteIcon} />
          </button>
        </div>
        <div className={style.productAccordionWrapper}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className={clsx(
              style.productAccordion,
              expanded === "panel1" && style.productAccordionActive
            )}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={clsx(
                expanded === "panel1" && style.productAccordionSummaryActive
              )}
            >
              <p className={style.productAccordionTitle}>WHAT MAKES IT GOOD</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className={style.productAccordionText}>
                Unique water-activated powder exfoliant infused with Rice
                Powder, Rice Extract, and Papaya Extract. This low PH formula is
                free of artificial fragrances and colors.
              </p>
              <p className={style.productAccordionTextKey}>Key Ingredients</p>
              <ul className={style.productAccordionIngredientsList}>
                <li className={style.productAccordionIngredientsItem}>
                  <p className={style.productAccordionText}>
                    Rice Powder - Fine powder gently exfoliates the skin.
                  </p>
                </li>
                <li className={style.productAccordionIngredientsItem}>
                  <p className={style.productAccordionText}>
                    Rice Powder - Fine powder gently exfoliates the skin.
                  </p>
                </li>
                <li className={style.productAccordionIngredientsItem}>
                  <p className={style.productAccordionText}>
                    Rice Powder - Fine powder gently exfoliates the skin.
                  </p>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className={clsx(
              style.productAccordion,
              expanded === "panel1" && style.productAccordionActive
            )}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className={style.productAccordionTitle}>WHAT MAKES IT GOOD</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className={style.productAccordionText}>
                Unique water-activated powder exfoliant infused with Rice
                Powder, Rice Extract, and Papaya Extract. This low PH formula is
                free of artificial fragrances and colors.
              </p>
              <p className={style.productAccordionTextKey}>Key Ingredients</p>
              <ul className={style.productAccordionIngredientsList}>
                <li className={style.productAccordionIngredientsItem}>
                  <p className={style.productAccordionText}>
                    Rice Powder - Fine powder gently exfoliates the skin.
                  </p>
                </li>
                <li className={style.productAccordionIngredientsItem}>
                  <p className={style.productAccordionText}>
                    Rice Powder - Fine powder gently exfoliates the skin.
                  </p>
                </li>
                <li className={style.productAccordionIngredientsItem}>
                  <p className={style.productAccordionText}>
                    Rice Powder - Fine powder gently exfoliates the skin.
                  </p>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
