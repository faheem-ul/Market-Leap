import React from 'react'
import PricingHero from '@/components/Pricing/Hero'
import Plans from '@/components/Pricing/Plans'
import PricingIncluded from '@/components/Pricing/Included'

const Pricing = () => {
  return (
    <>
        <PricingHero/>
        <Plans/>
        <PricingIncluded/>
    </>
  )
}

export default Pricing