"use client";

import Image from "next/image";

export default function ExtraSection() {
  return (
    <section
      className="max-w-7xl mx-auto bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/KjNpkpFg/bg-1.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#bfe30a] via-[#83e54e] to-[#5bb52a] bg-clip-text text-transparent leading-snug">
            Special Discount For All Grocery Products
          </h2>

          <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            Discover fresh groceries at the best prices! From vegetables to daily essentials, 
            get everything delivered to your doorstep with guaranteed freshness and premium quality. 
            Shop now and enjoy exclusive discount offers available for a limited time only.
          </p>

          <button className="mt-8 px-10 py-3 bg-[#78C841] text-white rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Buy Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE
        <div className="flex justify-center">
          <Image
            src="/mnt/data/12069799-751b-4659-9902-2c18f3492f12.png"
            width={600}
            height={600}
            alt="Grocery Woman"
            className="w-full h-auto object-contain"
          />
        </div> */}

      </div>
    </section>
  );
}
