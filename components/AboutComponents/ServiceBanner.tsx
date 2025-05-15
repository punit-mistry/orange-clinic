"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ServiceBanner = () => {
  const router = useRouter();

  return (
    <section className="w-full max-w-[95%] rounded-2xl bg-yellow-500/10 border border-orange-400 relative py-20 px-4 flex flex-col items-start m-[64px]">
      <div className="w-full px-10 relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-black"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Explore Our Comprehensive Wellness Services
        </motion.h2>
        <motion.p
          className="text-lg text-black mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Your journey to health and wellness starts here. Discover our dedicated team and services.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button
            className="px-6 py-2 bg-yellow-500 text-black rounded font-semibold hover:bg-yellow-400 transition-all"
            onClick={() => router.push("/services")}
          >
            Explore Services  
          </Button>
         
        </motion.div>
      </div>
      
    </section>
  );
};

export default ServiceBanner; 