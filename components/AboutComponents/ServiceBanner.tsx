"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const ServiceBanner = () => {
  const router = useRouter()

  return (
    <section className="w-full max-w-[95%] relative py-12 md:py-20 px-4 flex flex-col items-start m-4 md:m-[64px]">
      {/* Animated Border Container */}
      <div className="relative w-full rounded-2xl overflow-hidden">
        {/* Rotating Border Animation */}
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 opacity-75"></div>
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "conic-gradient(from 0deg, #f59e0b, #ea580c, #f59e0b, #ea580c, #f59e0b)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative bg-yellow-500/10 backdrop-blur-sm rounded-2xl m-[2px] overflow-hidden">
          {/* Background Animations */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                animate={{
                  x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}

            {/* Geometric Shapes */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 border-2 border-orange-300/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 border-2 border-yellow-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            />
          </div>

          {/* Content */}
          <div className="w-full px-4 md:px-10 relative z-10 max-w-7xl mx-auto py-12 md:py-20">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-black relative"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Explore Our Comprehensive Wellness Services
              {/* Text Glow Effect */}
              <motion.div
                className="absolute inset-0 text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400/20 blur-sm"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Explore Our Comprehensive Wellness Services
              </motion.div>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-black mb-6 md:mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Your journey to health and wellness starts here. Discover our dedicated team and services.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full sm:w-auto px-6 py-2 bg-yellow-500 text-black rounded font-semibold hover:bg-yellow-400 transition-all relative overflow-hidden group"
                  onClick={() => router.push("/services")}
                >
                  <span className="relative z-10">Explore Services</span>
                  {/* Button Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceBanner
