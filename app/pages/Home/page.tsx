"use client";
import { useEffect } from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import MarqueeSection from "./Marquee";
import Header from "@/app/components/Header/page";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" &&
        target instanceof HTMLAnchorElement &&
        target.hash
      ) {
        e.preventDefault();
        const id = target.hash.substring(1);
        scrollToSection(id);
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <>
      <main className="flex flex-col justify-center items-center px-6">
        <section id="home">
          <Hero />
        </section>

        <div className="max-w-screen w-full my-20">
          <Header />
        </div>

        <section id="projects" className="">
          <Featured />
        </section>

        <section className="max-w-screen">
          <MarqueeSection />
          {/* <Marquee
            speed={75}
            direction="left"
            autoFill={true}
            gradient={false}
            className="overflow-hidden w-full whitespace-nowrap"
          >
            <h1>hello</h1>
          </Marquee> */}
        </section>

        <section id="about" className="my-20">
          <h2 className="text-3xl font-bold">About Section</h2>
        </section>

        <section id="contact" className="my-20">
          <h2 className="text-3xl font-bold">Contact Section</h2>
        </section>
      </main>
    </>
  );
}
