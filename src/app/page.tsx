import React from 'react'
import Home from '@/app/pages/Home/page'
import Performance from '@/app/pages/Performance/page'
import Future from '@/app/pages/Future/page'
import FeaturesBento from '@/app/pages/FeaturesBento/Pege'
import Discover from '@/app/pages/Discover/page'
import SliderLogo from '@/app/components/logoSlider'
import FAQ from '@/app/pages/FAQ/page'
import Footer from '@/app/pages/Footer/page'
import Launch from '@/app/pages/Launch/page'
import Navbar from './components/navbar'

function page() {
  return (
    <>
      <Navbar />
      <Home />
      <SliderLogo />
      <FeaturesBento />
      <Future />
      <Performance />
      <Launch />
      <Discover />
      <FAQ />
      <Footer />
    </>
  )
}

export default page