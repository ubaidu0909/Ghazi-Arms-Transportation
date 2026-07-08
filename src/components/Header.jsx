import React, { useState } from 'react'
import './Header.css'
import logoImage from '../images/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Ghazi Arms Industries" className="logo-image" />
        <div className="logo-text">
          <span className="name">Ghazi Arms Industries</span>
          <span className="tagline">Licensed Transport</span>
        </div>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? 'mobile-open' : ''}`}>
        <button onClick={() => scrollToSection('services')} className="nav-link">
          Services
        </button>
        <button onClick={() => scrollToSection('about')} className="nav-link">
          About
        </button>
        <button onClick={() => scrollToSection('why')} className="nav-link">
          Why Us
        </button>
        <button onClick={() => scrollToSection('process')} className="nav-link">
          Process
        </button>
        <button onClick={() => scrollToSection('compliance')} className="nav-link">
          Compliance
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="nav-link btn-nav"
        >
          Get a Quote
        </button>
      </nav>
    </header>
  )
}
