"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sadia Akter",
    img: "https://i.pravatar.cc/100?img=47",
    text: "The delivery was super fast and the packaging was neat. Everything arrived fresh and exactly as shown on the website.",
  },
  {
    id: 2,
    name: "Rasel Ahmed",
    img: "https://i.pravatar.cc/100?img=56",
    text: "The vegetables and fruits were surprisingly fresh. Prices are good, and overall the service is very reliable.",
  },
  {
    id: 3,
    name: "Mim Chowdhury",
    img: "https://i.pravatar.cc/100?img=32",
    text: "Very satisfied with the product quality. Shopping online has become easier and convenient for my family.",
  },
  {
    id: 4,
    name: "Hasibul Hasan",
    img: "https://i.pravatar.cc/100?img=36",
    text: "Everything was delivered exactly on time. Product quality is consistent, which is why I order regularly.",
  },
  {
    id: 5,
    name: "Anika Rahman",
    img: "https://i.pravatar.cc/100?img=38",
    text: "Loved the fast service and the freshness of all items. Definitely my go-to place for weekly groceries.",
  },
  {
    id: 6,
    name: "Mahin Islam",
    img: "https://i.pravatar.cc/100?img=60",
    text: "Affordable, fast, and trustworthy. Each order I received was neatly packed and delivered without any issues.",
  },
  {
    id: 7,
    name: "Taslima Noor",
    img: "https://i.pravatar.cc/100?img=34",
    text: "Really impressed with their service. Everything was fresh and well packed. Highly recommended to everyone.",
  },
  {
    id: 8,
    name: "Rakib Chowdhury",
    img: "https://i.pravatar.cc/100?img=65",
    text: "Good product quality and very efficient service. I always receive my orders on time without any hassle.",
  },
];

const RatingSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-6 text-center">
      <h2 className=" bg-gradient-to-r from-[#bfe30a] via-[#83e54e] to-[#5bb52a] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        What Our Customers Say
      </h2>
      <p className="text-gray-500 mb-8 md:mb-10 text-sm sm:text-base">
        Real Customer Reviews
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="pb-10"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-green-50 border border-green-100 rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-between h-full text-left hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex gap-1 mb-2 sm:mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                  {`“${t.text}”`}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-300"
                />
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {t.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RatingSection;

