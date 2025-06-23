"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WordRotate } from "@/components/magicui/word-rotate";
import MealImage from '@/public/meal.png'
import { useEffect, useState, memo } from "react";

// Memoize the background elements to prevent unnecessary re-renders
const BackgroundElements = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-blue-100/30"
        initial={{
          x: Math.random() * 100 - 50 + "%",
          y: Math.random() * 100 - 50 + "%",
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          x: [
            Math.random() * 100 - 50 + "%",
            Math.random() * 100 - 50 + "%",
          ],
          y: [
            Math.random() * 100 - 50 + "%",
            Math.random() * 100 - 50 + "%",
          ],
        }}
        transition={{
          duration: 15 + i * 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          opacity: 0.4,
          filter: "blur(40px)",
          willChange: "transform",
        }}
      />
    ))}
  </div>
));

// Memoize the floating particles
const FloatingParticles = memo(() => (
  <>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full bg-blue-400/20"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: Math.random() * 0.2 + 0.1,
        }}
        animate={{
          y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
          x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
        }}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          willChange: "transform",
        }}
      />
    ))}
  </>
));

// Memoize the main image component
const MainImage = memo(() => (
  <div className="relative top-30 md:top-0 md:block">
    <motion.div
      animate={{
        boxShadow: [
          "0 0 40px 5px rgba(59, 130, 246, 0.3)",
          "0 0 60px 10px rgba(124, 58, 237, 0.3)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute inset-0 rounded-full blur-xl opacity-70"
    />

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 20,
        ease: "linear",
      }}
      className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
        <Image
          src={MealImage}
          alt="Aditi Khanduri - Wellness Specialist"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 250px, (max-width: 1200px) 500px, 600px"
        />
      </div>

      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute inset-0 rounded-full border-2 border-blue-200/30"
          initial={{ scale: 1 + i * 0.1 }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1 + i * 0.1, 1.05 + i * 0.1, 1 + i * 0.1],
          }}
          transition={{
            rotate: {
              duration: 25 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          style={{ willChange: "transform" }}
        />
      ))}
    </motion.div>
  </div>
));

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-white to-blue-50">
        {/* Static placeholder during SSR */}
        <div className="relative flex items-center flex-col-reverse md:flex-row justify-between h-full px-4 sm:px-8 md:px-16 z-10">
          <div className="flex items-center h-full lg:ml-16 xl:ml-32 mt-16 md:mt-0">
            <div className="max-w-2xl md:text-left">
              <div className="mb-4 text-sm md:text-base font-medium text-orange-400 tracking-wider">
                WELLNESS SPECIALIST
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
                Hi! This is Aditi Khanduri.
              </h1>
              <div className="flex flex-row items-center md:justify-start gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                  Your
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
                  Wellness
                </span>
              </div>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                Journey Starts Here
              </span>
              <div className="mt-8 flex justify-center md:justify-start">
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
          <div className="relative top-30 md:top-0 md:block">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src={MealImage}
                  alt="Aditi Khanduri - Wellness Specialist"
                  fill
                  className="object-cover"
                  priority
                  // sizes="(max-width: 768px) 250px, (max-width: 1200px) 500px, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <BackgroundElements />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/20 to-purple-50/20"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="relative flex items-center flex-col-reverse md:flex-row justify-between h-full px-4 sm:px-8 md:px-16 z-10">
        <div className="flex items-center h-full lg:ml-16 xl:ml-32 mt-16 md:mt-0">
          <div className="max-w-2xl md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-4 text-sm md:text-base font-medium text-orange-400 tracking-wider"
            >
              WELLNESS SPECIALIST
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black"
            >
              Hi! This is Aditi Khanduri.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-row items-center md:justify-start gap-2 sm:gap-3"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                Your
              </span>
              <WordRotate
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent"
                words={[" Wellness", "Better Health", "Healing"]}
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black"
            >
              Journey Starts Here
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <button 
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdBEF2900K7YpTj8iXqXngG2R7WcGv67RJgJoOsAIHlDKuwFQ/viewform?pli=1", "_blank")}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
                Start Your Journey
              </button>
            </motion.div>
          </div>
        </div>

        <MainImage />
      </div>

      <FloatingParticles />
    </div>
  );
};

export default memo(HeroSection);
