import React, { useState } from 'react';

export default function TopTicker() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside className="promo-top-bar" aria-label="Special Wholesale Offer">
      <div className="promo-content">
        <span>First order? Get 10% OFF with code</span>
        <span className="promo-code-pill">RDVNEW</span>
        <span>&mdash; 15% OFF on bulk orders ₹10,000+</span>
      </div>
      <button 
        type="button" 
        className="promo-close-btn" 
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </aside>
  );
}
