import React from 'react'

import NailHero from '@/components/NailSaloon/Hero'
import MakeTheMost from '@/components/NailSaloon/MakeTheMost'
import EverythingYouNeed from '@/components/NailSaloon/EverythingYouNeed'
import Plans from '@/components/NailSaloon/Plans'
import CardsStackSection from '@/components/NailSaloon/Hardware'

const Nailsaloon = () => {
  return (
    <>
    <NailHero/>
    <MakeTheMost/>
    <EverythingYouNeed/>
    <Plans/>
    <CardsStackSection/>
    </>
  )
}

export default Nailsaloon