import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import Image from 'next/image';
import { corporateServices } from '@/lib/services-data';

const services = corporateServices.slice(0, 3);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.7, type: 'spring' },
  }),
};

const ServicesSection = () => {
  const router = useRouter();
  const topRef = useRef(null);
  const cardsRef = useRef(null);
  const btnsRef = useRef(null);
  const isTopInView = useInView(topRef, { once: true, amount: 0.3 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });
  const isBtnsInView = useInView(btnsRef, { once: true, amount: 0.3 });

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center bg-white">
      {/* Top Content */}
      <motion.div
        ref={topRef}
        initial={{ opacity: 0, y: -30 }}
        animate={isTopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="text-sm font-semibold text-[#FF9800] mb-2 tracking-widest uppercase">Our Services</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
          Comprehensive Healthcare Solutions
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Discover our range of professional healthcare services designed to support your wellness journey and enhance your quality of life.
        </p>
      </motion.div>

      {/* Services Cards */}
      <div ref={cardsRef} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isCardsInView ? 'visible' : 'hidden'}
            className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl border-t-4 border-[#FF9800]"
          >
            <div className="w-full h-40 bg-gradient-to-br from-[#FF9800]/10 to-[#FF9800]/20 flex items-center justify-center rounded-md mb-6">
              <Image 
                src={service.image} 
                alt={service.title} 
                className="object-cover w-full h-full rounded-md" 
                width={1000} 
                height={1000} 
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-3 text-center">{service.title}</h3>
            <p className="text-gray-700 text-center text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <motion.div
        ref={btnsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isBtnsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button 
          onClick={() => router.push('/services')}
          variant={'link'}
          className="px-6 py-2 border-2 border-[#FF9800] text-black bg-white rounded-full font-medium hover:bg-[#FF9800] hover:text-white transition-all cursor-pointer"
        >
          Explore More <span className="ml-1">&rarr;</span>
        </Button>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
