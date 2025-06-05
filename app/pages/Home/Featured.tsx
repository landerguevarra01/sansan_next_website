"use client";
import AmazonListingDescription from "@/app/components/AmazonListing/page";
import LedVisuals from "@/app/components/LedVisuals/page";
import React, { useState } from "react";

export default function Featured() {
  const works = [
    {
      id: "01",
      title: "AMAZON LISTING",
      description: <AmazonListingDescription />,
    },
    // { id: "02", title: "BANNERS", description: "Description for BANNERS" },
    // {
    //   id: "03",
    //   title: "BOOTH DESIGN",
    //   description: "Description for BOOTH DESIGN",
    // },
    // { id: "04", title: "BRANDING", description: "Description for BRANDING" },
    {
      id: "02",
      title: "LED VISUALS",
      description: <LedVisuals />,
    },
    // {
    //   id: "06",
    //   title: "SOCIAL MEDIA POSTS",
    //   description: "Description for SOCIAL MEDIA POSTS",
    // },
    // {
    //   id: "07",
    //   title: "WEBSITE DESIGN",
    //   description: "Description for WEBSITE DESIGN",
    // },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="text-[30px] 2xl:text-[80px] xl:text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] flex flex-col xl:w-[1207px] max-w-[1207px]"
      style={{ fontFamily: "Anton, sans-serif" }}
    >
      <div>
        FEATURED{" "}
        <span
          className="text-[#DB0102]"
          style={{
            fontFamily: "Roxborough CF",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Works
        </span>
      </div>
      <div
        className="text-2xl"
        style={{
          fontFamily: "Helvetica",
          fontWeight: "normal",
          fontStyle: "normal",
        }}
      >
        Let&apos;s make your brand the star of the show. Check out my works to
        <br />
        see the fun unfold, and let&apos;s create something spectacular
        together!
      </div>
      <div className="divider my-4" />
      {works.map((work, index) => (
        <div key={work.id} className="relative">
          <div
            className="flex flex-row items-center gap-12 cursor-pointer hover:scale-105 transform transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <div
              style={{
                fontFamily: "Roxborough CF",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {work.id}
            </div>
            <div>{work.title}</div>
            <div className="hidden md:flex absolute right-0">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 36.0001L38 4.00012M38 4.00012H6M38 4.00012V36.0001"
                  stroke={openIndex === index ? "#DB0102" : "#F3F3F3"}
                  strokeWidth="8"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
          {openIndex === index && (
            <div className="accordion-content transition-all ease-in-out duration-500 mt-4 text-gray-600">
              {work.description}
            </div>
          )}
          <div className="divider my-4" />
        </div>
      ))}
    </div>
  );
}
