import React, { useState } from 'react'
import './Process.css'

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { num: '01', title: 'Submit Request', desc: 'Contact us with your consignment details, quantity, and destination.' },
    { num: '02', title: 'Document Verification', desc: 'We verify all licenses, NOCs, and permits before accepting the consignment.' },
    { num: '03', title: 'Bilti Issued', desc: 'Official consignment note issued with all details and tracking reference.' },
    { num: '04', title: 'Secure Transit', desc: 'GPS-tracked, escorted transport from Peshawar to Karachi with checkpoint clearances.' },
    { num: '05', title: 'Confirmed Delivery', desc: 'Signed delivery receipt, handover documentation and consignment closed.' }
  ]

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">The Bilti Process</h2>
        <p className="section-desc">
          A streamlined, legally compliant process from documentation to delivery — every step tracked and verified.
        </p>

        <div className="process-steps">
          {steps.map((step, idx) => (
            <button
              key={idx}
              type="button"
              className={`step ${activeStep === idx ? 'selected' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setActiveStep(idx)}
            >
              <div className="step-circle">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
