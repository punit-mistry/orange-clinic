import React from 'react'
import ServiceBanner from '../../components/AboutComponents/ServiceBanner'
import BannerSection from '../../components/AboutComponents/BannerSection'
import HeroSection from '../../components/AboutComponents/HeroSection'
import FaqSection from '../../components/AboutComponents/faq-section'
import ContactBannerSection from '../../components/AboutComponents/ContactBanner'
const AboutPage = () => {
  return (
    <div>
      <BannerSection/>
      <HeroSection/>
      <FaqSection/>
      <ContactBannerSection/>
      <ServiceBanner/>
    </div>
  )
}

export default AboutPage