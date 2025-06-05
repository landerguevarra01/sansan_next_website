import Image from "next/image";
import Link from "next/link";

export default function LedVisuals() {
  const images = [
    {
      src: "/Assets/led/36th Ugnay Palay LOGO - Main.png",
      link: "/led-visuals/philrice",
    },
    {
      src: "/Assets/led/BI_8thTECHFORUM_LOGO_LIGHTGREEN.png",
      link: "https://example.com/techforum",
    },
    {
      src: "/Assets/led/DSM-BTS-MAIN.png",
      link: "https://example.com/dsm-bts",
    },
    {
      src: "/Assets/led/KEMIN-FFS-MAIN.png",
      link: "https://example.com/kemin-ffs",
    },
    {
      src: "/Assets/led/KEMIN-IHP-LOGO 2.png",
      link: "https://example.com/kemin-ihp",
    },
    {
      src: "/Assets/led/PHILSAN-ONE VISION-MAIN.png",
      link: "https://example.com/philsan",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
      {images.map((item, index) => {
        const isExternal = item.link.startsWith("http");

        return (
          <Link
            key={index}
            href={item.link}
            {...(isExternal && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            <Image
              src={item.src}
              alt={`LED visual ${index + 1}`}
              width={270}
              height={270}
              className="cursor-pointer grayscale hover:grayscale-0 transition duration-300"
            />
          </Link>
        );
      })}
    </div>
  );
}
