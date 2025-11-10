import React from 'react'
import Hero from '../component/Hero/Hero'
import FeatureDestination from '../component/FeatureDesti/FeatureDestination';
import ExclusiveOffer from '../component/Offer/ExclusiveOffer';
import Testimonial from '../component/Testomonial/Testimonial';
import NewsLetter from '../component/NewsLetter/NewsLetter'

const Home = () => {
  return (
   <>
   <Hero/>
   <FeatureDestination/>
   <ExclusiveOffer/>
   <Testimonial/>
   <NewsLetter/>
   </>
  )
}

export default Home
