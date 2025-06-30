'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Keep HeroSection as static import since it's above the fold
import HeroSection from '@/components/HomeComponents/HeroSection'
// import { AutoDisclaimer } from '@/components/Disclaimer/auto-disclaimer'

// Dynamic imports for components below the fold
const HeaderSection = dynamic(() => import('@/components/HomeComponents/HeaderSection'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />
})

const ServicesSection = dynamic(() => import('@/components/HomeComponents/ServicesSection'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />
})

const ClientFeedback = dynamic(() => import('@/components/HomeComponents/ClientFeedback'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />
})

const ContactMeSection = dynamic(() => import('@/components/HomeComponents/ContactMeSection'), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />
})
const InstagramReelsSection = dynamic(() => import('@/components/HomeComponents/instagramReelsSection'), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />
})

const AppPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />}>
        <HeaderSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />}>
        <ClientFeedback />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />}>
        <ContactMeSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-gray-100 rounded-lg" />}>
        <InstagramReelsSection />
      </Suspense>
       {/* Auto-show consent disclaimer */}
      {/* <AutoDisclaimer type="consent" delay={2000} /> */}
    </main>
  )
}

export default AppPage