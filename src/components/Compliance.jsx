import React from 'react'
import './Compliance.css'

export default function Compliance() {
  const badges = [
    { icon: '📜', title: 'Arms Ordinance 1965', sub: 'Full compliance with Pakistan Arms Ordinance regulations' },
    { icon: '🏛️', title: 'Interior Ministry NOC', sub: 'Federal transport license from Ministry of Interior' },
    { icon: '🚔', title: 'Police Clearance', sub: 'KPK & Sindh police verified transport operator' },
    { icon: '📊', title: 'FBR Registered', sub: 'NTN registered, tax compliant transport company' }
  ]

  return (
    <section id="compliance" className="compliance-section">
      <div className="compliance-container">
        <div className="compliance-left">
          <div className="section-label">Legal & Compliance</div>
          <h2 className="section-title">Fully<br />Compliant</h2>

          <div className="compliance-badges">
            {badges.map((badge, idx) => (
              <div key={idx} className="badge-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <span className="badge-icon">{badge.icon}</span>
                <div className="badge-title">{badge.title}</div>
                <div className="badge-sub">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="compliance-text">
          <p>
            <strong>Strict Legal Framework:</strong> Ghazi Arms Industries Transport operates exclusively within the legal framework established by the Pakistan Arms Ordinance, 1965, and all subsequent amendments. We do not accept consignments without valid documentation.
          </p>
          <p>
            <strong>Required Documentation:</strong> All clients must provide a valid arms dealer/manufacturer license, transit permit, destination NOC, and consignee's valid license before any transport is arranged.
          </p>
          <p>
            <strong>Zero Tolerance Policy:</strong> We maintain a strict zero-tolerance policy for unlicensed, undeclared, or improperly documented consignments. Any suspicious request is immediately reported to relevant authorities.
          </p>
          <p>
            <strong>Regular Audits:</strong> Our operations are subject to regular audits by federal and provincial authorities. All records are maintained for a minimum of 7 years in compliance with regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
