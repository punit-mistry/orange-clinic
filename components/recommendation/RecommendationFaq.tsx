"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/background-beams";

export default function FAQPage() {
  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/919821790372?text=Hi%20Aditi!%20%F0%9F%91%8B%20I'm%20interested%20in%20learning%20more%20about%20my%20diet%20%F0%9F%A5%97%20and%20how%20to%20improve%20it%20%F0%9F%92%AA.%20I'd%20love%20to%20get%20your%20guidance%20%F0%9F%99%8F%20and%20see%20how%20you%20can%20help!%20%F0%9F%98%8A`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="relative min-h-screen w-full bg-white antialiased flex flex-col items-center py-16 px-4 md:px-8 overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-orange-600 max-w-2xl mx-auto">
            Find answers to your questions about our recommended products and
            their benefits.
          </p>
        </div>

        {/* <Accordion type="single" collapsible className="w-full space-y-4 cursor-pointer">
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-orange-400/20 rounded-lg overflow-hidden bg-orange-400/40 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-black hover:text-orange-400 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-black">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Left Column */}
          <div className="space-y-4 ">
            {faqItems
              .slice(0, Math.ceil(faqItems.length / 2))
              .map((faq, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full cursor-pointer"
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-orange-400/20 rounded-lg overflow-hidden bg-orange-400/40 backdrop-blur-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 text-black  text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-black">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqItems
              .slice(Math.ceil(faqItems.length / 2))
              .map((faq, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full cursor-pointer"
                >
                  <AccordionItem
                    value={`item-${index + Math.ceil(faqItems.length / 2)}`}
                    className="border border-orange-400/20 rounded-lg overflow-hidden bg-orange-400/40 backdrop-blur-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 text-black text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-black">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Still have questions?
          </h2>
          <p className="text-orange-400 mb-6">We're here to help you!</p>
          <Button
            onClick={handleWhatsAppContact}
            className="bg-orange-400 hover:bg-orange-500 text-black font-medium px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.55C16.4 16.11 15.55 16.58 14.92 16.73C14.48 16.83 13.9 16.92 11.9 16.03C9.47 14.97 7.85 12.47 7.75 12.34C7.65 12.21 6.75 11.03 6.75 9.81C6.75 8.59 7.38 7.99 7.59 7.78C7.77 7.6 8.04 7.52 8.29 7.52C8.38 7.52 8.47 7.53 8.55 7.53C8.76 7.54 8.87 7.55 9.01 7.89C9.19 8.31 9.61 9.53 9.66 9.64C9.71 9.75 9.76 9.9 9.69 10.04C9.62 10.19 9.56 10.26 9.45 10.39C9.34 10.52 9.24 10.63 9.13 10.76C9.03 10.88 8.92 11 9.05 11.21C9.18 11.42 9.61 12.14 10.25 12.71C11.11 13.47 11.84 13.71 12.08 13.81C12.27 13.89 12.49 13.87 12.62 13.73C12.79 13.55 12.99 13.25 13.2 12.95C13.35 12.74 13.54 12.71 13.74 12.79C13.95 12.86 15.17 13.47 15.4 13.58C15.63 13.7 15.77 13.75 15.82 13.85C15.87 13.95 15.87 14.45 15.64 15.05L15.64 15.55Z" />
            </svg>
            Contact on WhatsApp
          </Button>
        </div>
      </div>
    </main>
  );
}

const faqItems = [
  {
    question: "How to book a session with you?",
    answer:
      "Once you have read about my services and selected what exactly you want to go ahead with, you can click the “Get started” button and fill out the pre-assessment form. Once I receive the form, I will share payment packages and details on your registered WhatsApp number. Do share the screenshot of payment completion, post which you will get a confirmation message depending on whether you have taken an online or an offline session.",
  },
  {
    question: "Do you provide a different diet plan for every single day/week?",
    answer:
      "I aim to create a lifestyle change, and your 1st session’s diet plan contains enough options till your next follow-up. In each follow-up, I try to improve your macro & micro-nutrient composition and add options that help you enjoy taste while you are on a health goal. Follow-ups are planned according to the patient’s requirements, which can vary between weekly and fortnightly.",
  },
  {
    question: "Do you only recommend a vegetarian meal?",
    answer:
      "No, the diet plan is based on the client’s food choice, either vegetarian or non-vegetarian. I do not encourage or discourage any of our clients from choosing veg or non-veg food. Clients can be either vegetarian or non-vegetarian—we help them enjoy their food type and achieve their health goals.",
  },
  {
    question: "Do you only recommend boiled food?",
    answer:
      "No, it’s a myth that to lose weight or achieve a health goal, one must eat only boiled or non-tasty food.",
  },
  {
    question: "Do we get an extension to our subscription?",
    answer:
      "Ideally, no, as discounts and package models are curated with the assumption that the client will be consistent and have timely follow-ups. To know more, ask this question during your session.",
  },
  {
    question: "How are your online sessions conducted?",
    answer:
      "Once you have selected your session slot and filled the pre-assessment form, you will receive a Google Meet link. The first session is about 45 minutes long. The diet discussed during this session is emailed to you as a PDF document within 24 hours after your session.",
  },
  {
    question: "How will I receive my diet plan?",
    answer:
      "The diet modifications discussed during the session will be emailed to your registered email ID within 24 working hours of your session.",
  },
  {
    question: "Do you give a pre-planned diet to everyone?",
    answer:
      "No, the diet modifications are curated after understanding your current blood work, eating pattern, and schedule. For clients to stick to a diet and lifestyle change, the diet must be relatable to their lifestyle, thus all diet plans are tailor-made. One size does not fit all.",
  },
  {
    question: "Once the subscription ends, how long do we have to follow the diet?",
    answer:
      "The prescribed diet modification will be a balanced diet schedule (with plenty of options as you walk through your follow-ups), which should be a long-term change for steady and better health outcomes.",
  },
  {
    question: "Do you conduct international consultations, depending on the food availability locally, based on the respective country?",
    answer:
      "Yes, I do. I have successfully consulted individuals who have migrated to the United States, the United Kingdom, Dubai, France, Germany, Italy, etc.",
  },
  {
    question: "Is there a price difference for international consultations?",
    answer:
      "Yes, as there is a bit of extra effort required on my end to evaluate the food, package products, and study the same, the consultation charges are different.",
  },
];
