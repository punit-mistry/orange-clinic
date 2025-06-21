// 'use client'

// import React from 'react';
// import Image from 'next/image';
// import { motion, useInView } from 'framer-motion';
import ProfilePic from '@/public/profile-pic.jpeg';

// const HeaderSection = () => {
//   const leftRef = React.useRef(null);
//   const rightRef = React.useRef(null);
//   const isLeftInView = useInView(leftRef, { once: true, amount: 0.3 });
//   const isRightInView = useInView(rightRef, { once: true, amount: 0.3 });

//   return (
//     <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-orange-400/90 text-black px-8 py-12">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left Side */}
//         <motion.div
//           ref={leftRef}
//           initial={{ opacity: 0, x: -50 }}
//           animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h1 
//             className="text-4xl md:text-5xl  lg:text-6xl font-bold mb-4 leading-tight text-black  bg-clip-text "
//             initial={{ opacity: 0, y: 20 }}
//             animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Personalized Nutrition for a Healthier You
//           </motion.h1>
//           <motion.p 
//             className="text-lg text-black mb-8 max-w-xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             At Orange Clinic, we believe in holistic health and wellness. Our mission is to empower individuals through personalized care and natural solutions.
//           </motion.p>
//           <motion.div 
//             className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <div className="bg-orange-500/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
//               <div className="font-bold text-lg mb-2 text-orange-600">Our Values</div>
//               <div className="text-slate-700 text-base">Integrity, compassion, and community are at the heart of everything we do.</div>
//             </div>
//             <div className="bg-orange-500/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
//               <div className="font-bold text-lg mb-2 text-orange-600">Our Mission</div>
//               <div className="text-slate-700 text-base">To enhance your well-being through innovative treatments and a supportive environment.</div>
//             </div>
//           </motion.div>
//           <motion.button 
//             className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             Learn More
//           </motion.button>
//         </motion.div>
//         {/* Right Side */}
//         <motion.div 
//           ref={rightRef}
//           className="flex justify-center items-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div 
//             className="w-full h-80 md:h-[400px] lg:h-[800px] bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Image
//               src={ProfilePic}
//               alt="Orange Clinic Header"
//               className="object-cover w-full h-full"
//               priority
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeaderSection;


import React from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRouter } from "next/navigation"

const HeaderSection = () => {
  const router = useRouter()
  const leftRef = React.useRef(null)
  const rightRef = React.useRef(null)
  const isLeftInView = useInView(leftRef, { once: true, amount: 0.3 })
  const isRightInView = useInView(rightRef, { once: true, amount: 0.3 })

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-orange-400/90 text-black px-8 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl  lg:text-6xl font-bold mb-4 leading-tight text-black  bg-clip-text "
            initial={{ opacity: 0, y: 20 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Personalized Nutrition for a Healthier You
          </motion.h1>
          <motion.p
            className="text-lg text-black mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At Orange Clinic, we believe in holistic health and wellness. Our mission is to empower individuals through
            personalized care and natural solutions.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-orange-500/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="font-bold text-lg mb-2 text-orange-600">Our Values</div>
              <div className="text-slate-700 text-base">
                Integrity, compassion, and community are at the heart of everything we do.
              </div>
            </div>
            <div className="bg-orange-500/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="font-bold text-lg mb-2 text-orange-600">Our Mission</div>
              <div className="text-slate-700 text-base">
                To enhance your well-being through innovative treatments and a supportive environment.
              </div>
            </div>
          </motion.div>
          <motion.button
            className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
             onClick={() => router.push('/about')}
          >
            Learn More
          </motion.button>
        </motion.div>
        {/* Right Side */}
        <motion.div
          ref={rightRef}
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-full h-80 md:h-[400px] lg:h-[800px] bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={ProfilePic}
              alt="Orange Clinic Header"
              className="object-cover w-full h-full"
              width={600}
              height={800}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeaderSection
