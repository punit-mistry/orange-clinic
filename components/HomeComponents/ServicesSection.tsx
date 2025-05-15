import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const services = [
  {
    title: 'Personalized Nutrition Plans',
    description:
      'Get tailored nutrition plans that fit your lifestyle and health goals. Our experts ensure you receive the best guidance for your unique needs.',
  },
  {
    title: 'Holistic Wellness Coaching',
    description:
      'Experience a holistic approach to wellness with our coaching sessions. We focus on mind, body, and spirit for complete well-being.',
  },
  {
    title: 'Natural Supplements Guidance',
    description:
      'Receive expert advice on natural supplements to support your health journey. We recommend only the best and safest options.',
  },
];

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
        <div className="text-sm font-semibold text-[#FF9800] mb-2 tracking-widest uppercase">Tagline</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
          Medium length section heading goes here
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </motion.div>

      {/* Services Cards */}
      <div ref={cardsRef} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isCardsInView ? 'visible' : 'hidden'}
            className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl border-t-4 border-[#FF9800]"
          >
            <div className="w-full h-40 bg-gradient-to-br from-[#FF9800]/10 to-[#FF9800]/20 flex items-center justify-center rounded-md mb-6">
              <svg className="w-16 h-16 text-[#FF9800]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="14" rx="2" fill="white" />
                <path d="M3 17l6-6 4 4 8-8" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold  text-black mb-3 text-center">{service.title}</h3>
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
        className="flex flex-col sm:flex-row gap-4 justify-center "
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
