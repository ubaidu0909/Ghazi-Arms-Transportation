import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AlertBanner from './components/AlertBanner'
import Services from './components/Services'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Compliance from './components/Compliance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AlertBanner />
      <Services />
      <About />
      <WhyUs />
      <Process />
      <Compliance />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
