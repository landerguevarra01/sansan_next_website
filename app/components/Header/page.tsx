// components/Header/page.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    if (pathname === "/") {
      // Already on homepage → scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to homepage with hash
      router.push(`/#${sectionId}`);
    }
  };

  // Handle native anchor clicks with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Delay scroll until next tick to allow full render
    setTimeout(handleHashScroll, 100);

    return () => {};
  }, []);

  return (
    <header className="w-full py-4 flex justify-between items-center text-responsiveNav z-50">
      <div className="flex items-center">
        <img
          src="/Assets/SANSAN.png"
          alt="SANSAN Logo"
          className="h-[82px] w-auto cursor-pointer"
          onClick={() => handleNavigation("home")}
        />
      </div>
      <nav className="flex gap-6">
        {["home", "projects", "about", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className="border-[2px] border-white rounded-full px-4 py-1 hover:bg-[#DB0102] hover:border-[#DB0102] transition-all duration-200 uppercase cursor-pointer"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
