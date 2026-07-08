import React from 'react'
import './Services.css'
import firearmsImage from '../images/thomas-tucker-.png'
import ammoImage from '../images/ammo.png'

export default function Services() {
  const services = [
    {
      icon: '🔫',
      name: 'Firearms Transport',
      image: firearmsImage,
      desc: 'Safe and secure transportation of licensed pistols, rifles, shotguns, and other legal firearms with full chain-of-custody documentation.',
      tags: ['Rifles', 'Pistols', 'Shotguns']
    },
    {
      icon: '💣',
      name: 'Ammunition Bilti',
      image: ammoImage,
      desc: 'Specialized handling and transport of licensed ammunition in compliance with explosive materials regulations and safety protocols.',
      tags: ['Bulk', 'Packaged', 'Custom']
    },
    {
      icon: '🛡️',
      name: 'Armory-to-Armory',
      desc: 'Direct licensed armory transfers for registered dealers, government bodies, and security contractors with sealed escort options.',
      tags: ['Dealer', 'Government', 'Security']
    },
    {
      icon: '📋',
      name: 'Documentation Support',
      desc: 'Full assistance with NOC applications, transit permits, customs clearance, and all regulatory paperwork required for inter-provincial transport.',
      tags: ['NOC', 'Permits', 'Customs']
    },
    {
      icon: '📦',
      name: 'Parts & Accessories',
      desc: 'Transport of legal firearm parts, accessories, and maintenance equipment for registered manufacturers and dealers across Pakistan.',
      tags: ['Barrels', 'Components', 'Parts']
    },
    {
      icon: '🚐',
      name: 'Escorted Delivery',
      desc: 'Armed escort and specialized vehicle service for high-value or sensitive consignments requiring additional security during transit.',
      tags: ['High-Value', 'VIP', 'Priority']
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="section-label">What We Do</div>
      <h2 className="section-title">Our Transport<br />Services</h2>
      <p className="section-desc">
        Specialized logistics solutions for the licensed arms trade, designed for manufacturers, dealers, and government entities.
      </p>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card" style={{ animationDelay: `${idx * 0.1}s` }}>
            {service.image ? (
              <img src={service.image} alt={service.name} className="service-icon service-image-icon" />
            ) : (
              <span className="service-icon">{service.icon}</span>
            )}
            <h3 className="service-name">{service.name}</h3>
            <p className="service-desc">{service.desc}</p>
            <div className="service-tags">
              {service.tags.map((tag, i) => (
                <span key={i} className="service-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
