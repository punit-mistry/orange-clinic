import React from "react";
import { Button } from "../ui/button";

const ContactBannerSection = () => (
  <section className="w-full max-w-[95%] shadow-2xl shadow-orange-400 rounded-2xl bg-[url('https://d1p38huyj6upaa.cloudfront.net/background-6.jpg')] bg-cover bg-center relative py-24 px-4 flex flex-col items-start text-black m-[64px]">
    <div className="absolute inset-0 "></div>
    <div className=" w-full px-20 relative z-10 max-w-7xl mx-auto text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
        Schedule Your Wellness Appointment Today
      </h2>
      <p className="text-xl mb-8">
        {" "}
        Reach out to our team for personalized care and support on your wellness
        journey.{" "}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="px-6 py-2 bg-white text-orange-500 rounded-full  hover:bg-white hover:text-orange-500 font-medium shadow hover:scale-105 transition-all cursor-pointer">
          Book
        </Button>
        <Button className="px-6 py-2 border-2 border-white rounded-full font-medium hover:bg-white hover:text-orange-500 transition-all cursor-pointer">
          Contact Us
        </Button>
      </div>
    </div>
  </section>
);

export default ContactBannerSection;
