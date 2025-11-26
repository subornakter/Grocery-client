"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        className="h-full"
      >
        {/* ===== Slide 1 ===== */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-end px-40"
            style={{ backgroundImage: "url('https://i.ibb.co/jkGM9WXp/slider-3.webp')" }}
          >
            <div className="bg-white px-10 py-20 rounded shadow-lg max-w-lg text-center">
              <img
                src="https://i.ibb.co/LD2nhwsj/slider-icon.png"
                alt="Leaf Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <p className="text-sm">100% Healthy & Affordable</p>
              <h2 className="text-3xl font-bold text-[#78C841] mb-2">
                Organic Vegetables
              </h2>
              <p className="mb-4">Small Changes Big Difference</p>
              <button className="bg-[#78C841] text-white px-4 py-2 rounded hover:bg-green-600">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 2 ===== */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center px-40"
            style={{ backgroundImage: "url('https://i.ibb.co.com/7t8jNf8X/slider-2.webp')" }}
          >
            <div className="bg-white px-16 py-20 text-center border-4 border-green-400 shadow-xl">
              <h2 className="text-4xl font-bold text-red-600 mb-3">
                Vegetable 100% Organic
              </h2>
              <p className="text-gray-700 mb-3">Natural Health Care Ingredients</p>
              <h3 className="text-3xl font-bold mb-4">50% OFF</h3>
              <button className="bg-[#78C841] text-white px-6 py-2 rounded-lg hover:bg-green-600">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 3 (Your uploaded design) ===== */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/TDHtsq14/slider-1.webp')",
            }}
          >
            <div className="bg-white px-16 py-14 max-w-xl shadow-lg">
              <p className="text-xl text-gray-700">
                Natural Health Care Ingredients
              </p>

              <h2 className="text-5xl font-bold text-[#C47A2C] my-4">
                Grocery Shopping
              </h2>

              <p className="text-2xl text-black mb-6">Save upto 30% off</p>

              <button className="bg-[#C47A2C] text-white px-6 py-3 rounded-full text-lg hover:bg-orange-700 transition">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

      
       {/* === Custom Arrow Buttons === */}
<div className="swiper-button-prev-custom bg-[#78C841] absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 cursor-pointer flex items-center justify-center  rounded-full shadow-lg">
  <img
    src="https://i.ibb.co.com/vxWmJrny/png-clipart-font-awesome-computer-icons-arrow-encapsulated-postscript-arrow-angle-arrow-icon-thumbna.png"
    className="w-6 h-6 rotate-0"
  />
</div>

<div className="swiper-button-next-custom absolute bg-[#78C841] right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 cursor-pointer flex items-center justify-center  rounded-full shadow-lg">
  <img
    src="https://i.ibb.co.com/vxWmJrny/png-clipart-font-awesome-computer-icons-arrow-encapsulated-postscript-arrow-angle-arrow-icon-thumbna.png"
    className="w-6 h-6 rotate-180"
  />
</div>

      </Swiper>
    </div>
  );
}
