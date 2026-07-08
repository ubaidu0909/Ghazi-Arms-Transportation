import React from 'react'
import './WhyUs.css'

export default function WhyUs() {
  const whyItems = [
    {
      num: '01',
      title: 'Fully Licensed by Government of Pakistan',
      desc: 'Holding all necessary federal and provincial permits for inter-provincial arms and ammunition transport under Pakistan Arms Ordinance.'
    },
    {
      num: '02',
      title: 'Dedicated Security Personnel',
      desc: 'Trained armed security staff accompany every consignment. GPS-tracked vehicles with real-time monitoring throughout transit.'
    },
    {
      num: '03',
      title: 'Complete Bilti Documentation',
      desc: 'Professionally issued consignment notes, chain-of-custody records, and delivery receipts for every shipment — audit-ready at all times.'
    },
    {
      num: '04',
      title: 'Peshawar–Karachi Route Specialists',
      desc: 'Deep knowledge of checkpoints, regulations, and logistics across the full Peshawar–Karachi corridor with 25+ years of experience.'
    }
  ]

  return (
    <section id="why" className="why-section">
      <div className="why-container">
        <div className="why-visual">
          <div className="why-card-main">
            <div className="label">Established</div>
            <div className="big">Since<br />1998</div>
          </div>
          <div className="why-card-accent">
            <div className="num">PKL<br />001</div>
            <div className="text">Master License<br />No.</div>
          </div>
        </div>

        <div className="why-content">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">Security &<br />Reliability</h2>
          <p className="section-desc">
            Trusted by arms manufacturers in Darra Adam Khel and dealers across Pakistan for over two decades. Ghazi Arms Industries sets the standard for licensed transport excellence.
          </p>

          <div className="why-list">
            {whyItems.map((item, idx) => (
              <div key={idx} className="why-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="why-num">{item.num}</div>
                <div className="why-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
