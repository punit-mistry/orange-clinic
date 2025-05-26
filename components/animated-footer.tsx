"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Send, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Logo from '@/public/logo.png'
import Image from "next/image"
export default function AnimatedFooter() {
  const [email, setEmail] = useState("")
  const currentYear = new Date().getFullYear()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
    // Add actual subscription logic here
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#f59e0b", // yellow-500
      transition: { duration: 0.2 },
    },
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            backgroundColor: [
              "rgba(245, 158, 11, 0.2)", // yellow-500
              "rgba(251, 146, 60, 0.2)", // orange-400
              "rgba(249, 115, 22, 0.2)", // orange-500
              "rgba(245, 158, 11, 0.2)", // back to yellow-500
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
            backgroundColor: [
              "rgba(251, 146, 60, 0.2)", // orange-400
              "rgba(245, 158, 11, 0.2)", // yellow-500
              "rgba(234, 179, 8, 0.2)", // yellow-600
              "rgba(251, 146, 60, 0.2)", // back to orange-400
            ],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            backgroundColor: [
              "rgba(234, 179, 8, 0.15)", // yellow-600
              "rgba(245, 158, 11, 0.15)", // yellow-500
              "rgba(251, 146, 60, 0.15)", // orange-400
              "rgba(234, 179, 8, 0.15)", // back to yellow-600
            ],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main footer content */}
      <motion.div
        className="pt-12 pb-6 px-4 sm:px-6 lg:px-8"
        animate={{
          background: [
            "linear-gradient(to right, rgba(245, 158, 11, 0.9), rgba(251, 146, 60, 0.9))",
            "linear-gradient(to right, rgba(251, 146, 60, 0.9), rgba(249, 115, 22, 0.9))",
            "linear-gradient(to right, rgba(249, 115, 22, 0.9), rgba(234, 179, 8, 0.9))",
            "linear-gradient(to right, rgba(234, 179, 8, 0.9), rgba(245, 158, 11, 0.9))",
            "linear-gradient(to right, rgba(245, 158, 11, 0.9), rgba(251, 146, 60, 0.9))",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and company info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="text-2xl font-bold text-white"
                animate={{
                  textShadow: ["0 0 5px rgba(0,0,0,0)", "0 0 15px rgba(255,255,255,0.5)", "0 0 5px rgba(0,0,0,0)"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
              <Image src={Logo} alt="logo"  className=" rounded-full bg-transparent w-24 h-28 hover:animate-spin cursor-pointer" />
              </motion.div>
              <motion.p
                className="text-white/90"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Bringing innovation and excellence to your digital experience.
              </motion.p>
            </motion.div>

            {/* Navigation links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { text: "Home", href: "/" },
                  { text: "About Us", href: "/about" },
                  { text: "Services", href: "/services" },
                  { text: "Recommendations", href: "/recommendations" },
                  { text: "Chat on WhatsApp", href: "https://wa.me/919821790372?text=Hi%20Aditi!%20%F0%9F%91%8B%20I'm%20interested%20in%20learning%20more%20about%20my%20diet%20%F0%9F%A5%97%20and%20how%20to%20improve%20it%20%F0%9F%92%AA.%20I'd%20love%20to%20get%20your%20guidance%20%F0%9F%99%8F%20and%20see%20how%20you%20can%20help!%20%F0%9F%98%8A", external: true }
                ].map((item, index) => (
                  <motion.li key={index} whileHover="hover" variants={linkVariants}>
                    <Link 
                      href={item.href} 
                      className="text-white/90 hover:text-white flex items-center group"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <ChevronRight className="h-4 w-4 mr-1 transition-transform group-hover:translate-x-1" />
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter subscription */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Join</h3>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Here"
                    required
                    className="px-4 py-2 rounded-l-md w-full border focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800"
                  />
                  <motion.button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-md flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="h-4 w-4 mr-1" />
                    Join
                  </motion.button>
                </div>
                <p className="text-sm text-white/80">
                  By subscribing, you agree to our{" "}
                  <Link href="#" className="underline hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-white/20 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/80">
            <motion.div className="flex space-x-4 mb-4 sm:mb-0" variants={containerVariants}>
              {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link href="#" className="hover:text-white hover:underline underline-offset-2">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-white/80"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              © {currentYear} Orange Clinic. All rights reserved.
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
