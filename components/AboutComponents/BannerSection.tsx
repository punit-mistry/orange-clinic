import React from 'react';

const BannerSection = () => (
  <section className="w-full bg-[url('https://d1p38huyj6upaa.cloudfront.net/background-11.jpg')] bg-cover bg-center relative py-24 px-4 flex flex-col items-start text-black mt-24">
    <div className="absolute inset-0 "></div>
    <div className=" w-full px-20 relative z-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your Health Matters</h2>
      <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-2 bg-white text-orange-500 rounded-full font-medium shadow hover:scale-105 transition-all cursor-pointer">Book</button>
        <button className="px-6 py-2 border-2 border-white rounded-full font-medium hover:bg-white hover:text-orange-500 transition-all cursor-pointer">Contact</button>
      </div>
    </div>
  </section>
);

export default BannerSection; 