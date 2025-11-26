"use client";

import Image from "next/image";

export default function ShopGetMore() {
  const items = [
    {
      title: "Shop & Earn Points",
      desc: "The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Discover the perks of Egg Club membership.",
      img: "https://i.ibb.co.com/Kxg6d6Kj/image.webp",
    },
    {
      title: "Deal of the Day",
      desc: "Stock up on your favorite groceries for less with our unbeatable deals! Don't miss out - limited stock.",
      img: "https://i.ibb.co.com/gLkXQp9H/daily-Deals-Shop-Info.webp",
    },
    {
      title: "Premium Care",
      desc: "Too busy to place an order or handling order issues? No need to worry as we give you option to take premium assistance.",
      img: "https://i.ibb.co.com/XwzKzWy/premium-Image.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="bg-gradient-to-r from-[#78C841] via-[#5bb52a] to-[#d5fc12] bg-clip-text text-transparent text-4xl font-bold text-center mb-10">
        Shop & Get More
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            {/* TEXT PART */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>

            {/* IMAGE PART */}
            <div className="w-full h-60 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
