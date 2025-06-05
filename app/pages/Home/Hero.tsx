"use client";

import Image from "next/image";
import React, { useState } from "react";
import "../../globals.css";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col justify-center items-center text-center text-[30px] 2xl:text-[80px] xl:text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] mt-8"
      style={{ fontFamily: "Anton, sans-serif" }}
    >
      <div className="flex flex-col justify-center items-center">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={
              isHovered
                ? "/Assets/JAYSON_ANIMATED.gif"
                : "/Assets/SANSAN_LOGO_1080.png"
            }
            alt="Jayson Icon"
            width={270}
            height={270}
            className="w-[120px] 2xl:w-[270px] xl:w-[230px] lg:w-[200px] md:w-[170px] sm:w-[130px] h-auto"
            priority
          />
        </div>
      </div>

      <div>HEY THERE! I’M SANSAN, A</div>

      <div className="flex flex-col justify-center items-center">
        <button className="w-fit flex justify-center items-center gap-4 border-[#DB0102] border bg-[#DB0102] hover:border-[#B0B0B0] hover:bg-white hover:text-[#DB0102] text-[#1D1D1D] rounded-full px-10">
          GRAPHIC DESIGNER
        </button>
      </div>

      <div
        style={{
          fontFamily: "Roxborough CF",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Welcome to my creative space!
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        GOT A PROJECT IN MIND?
        <button className="w-fit flex flex-row justify-center items-center gap-4 border-[#B0B0B0] border bg-[#B0B0B0] hover:border-[#B0B0B0] hover:bg-white hover:text-[#B0B0B0] text-[#1D1D1D] rounded-full px-10 ml-4 mt-2 md:mt-0">
          LET’S CHAT
        </button>
      </div>
    </div>
  );
}
