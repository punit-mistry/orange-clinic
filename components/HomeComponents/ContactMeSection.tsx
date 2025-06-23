"use client";

import React from "react";

const ContactMeSection = () => {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/919821790372?text=Hi%20Aditi!%20%F0%9F%91%8B%20I'm%20interested%20in%20learning%20more%20about%20my%20diet%20%F0%9F%A5%97%20and%20how%20to%20improve%20it%20%F0%9F%92%AA.%20I'd%20love%20to%20get%20your%20guidance%20%F0%9F%99%8F%20and%20see%20how%20you%20can%20help!%20%F0%9F%98%8A",
      "_blank"
    );
  };

  return (
    <section className="w-full bg-[url('https://d1p38huyj6upaa.cloudfront.net/background-10.jpg')] bg-cover bg-center relative py-16 px-4 flex flex-col items-start text-black ">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-orange-400/90"></div>
      <div className=" w-full px-20 relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Wellness Journey Starts Here
        </h2>
        <p className="text-lg mb-8">
          Schedule your appointment today and take the first step towards a
          healthier, happier you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdBEF2900K7YpTj8iXqXngG2R7WcGv67RJgJoOsAIHlDKuwFQ/viewform?pli=1",
                "_blank"
              )
            }
            className="px-6 py-2 bg-white text-orange-500 rounded-full font-medium shadow hover:scale-105 transition-all cursor-pointer"
          >
            Book
          </button>
          <button
            onClick={handleWhatsAppContact}
            className="px-6 py-2 border-2 border-white rounded-full font-medium hover:bg-white hover:text-orange-500 transition-all cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
