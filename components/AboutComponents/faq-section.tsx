"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "../ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// FAQ data array - can be moved to a separate file or fetched from an API
const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of health and wellness services, including nutritional counseling, physical therapy, and holistic treatments. Our goal is to support your journey to optimal health. Each service is tailored to meet your individual needs.",
  },
  {
    question: "Are your practitioners qualified?",
    answer:
      "Our team consists of licensed and experienced professionals in their respective fields. We prioritize ongoing education to ensure we provide the best care possible. Your health is in capable hands.",
  },
  {
    question: "How can I book?",
    answer:
      "You can easily book an appointment through our website or by calling our clinic directly. We offer flexible scheduling to accommodate your needs. Our friendly staff is here to assist you.",
  },
  {
    question: "What are your hours?",
    answer:
      "Our clinic is open Monday through Friday from 9 AM to 6 PM. We also offer weekend appointments upon request. Please check our website for any holiday hours.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept a variety of insurance plans. Please contact our office for specific coverage details. We also offer payment plans for those without insurance.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <section ref={ref} className="w-full py-12 md:py-16 lg:py-20 min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-orange-950 dark:via-gray-900 dark:to-orange-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,165,0,0.1),rgba(255,165,0,0))] animate-pulse" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-4xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">Here are some common questions we receive from our clients.</p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border rounded-lg px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline hover:text-orange-600 dark:hover:text-orange-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-12 flex items-center justify-center flex-col gap-4 bg-white/30 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm mt-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            Still Got Questions?
          </h1>
          <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-gray-300">
            We're here to Help
          </h3>
          <Button 
            onClick={() => window.open("https://wa.me/919821790372?text=Hi%20Aditi!%20%F0%9F%91%8B%20I'm%20interested%20in%20learning%20more%20about%20my%20diet%20%F0%9F%A5%97%20and%20how%20to%20improve%20it%20%F0%9F%92%AA.%20I'd%20love%20to%20get%20your%20guidance%20%F0%9F%99%8F%20and%20see%20how%20you%20can%20help!%20%F0%9F%98%8A", "_blank")}
            className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
