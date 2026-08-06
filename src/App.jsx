import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import WhyPage from './components/WhyPage'
import ArrowPage from './components/ArrowPage'
import RewiredPage from './components/RewiredPage'
import AgentsPage from './components/AgentsPage'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <HeroSection />
      <WhyPage />
      <ArrowPage />
      <RewiredPage />
      <AgentsPage />
      <Testimonials />
      <Services />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
