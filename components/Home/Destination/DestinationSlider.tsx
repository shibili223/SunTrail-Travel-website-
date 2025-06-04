"use client"; //must set this is a client component other wise carousel not work
import React from "react";
import { destinstionData } from "@/data/data";
//for slider we use react slider package. npm i react-multi-carousel install this package first this is a react package(react carousel) step:1 then import below 2 lines and responsive variable these get it from npm react carousel page

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  //step:3 Responsive variable
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function DestinationSlider() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      {destinstionData?.map((data) => {
        return (
          <div key={data.id} className="m-3">
            {/* Image Div */}
            <div className="relative h-[400px]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              {/* Images */}
              <Image
                src={data?.image}
                alt={data?.country}
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-lg"
              />

            </div>
             {/* Text content */}
            <h1 className="text-lg font-semibold mt-3">{data?.country}</h1>
            <p className="text-sm text-gray-600 mt-2">{data?.travelers} Travellers</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default DestinationSlider;
