import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="section-label">Our Story</div>
          <h2 className="section-title">About<br />Ghazi Arms Industries</h2>
          
          <p className="section-desc">
            Founded by Sami Ullah, Ghazi Arms Industries has been Pakistan's trusted name in licensed arms and ammunition transport for over two decades. 
            We combine decades of industry expertise with cutting-edge logistics technology.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <div className="detail-icon">🏢</div>
              <div>
                <h4>Founded by Sami Ullah</h4>
                <p>With extensive experience in the regulated transport industry, Sami Ullah established Ghazi Arms Industries to set new standards for reliability, security, and compliance.</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🏆</div>
              <div>
                <h4>Industry Leaders</h4>
                <p>Recognized for our commitment to legal compliance, security protocols, and customer satisfaction across Pakistan's arms manufacturing and distribution sector.</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🚀</div>
              <div>
                <h4>Modern Infrastructure</h4>
                <p>GPS-tracked vehicles, trained security personnel, real-time monitoring systems, and comprehensive documentation ensure every shipment is secured and accounted for.</p>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🤝</div>
              <div>
                <h4>Client Focus</h4>
                <p>We work with manufacturers in Darra Adam Khel, licensed dealers, government bodies, and security contractors across all provinces.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <div className="stat-value">25+</div>
            <div className="stat-title">Years of Excellence</div>
          </div>
          <div className="about-stat">
            <div className="stat-value">10K+</div>
            <div className="stat-title">Successful Shipments</div>
          </div>
          <div className="about-stat">
            <div className="stat-value">4</div>
            <div className="stat-title">Provinces Covered</div>
          </div>
          <div className="about-stat">
            <div className="stat-value">100%</div>
            <div className="stat-title">Compliance Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
