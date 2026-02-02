"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const pillarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(pillarRef.current, {
        scrollTrigger: {
          trigger: ".section-two",
          scroller: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        xPercent: 47, 
        rotationY: -0,
        scale: 0.8,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory relative overflow-x-hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="fixed inset-0 z-20 pointer-events-none flex justify-center items-center">
        <div
          ref={pillarRef}
          className="relative w-[80%] h-full mt-25 will-change-transform"
        >
          <Image
            src="/MainPillar.png"
            alt="Pillar"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <section className="h-screen mx-auto snap-start relative flex items-center justify-center border-b">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/HeroBackgroundImage.png" // আপনার ইমেজের পাথ (public ফোল্ডারে থাকলে সরাসরি / নাম দিন)
            alt="Background Pillar"
            fill
            className="object-cover" // ইমেজ যাতে স্ট্রেচ না হয়ে পুরো জায়গা নেয়
            priority // পেজ লোড হওয়ার সাথে সাথেই ইমেজ লোড হবে
          />
        </div>
        <div className="w-full max-w-11/12 md:max-w-10/12 mx-auto text-white flex justify-between">
          <div>
            <h1 className="md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold">
              FORT
            </h1>
            <p className="lg:text-[23px] xl:text-[30.5px] 2xl:text-[38px] font-bold text-white/75 md:-mt-10 md:ml-2 lg:-mt-12 lg:ml-2 xl:-mt-17 xl:ml-4 2xl:-mt-20 2xl:ml-5">
              OTOL VORSA SOTHIK NIRMAN
            </p>
          </div>
          <div>
            <h1 className="md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold">
              TUDE
            </h1>
            <p className="text-right lg:text-[23px] xl:text-[30.5px] 2xl:text-[38px] font-bold text-white/75 md:-mt-10 lg:-mt-12 lg:mr-1 xl:-mt-17 xl:mr-1.5 2xl:-mt-20 2xl:mr-2">
              DERO VITTI UNNOTO KATHAMO
            </p>
          </div>
        </div>
        <div className="bg-white/50 hover:bg-amber-50 hover:text-amber-500 duration-500 text-black/75 cursor-pointer rounded-3xl absolute bottom-5">
          <button className="py-3 pl-3 cursor-pointer font-bold">EXPLORE PRODUCTS</button>
          <svg
            className="w-6 h-6 mr-3 cursor-pointer inline-block -rotate-45 ml-2" // সাইজ এবং গ্যাপ কন্ট্রোল করার জন্য
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      <section className="section-two h-screen max-w-11/12 md:max-w-10/12 border bg-amber-950 mx-auto border-amber-300 snap-start relative flex items-center justify-center">
        <h1 className=" text-3xl opacity-20">SECTION TWO (RIGHT)</h1>
      </section>
    </main>
  );
}