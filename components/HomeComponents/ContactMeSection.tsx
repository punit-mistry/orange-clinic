import React from "react";

const ContactMeSection = () => (
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
        <button className="px-6 py-2 bg-white text-orange-500 rounded-full font-medium shadow hover:scale-105 transition-all cursor-pointer">
          Book
        </button>
        <button className="px-6 py-2 border-2 border-white rounded-full font-medium hover:bg-white hover:text-orange-500 transition-all cursor-pointer">
          Contact
        </button>
      </div>
    </div>
  </section>
);

export default ContactMeSection;
