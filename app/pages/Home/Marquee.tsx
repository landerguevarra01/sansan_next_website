"use client";
import Marquee from "react-fast-marquee";
import React from "react";

interface MarqueeItemProps {
  direction: "left" | "right";
  speed: number;
  children: React.ReactNode;
}

const MarqueeItem = ({ direction, speed, children }: MarqueeItemProps) => (
  <Marquee
    speed={speed}
    direction={direction}
    gradient={true}
    gradientColor="#1d1d1d" // RGB for #1d1d1d
    className="overflow-hidden w-full whitespace-nowrap"
  >
    {/* Repeat content 3 times manually with spacing */}
    {Array(3)
      .fill(null)
      .map((_, idx) => (
        <React.Fragment key={idx}>
          {children}
          <span style={{ display: "inline-block", width: "80px" }}></span>
        </React.Fragment>
      ))}
  </Marquee>
);

export default function MarqueeSection() {
  const marqueeContent = (
    <div
      className="flex items-center text-white select-none"
      style={{
        fontFamily: "Roxborough CF, serif",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: "4rem",
      }}
    >
      <div
        className="marqueeSquare mx-4"
        style={{ width: 40, height: 40, backgroundColor: "#DB0102" }}
      />
      <span className="mx-4 text-[124px]">CREATIVE</span>
      <div
        className="marqueeSquare mx-4"
        style={{ width: 40, height: 40, backgroundColor: "#DB0102" }}
      />
      <span className="mx-4 text-[124px]">twist</span>
      <div
        className="marqueeSquare mx-4"
        style={{ width: 40, height: 40, backgroundColor: "#DB0102" }}
      />
      <span className="mx-4 text-[124px]">REMARKABLE</span>
      <div
        className="marqueeSquare mx-4"
        style={{ width: 40, height: 40, backgroundColor: "#DB0102" }}
      />
      <span className="mx-4 text-[124px]">impacts</span>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="w-full">
        {/* Multiple marquee lines with different speeds and directions */}
        <MarqueeItem direction="left" speed={150}>
          {marqueeContent}
        </MarqueeItem>
        <MarqueeItem direction="right" speed={100}>
          {marqueeContent}
        </MarqueeItem>
        <MarqueeItem direction="left" speed={75}>
          {marqueeContent}
        </MarqueeItem>
        <MarqueeItem direction="right" speed={50}>
          {marqueeContent}
        </MarqueeItem>
      </div>
    </div>
  );
}
