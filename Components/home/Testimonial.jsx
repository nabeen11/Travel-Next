import React, { useState } from "react";
import Testimon from "/image/Character.png";
import Smile from "/image/smile.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faStar } from "@fortawesome/free-solid-svg-icons";

const feedback = [
  {
    id: 0,
    name: "Nabin Adhikari",
    tour: "Pokhara Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.",
  },
  {
    id: 1,
    name: "Saroj Bhujel",
    tour: "Lumbini Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.",
  },
  {
    id: 2,
    name: "Sushank Pokherel",
    tour: "Kalinchowk Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.",
  },
  {
    id: 3,
    name: "Saurav Sanjel",
    tour: "Manakamana Tour",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.",
  },
  {
    id: 4,
    name: "Roshan Dahal",
    tour: "Everest Base Camp",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.",
  },
];
export default function Testimonial() {
  return (
    <>
      <div className="w-full h-[420px] mt-24 mb-20 flex items-center flex-col justify-evenly relative bg-[#E8FBF1]">
        <img
          className=" h-[167px] w-[116px] absolute left-24 -top-24"
          src={Testimon}
          alt="Testimonial Bg"
        />
        <div className="title flex justify-around items-center gap-2">
          <img src={Smile} alt="Smile" />
          <h1 className="tracking-wide font-semibold text-2xl text-black">
            What People Say About Our Service
          </h1>
        </div>
        <div className="relative flex justify-between w-full  overflow-auto ">
          <Swiper
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={30}
            loop={true}
            className="mySwiper w-full "
          >
            {feedback.map((value) => (
              <SwiperSlide key={value.id}>
                <div className="testimonials rounded-xl bg-white px-10 py-10 space-y-3">
                  <p className="text-base italic font-normal block">
                    {value.desc}
                  </p>
                  <span className="mt-1 flex items-center space-x-1">
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    />
                  </span>
                  <div className="user flex justify-between font-semibold">
                    <h1>{value.name}</h1>
                    <span>{value.tour}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* 
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide className="bg-red-600">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-red-600">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-red-600">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-red-600">Slide 4</SwiperSlide>
            <SwiperSlide className="bg-red-600">Slide 5</SwiperSlide>
            <SwiperSlide className="bg-red-600">Slide 6</SwiperSlide>
            <SwiperSlide className="bg-red-600">Slide 7</SwiperSlide>
          </Swiper> */}
        </div>
      </div>

      {/* <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="bg-red-600 py-52">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-600">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-red-600">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-600">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-red-600">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-red-600">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-red-600">Slide 7</SwiperSlide>
      </Swiper> */}
    </>
  );
}
