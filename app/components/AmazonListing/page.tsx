"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    image: "/Assets/amazon/eyemask.png",
    label: "24k golden under-eye mask",
    link: "/products/eyemask", // ✅ Corrected
  },
  {
    image: "/Assets/amazon/jumpingrope.png",
    label: "digital jumping rope",
    link: "/products/jumpingrope",
  },
  {
    image: "/Assets/amazon/golf.png",
    label: "golfing kids putter for golf",
    link: "/products/golf",
  },
  {
    image: "/Assets/amazon/repelant.png",
    label: "insect & mosquito repellent",
    link: "/products/repelant",
  },
  {
    image: "/Assets/amazon/pizza.png",
    label: "pizza peel",
    link: "/products/pizza",
  },
  {
    image: "/Assets/amazon/hairvibrance.png",
    label: "hair vibrance",
    link: "/products/hairvibrance",
  },
  {
    image: "/Assets/amazon/geniuslab.png",
    label: "the genius lab",
    link: "/products/geniuslab",
  },
  {
    image: "/Assets/amazon/chai.png",
    label: "masala chai",
    link: "/products/chai",
  },
];

const AmazonListingDescription = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {products.map((product, idx) => (
        <div
          key={idx}
          className="relative w-full aspect-[4/3] overflow-hidden rounded-[20px]"
        >
          <Image
            src={product.image}
            alt={product.label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-end p-6 gap-4">
            <div className="w-[80%]">
              <p className="text-white text-[30px] md:text-[50px] sm:text-[40px] text-start uppercase">
                {product.label}
              </p>
            </div>
            <Link
              href={product.link}
              className="text-[16px] text-white border-2 border-white rounded-full px-4 py-1 hover:bg-[#DB0102] hover:border-[#DB0102] transition-all"
            >
              View work
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmazonListingDescription;
