'use client'

import React from 'react'
import HeroSection from '@/components/HomeComponents/HeroSection'
import HeaderSection from '@/components/HomeComponents/HeaderSection'
import ServicesSection from '@/components/HomeComponents/ServicesSection'
import ClientFeedback from '@/components/HomeComponents/ClientFeedback'
import ContactMeSection from '@/components/HomeComponents/ContactMeSection'
const AppPage = () => {
  return (
    <>
      <HeroSection/>
      <HeaderSection/>
      <ServicesSection />
      <ClientFeedback />
      <ContactMeSection />
    </>
  )
}

export default AppPage