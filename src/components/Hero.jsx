import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Government Licensed · Fully Compliant
        </div>
        <h1 className="hero-title">
          Trusted Arms
          <span className="highlight">Transport</span>
        </h1>
        <p className="hero-sub">
          Pakistan's most reliable licensed transporter of legal arms and ammunition. 
          Secure, documented, and compliant movement of firearms across the country. Ghazi Arms Industries - Your trusted partner.
        </p>

        <div className="hero-route">
          <div className="city">
            <div className="city-name">Peshawar</div>
            <div className="city-label">Origin · KPK</div>
          </div>
          <div className="route-line"></div>
          <div className="city">
            <div className="city-name">Karachi</div>
            <div className="city-label">Destination · Sindh</div>
          </div>
        </div>

        <div className="hero-actions">
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            Book a Shipment
          </button>
          <button onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
            How It Works
          </button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">25+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat">
          <div className="stat-num">10K+</div>
          <div className="stat-label">Consignments</div>
        </div>
        <div className="stat">
          <div className="stat-num">100%</div>
          <div className="stat-label">Legal Compliance</div>
        </div>
      </div>
    </section>
  )
}
