"use client"

import React from "react";
import { Button } from "../ui/button";

const ContactBannerSection = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/919821790372?text=Hi%20Aditi!%20%F0%9F%91%8B%20I'm%20interested%20in%20learning%20more%20about%20my%20diet%20%F0%9F%A5%97%20and%20how%20to%20improve%20it%20%F0%9F%92%AA.%20I'd%20love%20to%20get%20your%20guidance%20%F0%9F%99%8F%20and%20see%20how%20you%20can%20help!%20%F0%9F%98%8A", "_blank");
  };

  return (
    <section className="w-full max-w-[95%] shadow-2xl shadow-orange-400 rounded-2xl bg-[url('https://plus.unsplash.com/premium_vector-1689096934387-7c844f44a153?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative py-12 md:py-18 px-4 flex flex-col items-start text-black m-4 md:m-[64px]">
      <div className="absolute inset-0 "></div>
      <div className="w-full px-4 md:p-10 relative z-10 max-w-7xl mx-auto text-black bg-orange-200 rounded-2xl  shadow-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
          Schedule Your Wellness Appointment Today
        </h2>
        <p className="text-lg md:text-xl mb-8 text-center md:text-left">
          Reach out to our team for personalized care and support on your wellness
          journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <Button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdBEF2900K7YpTj8iXqXngG2R7WcGv67RJgJoOsAIHlDKuwFQ/viewform?pli=1", "_blank")}

          className="px-6 py-2 bg-black text-white rounded-full hover:bg-white hover:text-orange-500 font-medium shadow hover:scale-105 transition-all cursor-pointer w-full sm:w-auto">
            Book
          </Button>
          <Button 
            onClick={handleWhatsAppContact}
            className="px-6 py-2 border-2 border-orange-500 bg-transparent text-black rounded-full font-medium hover:bg-white hover:text-orange-500 transition-all cursor-pointer w-full sm:w-auto"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactBannerSection;
