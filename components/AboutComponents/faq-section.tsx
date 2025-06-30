"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "../ui/button"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// FAQ data array - can be moved to a separate file or fetched from an API
const faqData = [
  {
    question: "How to book a session with you?",
    answer:
      "Once you have read about my services and selected what exactly you want to go ahead with, you can click the \"Get started\" button and fill out the pre-assessment form. Once I receive the form, I will share payment packages and details on your registered WhatsApp number. Do share the screenshot of payment completion, post which you will get a confirmation message depending on whether you have taken an online or an offline session.",
  },
  {
    question: "Do you provide a different diet plan for every single day/week?",
    answer:
      "I aim to create a lifestyle change, and your 1st session's diet plan contains enough options till your next follow-up. In each follow-up, I try to up your macro & micro-nutrient composition and add options that help you enjoy taste while you are on a health goal. Follow-ups are planned according to the patient's requirements, which can vary between weekly and fortnightly follow-ups.",
  },
  {
    question: "Do you only recommend a vegetarian meal?",
    answer:
      "No, the diet plan is based on the client's food choice, either vegetarian or non-vegetarian. I do not encourage or discourage any of our clients from choosing veg/ non-veg food. Client can be either vegetarian or non-vegetarian, we help them enjoy their food type and achieve their health goal.",
  },
  {
    question: "Do you only recommend boiled food?",
    answer:
      "No, it's a myth that to lose weight or achieve a health goal, one must eat only boiled food/non-tasty food.",
  },
  {
    question: "Do we get an extension to our subscription?",
    answer:
      "Ideally, no, as discounts and package models are curated thinking that the client will be consistent and have timely follow-ups. To know more, ask this question during your session.",
  },
  {
    question: "Once a session is confirmed, will I be able to reschedule the appointment to a later date?",
    answer:
      "Yes, only if you inform me 12 hours before your scheduled session time.",
  },
  {
    question: "If I have paid for the session and I fail to inform within the 12-hour window, will I be charged?",
    answer:
      "If there is no intimation given and you just do not turn up for your session, I am afraid that there will not be any refunds. Please understand that the slot is practically booked at my end, and the session timing was well discussed before booking.",
  },
  {
    question: "Can I pay via credit card?",
    answer:
      "Currently, I accept payment only via UPI, bank transfer, and cash.",
  },
  {
    question: "How are your online sessions conducted?",
    answer:
      "Once you have selected your session slot and filled the pre-assessment form, you will receive a Google Meet link. 1st session is about 45 minutes long. The diet discussed during this session is emailed to you as a PDF document within 24 hours after your session.",
  },
  {
    question: "How will I receive my diet plan?",
    answer:
      "The diet modifications that are discussed during the session will be emailed to your registered email ID within 24 working hours of your session.",
  },
  {
    question: "Do you give a pre-planned diet to everyone?",
    answer:
      "No, the diet modifications are curated after knowing your current blood work, eating pattern, and schedule. I believe, for clients to stick to diet & lifestyle change, the diet needs to be relatable with their lifestyle, thus the diet plans are tailor-made. I believe one size does not fit all.",
  },
  {
    question: "Once the subscription ends, how long do we have to follow the diet?",
    answer:
      "The prescribed diet modification will be a balanced diet schedule (with plenty of options as you walk through your follow-ups), which should be a long-term change for steady & better health outcomes.",
  },
  {
    question: "Do you conduct international consultations, depending on the food availability locally, based on the respective country?",
    answer:
      "Yes, I do. I have successfully consulted individuals who have migrated to the United States, the United Kingdom, Dubai, France, Germany, Italy, etc.",
  },
  {
    question: "Is there a price difference for international consultations?",
    answer:
      "Yes, as there is a bit of extra effort required on my end to evaluate the food, package products, and read about the same, the consultation charges are different.",
  },
  {
    question: "Do I need to get my blood work/ test done before every session?",
    answer:
      "In your 1st session, we recommend disclosing all your recent blood reports and scans, as your diet regimen can depend on the evaluation of blood parameters. Depending on your case and how old the reports are, we may ask you to repeat selective tests to track your progress.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <section ref={ref} className="w-full py-12 md:py-16 lg:py-20 min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-orange-950 dark:via-gray-900 dark:to-orange-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,165,0,0.1),rgba(255,165,0,0))] animate-pulse" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-4xl relative">
        <motion.div 
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? false : (isInView ? { opacity: 1, y: 0 } : false)}
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
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={isMobile ? false : (isInView ? { opacity: 1, y: 0 } : false)}
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
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? false : (isInView ? { opacity: 1, y: 0 } : false)}
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
