"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/homePage/HeroSection";
import HeroDetailsSection from "@/components/homePage/HeroDetailsSection";
import ProductsSection from "@/components/homePage/ProductsSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const pillarRef = useRef(null);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // ১. পিলারের মুভমেন্ট (১ থেকে ২ নম্বর সেকশন)
      gsap.to(pillarRef.current, {
        scrollTrigger: {
          trigger: ".section-two",
          scroller: mainContainerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        xPercent: 47,
        scale: 0.8,
        ease: "none",
      });

      // ২. ৩ নম্বর সেকশন আসার আগে পিলার ফেড আউট (Fade out)
      gsap.to(pillarRef.current, {
        scrollTrigger: {
          trigger: ".section-three",
          scroller: mainContainerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
        opacity: 0,
      });

    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainContainerRef}
      className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory relative bg-[#ede7de]"
      /* এখানে স্ক্রলবার হাইড করার স্টাইলগুলো ফেলে দেওয়া হয়েছে */
    >
      {/* পিলার কন্টেইনার */}
      <div className="fixed inset-0 z-12 pointer-events-none flex justify-center items-center">
        <div ref={pillarRef} className="relative w-[80%] h-full mt-25 will-change-transform transition-opacity">
          <Image src="/MainPillar.png" alt="Pillar" fill className="object-contain" priority />
        </div>
      </div>

      <section className="hidden md:block relative z-10 snap-start h-screen">
        <HeroSection />
      </section>

      <section className="hidden md:block relative z-10 snap-start h-screen section-two">
        <HeroDetailsSection />
      </section>

      {/* ৩ নম্বর সেকশন */}
      <div className="relative z-20 snap-start min-h-screen bg-[#0f0f0f] section-three"> 
        <ProductsSection />
      </div>
      
    </main>
  );
}