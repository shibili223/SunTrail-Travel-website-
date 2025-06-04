// use react swiper packege for this review slider; google 'react swiper' or use this link 'https://swiperjs.com/react'
// There are somany sliders in this package ; goto this above website and
"use client";
import React from "react";
// import Swiper react Component
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div>
      {/* <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

      {/*  */}
      <Swiper 
      effect={"cards"} 
      grabCursor={true} 
      modules={[EffectCards]} 
      className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
      {reviewData?.map((data) => {
        return(
          <SwiperSlide key={data?.id} 
          className="bg-white rounded-3xl block shadow-md"  //if not write 'shadow-md' then the edge not sharper or not look good
          >
            <div className="w-[80%] mx-auto mt-12">
              {/* Review text */}
              <p  className="text-xs sm:text-sm md:text-base font-semibold">
                {data?.review}
              </p>
              {/*Icons  */}
              <div className="flex items-center mt-4">
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600"/>
              </div>
              {/* User profile */}
              <div className="mt-6">
                <div className="flex items-center space-x-4"> {/* for more space-x-4 check below  */}
                  <Image src={data.image} width={60} height={60} alt="Client" className="rounded-full w-12 h-12"/>
                </div>
                <div>
                  <p className="text-sm sm:text-lg font-bold">{data.name}</p>
                  {/*  */}
                  <p className="text-gray-600 text-xs sm:text-base">{data.occupation}</p>
                </div>
              </div>

            </div>
      
          </SwiperSlide>
          
        )
      })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
// More for space x
//1. <div class="flex flex-row-reverse space-x-4 space-x-reverse ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
//2. <div class="flex space-x-4 ...">  <div>01</div>  <div>02</div>  <div>03</div></div>