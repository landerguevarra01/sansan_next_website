"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../../globals.css";
import Header from "@/app/components/Header/page";

export default function JumpingRope() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Drag to scroll implementation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseUp = () => {
      isDown = false;
      slider.classList.remove("grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const onMouseLeave = () => {
      if (isDown) {
        isDown = false;
        slider.classList.remove("grabbing");
      }
    };

    slider.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);
    slider.addEventListener("mouseleave", onMouseLeave);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
      slider.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col w-full gap-16 pb-16">
      <div className="px-4 lg:px-6">
        <Header />
      </div>
      <div className="px-4 lg:px-20">
        {/* Content Section */}
        <div className="mt-10 flex flex-col gap-4">
          <h1
            className="text-3xl lg:text-[80px]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            DIGITAL JUMP ROPE
          </h1>
          <p className="uppercase text-lg lg:text-[25px] text-[#DB0102] font-bold">
            DIGITAL JUMP ROPE
          </p>
          <p className="text-base lg:text-[25px] text-gray-300">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>

        {/* Image Slider with drag-to-scroll */}
        <div
          ref={sliderRef}
          className="my-12 overflow-x-auto whitespace-nowrap scroll-hidden cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: "touch" }} // smooth scrolling on iOS
        >
          <div className="flex gap-4 w-max">
            {[
              "/Assets/amazon/jumpingrope/Image-2.png",
              "/Assets/amazon/jumpingrope/Image-3.png",
              "/Assets/amazon/jumpingrope/Image-4.png",
              "/Assets/amazon/jumpingrope/Image-5.png",
              "/Assets/amazon/jumpingrope/Image-6.png",
              "/Assets/amazon/jumpingrope/Image-7.png",
              "/Assets/amazon/jumpingrope/Image-8.png",
            ].map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 rounded-lg overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Eyemask view ${index + 1}`}
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                  unoptimized
                  draggable={false} // Prevent browser drag on image
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
