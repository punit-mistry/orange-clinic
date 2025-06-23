"use client";

import React from "react";

const BannerSection = () => {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/919821790372?text=Hi%20Aditi!%20%F0%9F%91%8B%20I'm%20interested%20in%20learning%20more%20about%20my%20diet%20%F0%9F%A5%97%20and%20how%20to%20improve%20it%20%F0%9F%92%AA.%20I'd%20love%20to%20get%20your%20guidance%20%F0%9F%99%8F%20and%20see%20how%20you%20can%20help!%20%F0%9F%98%8A",
      "_blank"
    );
  };

  return (
    <section className="w-full bg-[url('https://images.unsplash.com/photo-1590004987778-bece5c9adab6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative py-12 md:py-24 px-4 flex flex-col items-start text-black mt-12 md:mt-24">
      <div className="absolute inset-0 "></div>
      <div className="w-full px-4 md:px-20 relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
          Your Health Matters
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90">
          Your health is our top priority — we’re here to guide you through
          every step of your wellness journey with trusted advice, personalized
          support, and services designed to help you feel your best every day.{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdBEF2900K7YpTj8iXqXngG2R7WcGv67RJgJoOsAIHlDKuwFQ/viewform?pli=1",
                "_blank"
              )
            }
            className="w-full sm:w-auto px-6 py-2 bg-white text-orange-500 rounded-full font-medium shadow hover:scale-105 transition-all cursor-pointer"
          >
            Book
          </button>
          <button
            onClick={handleWhatsAppContact}
            className="w-full sm:w-auto px-6 py-2 border-2 border-white rounded-full font-medium hover:bg-white hover:text-orange-500 transition-all cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
