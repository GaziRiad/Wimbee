"use client";

import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    { src: "/partners/first.png", alt: "Company 1" },
    { src: "/partners/second.png", alt: "Company 1" },
    { src: "/partners/second.png", alt: "Company 1" },
    { src: "/partners/third.png", alt: "Company 1" },
    { src: "/partners/third.png", alt: "Company 1" },
    { src: "/partners/forth.png", alt: "Company 1" },
    { src: "/partners/forth.png", alt: "Company 1" },
    { src: "/partners/first.png", alt: "Company 1" },
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="relative py-12">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex min-w-full shrink-0 items-center justify-around gap-8 px-4">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="relative h-12 w-24 shrink-0 grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set of logos for seamless scrolling */}
          <div className="flex min-w-full shrink-0 items-center justify-around gap-8 px-4">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="relative h-12 w-24 shrink-0 grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
