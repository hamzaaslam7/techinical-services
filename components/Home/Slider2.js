import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
export default function Slider2() {
  const Carousals = [
    {
      Image: "https://mdbootstrap.com/img/Photos/Slides/img%20(29).webp",
      heading: "Proven",
      subHeading: "Professionals in the UAE",
      text: " A UAE-based technical company offers a wide range of technological solutions and services.",
      button: "REQUEST A QUOTE",
      button2: "How We Work",
    },
    {
      Image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
      subHeading: "Experienced Experts in the UAE",
      button: "REQUEST A QUOTE",

      text: "  A UAE-based technical company offers a wide range of technological solutions and services.",
    },
    {
      Image: "/images/01.jpg",
      button: "REQUEST A QUOTE",
      heading: "Trustworthy experts in the UAE",
      text: "A UAE-based technical company offers a wide range of technological solutions and services.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <FontAwesomeIcon icon={faChevronRight} className="w-20 text-black" />
    ),
    prevArrow: (
      <FontAwesomeIcon icon={faChevronLeft} className="w-20 text-black" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Slider className="relative grid grid-cols-1" {...settings}>
        {Carousals.map((Carousals, idx) => {
          return (
            <>
            <div className="bg-[#f3f2f210] absolute top-0 left-0 right-0 bottom-0 "></div>
              <div className="relative w-full active">
                <img
                  src={Carousals.Image}
                  className="block w-full 2xl:h-screen lg:h-[620px] object-cover md:h-[450px] h-[300px]"
                  alt="Motorbike Smoke"
                />

                <div className="container px-6 mx-auto lg:px-20 md:px-10 ">
                  <div className="absolute top-0 bottom-0 flex !z-50 items-center justify-center grid-cols-1 text-start carousel-caption md:block gird">
                    <div className="flex flex-col items-start justify-center h-full my-4">
                      <div className="">
                        <button className="px-2 py-1 mb-1 text-white md:mb-2 md:p-3 md:px-5 redBg">
                          Leading Technical Enterprise{" "}
                        </button>
                        <div className="flex flex-col gap-1 font-bold text-black uppercase md:mb-2">
                          <h5 className="text-[22px] 2xl:text-8xl lg:text-7xl md:text-3xl">
                            {Carousals.heading}
                          </h5>
                          <h5 className="text-[22px] 2xl:text-8xl lg:text-7xl md:text-3xl">
                            {Carousals.subHeading}{" "}
                          </h5>
                        </div>
                        <p className="mb-2 text-xs text-black pr-7 md:mb-5 lg:text-lg md:text-sm lg:pr-80 md:pr-30">
                          {Carousals.text}
                        </p>
                        <div className="flex gap-3 text-black">
                          <button className="border lg:p-3 md:px-5 py-1 px-2 border-[#292d77] hover:bg-[#292d77] hover:text-white purpleClr whitespace-nowrap text-sm">
                            {Carousals.button}
                          </button>
                          <span class="md:w-14 md:h-14 w-6 h-6 rounded-full whitespace-nowrap   p-0.5 redBg hover:bg-[#292d77]  rotate-90"></span>

                          <button className="px-2 py-1 text-sm border-0 lg:p-3 md:px-5 hover:text-white purpleClr whitespace-nowrap">
                            {Carousals.button2}{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
