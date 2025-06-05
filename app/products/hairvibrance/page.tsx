"use client";
import Image from "next/image";
import "../../globals.css";
import Header from "@/app/components/Header/page";

export default function HairVibrance() {
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
            HAIR VIBRANCE
          </h1>
          <p className="uppercase text-lg lg:text-[25px] text-[#DB0102] font-bold">
            VITA MIRACLE
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
        <div className="my-12 overflow-x-auto whitespace-nowrap">
          <div className="flex flex-col w-max">
            {[
              "/Assets/amazon/hairvibrance/VITAMIRACLE--Vita-Miracle--A+PANEL-1 1.png",
              "/Assets/amazon/hairvibrance/VITAMIRACLE--Vita-Miracle--A+PANEL-2 2.png",
              "/Assets/amazon/hairvibrance/VITAMIRACLE--Vita-Miracle--A+PANEL-3 1.png",
              "/Assets/amazon/hairvibrance/VITAMIRACLE--Vita-Miracle--A+PANEL-4 1.png",
              "/Assets/amazon/hairvibrance/VITAMIRACLE--Vita-Miracle--A+PANEL-5 1.png",
            ].map((img, index, array) => {
              const isFirst = index === 0;
              const isLast = index === array.length - 1;

              let containerClass = "relative flex-shrink-0 overflow-hidden";
              if (isFirst)
                containerClass += " rounded-tl-3xl rounded-tr-3xl shadow-lg";
              else if (isLast)
                containerClass += " rounded-br-3xl rounded-bl-3xl shadow-lg";

              return (
                <div key={index} className={containerClass}>
                  <Image
                    src={img}
                    alt={`Hair Vibrance view ${index + 1}`}
                    width={1300}
                    height={400}
                    className="object-cover"
                    unoptimized
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
