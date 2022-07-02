import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import SliderDesign from "./SliderDesign";
import slider1 from "../../../../assets/banner/car.jpg";
import slider2 from "../../../../assets/banner/cloth.jpg";
import slider3 from "../../../../assets/banner/food.jpg";
import slider4 from "../../../../assets/banner/tech_3.jpg";
import slider5 from "../../../../assets/banner/technology.jpg";
import slider6 from "../../../../assets/banner/watch.jpg";
import slider7 from "../../../../assets/banner/lifestyle.jpg";

const sliderData = [
  {
    image: slider1,
    category: "Sports",
    title: "Most Worlds Sports In the World",
  },
  {
    image: slider2,
    category: "Fashion",
    title: "The Trend's of Women's Clothing",
  },
  {
    image: slider4,
    category: "Fashion",
    title: "How lovely yellow is! It stands for the sun",
  },
  {
    image: slider3,
    category: "Food",
    title: "The most popular fast food Chains",
  },
  {
    image: slider5,
    category: "Technology",
    title: "The incredible thing about Virtual Reality",
  },
  {
    image: slider6,
    category: "Technology",
    title: "Plan your work and work your plan",
  },
  {
    image: slider7,
    category: "Lifestyle",
    title: "New Fashion Outfits",
  },
];

const HeroSection = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <SliderDesign
            text={sliderData[0].title}
            category={sliderData[0].category}
            img={sliderData[0].image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesign
            text={sliderData[1].title}
            category={sliderData[1].category}
            img={sliderData[1].image}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderDesign
            text={sliderData[2].title}
            category={sliderData[2].category}
            img={sliderData[2].image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesign
            text={sliderData[3].title}
            category={sliderData[3].category}
            img={sliderData[3].image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesign
            text={sliderData[4].title}
            category={sliderData[4].category}
            img={sliderData[4].image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesign
            text={sliderData[5].title}
            category={sliderData[5].category}
            img={sliderData[5].image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesign
            text={sliderData[6].title}
            category={sliderData[6].category}
            img={sliderData[6].image}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
