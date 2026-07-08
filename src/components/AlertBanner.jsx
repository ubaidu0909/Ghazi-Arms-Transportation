import React from 'react'
import './AlertBanner.css'

export default function AlertBanner() {
  return (
    <div className="alert-banner">
      <span className="alert-icon">⚠️</span>
      <p>
        We only transport <strong>legally licensed firearms and ammunition</strong>. All consignments require valid government permits, NOCs, and documentation. Unauthorized transport is strictly refused.
      </p>
    </div>
  )
}
