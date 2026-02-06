import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="h-screen mx-auto snap-start relative flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Gemini_Generated_Image_xvx64fxvx64fxvx6.png"
            alt="Background Pillar"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full max-w-11/12 md:max-w-10/12 mx-auto text-white flex justify-between">
          <div>
            <motion.h1
              initial={{x: -100, opacity: 0,rotateX: -15 }}
              whileInView={{ x: 0, opacity: 1,rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{duration: 2,type: "spring",bounce: 0.4,damping: 12,mass: 1,}}
              className="text-[#9f28e3] md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold">
              FORT
            </motion.h1>
            <motion.p
              initial={{x: -90, y: 50, opacity: 0,rotateX: -15 }}
              whileInView={{ x: 0, y: 0, opacity: 1,rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{duration: 2,type: "spring",bounce: 0.4,damping: 12,mass: 1,}}
              className="border-t-8 border-amber-500 lg:text-[23px] xl:text-[30.5px] 2xl:text-[38px] font-bold text-white/75 md:-mt-6 md:ml-2 lg:-mt-8 lg:ml-2 xl:-mt-13 xl:ml-4 2xl:-mt-16 2xl:ml-5">
              OTOL VORSA SOTHIK NIRMAN
            </motion.p>
          </div>
          <div>
            <motion.h1
              initial={{x: 100, opacity: 0,rotateX: -15 }}
              whileInView={{ x: 0, opacity: 1,rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{duration: 2,type: "spring",bounce: 0.4,damping: 12,mass: 1}}
              className="text-[#9f28e3] md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold">
              TUDE
            </motion.h1>
            <motion.p
              initial={{x: 90, y: 50, opacity: 0,rotateX: -15 }}
              whileInView={{ x: 0, y: 0, opacity: 1,rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{duration: 2,type: "spring",bounce: 0.4,damping: 12,mass: 1,}}
              className="border-t-8 border-amber-500 text-right lg:text-[23px] xl:text-[30.5px] 2xl:text-[38px] font-bold text-white/75 md:-mt-6 lg:-mt-8 lg:mr-1 xl:-mt-13 xl:mr-1.5 2xl:-mt-16 2xl:mr-2">
              DERO VITTI UNNOTO KATHAMO
            </motion.p>
          </div>
        </div>
        <div className="bg-white/50 hover:bg-amber-50 animate-bounce hover:text-amber-500 duration-500 text-black/75 cursor-pointer rounded-3xl absolute bottom-5">
          <button className="py-3 pl-3 cursor-pointer font-bold">EXPLORE PRODUCTS</button>
          <svg
            className="w-6 h-6 mr-3 cursor-pointer inline-block -rotate-45 ml-2"
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
    );
};

export default HeroSection;