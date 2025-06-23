"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      backgroundRef.current!.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 186, 8, 0.15) 0%, rgba(255, 149, 0, 0.05) 50%, rgba(255, 255, 255, 0) 100%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      {/* Animated background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 transition-all duration-500 ease-in-out"
      />

      {/* Floating circles decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-400/20"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: Math.random() * 5 + 5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden border-none shadow-lg bg-orange-400/50">
              <CardContent className="p-0">
                <div className="aspect-square  relative overflow-hidden">
                  <Image
                    src="/about-hero.png"
                    alt="Orange Clinic Wellness Center"
                    className="object-cover w-full h-full"
                    width={1000}
                    height={1000}
                    priority
                  />
                  {/* <div className="absolute inset-0 bg- from-yellow-500/20 to-orange-400/20" /> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block"
              whileHover={{
                rotate: [0, -10, 10, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-3 rounded-lg inline-block text-white">
                <Package className="h-6 w-6" />
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl font-bold tracking-tight text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover the Heart and Soul of Orange Clinic: Your Wellness
              Journey Begins Here
            </motion.h1>

            <motion.p
              className="text-gray-700 leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I have been working with sectors like leading, Corporate,
              Hospitals, Clinics, and International Schools for the last 10
              years. My vision is to create awareness amongst the crowd about
              the importance of healthy eating patterns so that they know the
              true strength and immense power of naturally available food and
              how it can work over one's health. A future vision is to have a
              Better India = Fitter India. My expertise is in managing cases
              like Metabolic diseases, Weight management, Diabetes management,
              Gestational Diabetes, PCOD (Polly Cystic Ovarian Disease),
              Hypothyroidism, Nutrition support during Cancer treatment,
              Nutrition during and post pregnancy, and nutrition & growth chart
              plotting for kids and much more.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdBEF2900K7YpTj8iXqXngG2R7WcGv67RJgJoOsAIHlDKuwFQ/viewform?pli=1",
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-yellow-600 hover:to-orange-500 text-white border-none"
                >
                  Book Appointment
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
