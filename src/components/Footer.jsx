import React from 'react'
import './Footer.css'
import logoImage from '../images/logo.png'
import passoniesLogo from '../images/passonies.png'

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
        <img src={logoImage} alt="Ghazi Arms Industries" className="logo-image" />
        <div className="logo-text">
          <span className="name">Ghazi Arms Industries</span>
          <span className="tagline">Licensed Transport</span>
        </div>
      </div>

      <div className="footer-links">
          <div className="footer-col">
            <h5>Services</h5>
            <button onClick={() => scrollToSection('services')}>Firearms Transport</button>
            <button onClick={() => scrollToSection('services')}>Ammunition Bilti</button>
            <button onClick={() => scrollToSection('services')}>Escorted Delivery</button>
            <button onClick={() => scrollToSection('services')}>Documentation</button>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <button onClick={() => scrollToSection('about')}>About Us</button>
            <button onClick={() => scrollToSection('compliance')}>Compliance</button>
            <button onClick={() => scrollToSection('process')}>Our Process</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Licensing Info</a>
            <a href="#">Report Misuse</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Ghazi Arms Industries Transport. All rights reserved. Peshawar, KPK, Pakistan.</span>
        <div className="footer-credit-group">
          <span className="footer-credit">Developed by <strong>Ubaid Ullah</strong></span>
          <div className="footer-powered">
            <img src={passoniesLogo} alt="Passonies logo" className="footer-powered-logo" />
            <span>Powered by Passonies</span>
          </div>
        </div>
        <p className="disclaimer">
          This company is a licensed arms transporter operating under the laws of Pakistan. 
          All services require valid government-issued permits and documentation. Unauthorized transport of arms is illegal.
        </p>
      </div>
    </footer>
  )
}
