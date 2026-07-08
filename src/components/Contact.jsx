import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('loading')
    setTimeout(() => {
      setFormStatus('success')
      e.target.reset()
      setTimeout(() => setFormStatus(''), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Book a<br />Consignment</h2>
        <p className="section-desc">
          For shipment inquiries with Ghazi Arms Industries Transport, reach out to our team in Peshawar or Karachi today. Contact us at +92 333-9216937.
        </p>

        <div className="contact-inner">
          <div className="contact-info">
            <div className="contact-item" style={{ animationDelay: '0s' }}>
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Peshawar Office</div>
                <div className="contact-value">
                  Smal Industrial Estate (S.I.E)<br />
                  Kohat Road, Peshawar<br />
                  Khyber Pakhtunkhwa
                </div>
              </div>
            </div>

            <div className="contact-item" style={{ animationDelay: '0.1s' }}>
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Karachi Office</div>
                <div className="contact-value">
                  Just Karachi, Sindh<br />
                  Port Area
                </div>
              </div>
            </div>

            <div className="contact-item" style={{ animationDelay: '0.2s' }}>
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone / WhatsApp</div>
                <div className="contact-value">
                  +92 333-9216937<br />
                  Available 24/7 for urgent shipments
                </div>
              </div>
            </div>

            <div className="contact-item" style={{ animationDelay: '0.3s' }}>
              <div className="contact-icon">✉️</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  info@ghazitransport.pk<br />
                  transport@ghazitransport.pk
                </div>
              </div>
            </div>

            <div className="contact-item" style={{ animationDelay: '0.4s' }}>
              <div className="contact-icon">🕐</div>
              <div>
                <div className="contact-label">Office Hours</div>
                <div className="contact-value">
                  Monday – Saturday<br />
                  9:00 AM – 6:00 PM PKT
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Company / Business</label>
                <input type="text" placeholder="Your business name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+92 300 0000000" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Type of Consignment</label>
              <select required>
                <option value="">Select consignment type...</option>
                <option>Licensed Firearms (Rifles/Pistols)</option>
                <option>Ammunition (Boxed/Bulk)</option>
                <option>Firearm Parts & Accessories</option>
                <option>Mixed Consignment</option>
                <option>Other (Specify in message)</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Estimated Weight (KG)</label>
                <input type="number" placeholder="e.g. 150" />
              </div>
              <div className="form-group">
                <label>Preferred Dispatch Date</label>
                <input type="date" />
              </div>
            </div>

            <div className="form-group">
              <label>Message / Additional Details</label>
              <textarea placeholder="Describe your consignment, license details, special requirements..." required></textarea>
            </div>

            <button
              type="submit"
              className={`btn-submit ${formStatus}`}
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' && '⏳ Submitting...'}
              {formStatus === 'success' && '✓ Inquiry Submitted — We will contact you shortly'}
              {!formStatus && 'Submit Inquiry →'}
            </button>

            <p className="form-disclaimer">
              ⚠️ All inquiries require valid license documentation before any transport is arranged.
            </p>
          </form>
        </div>
      </div>
      <a
        href="https://wa.me/923339216937"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <span>💬</span>
      </a>
    </section>
  )
}
