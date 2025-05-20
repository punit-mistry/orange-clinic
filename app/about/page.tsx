import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

// Dynamic imports for components that aren't immediately visible
const ServiceBanner = dynamic(() => import('../../components/AboutComponents/ServiceBanner'), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />
})

const FaqSection = dynamic(() => import('../../components/AboutComponents/faq-section'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />
})

const ContactBannerSection = dynamic(() => import('../../components/AboutComponents/ContactBanner'), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />
})

// Keep these as static imports since they're above the fold
import BannerSection from '../../components/AboutComponents/BannerSection'
import HeroSection from '../../components/AboutComponents/HeroSection'

export const metadata: Metadata = {
  title: 'About Us - Orange Clinic',
  description: 'Learn more about Orange Clinic, our mission, and our commitment to providing exceptional healthcare services.',
}

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <BannerSection />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />}>
        <ContactBannerSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />}>
        <ServiceBanner />
      </Suspense>
    </main>
  )
}

export default AboutPage