import React from 'react'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


export default function page() {
  return (
    <div className='min-h-[400vh] bg-black overflow-hidden '>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] '>
        <div className=' max-w-5xl mx-auto p-5 '>
          <Navbar />
          <HeroSection />
        </div>
        <div className=' h-10 x1:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
        <div className=' max-w-7xl mx-auto p-5'>
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  )
}
