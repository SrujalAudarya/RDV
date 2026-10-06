import React from 'react';

export default function CoralWaveSection() {
  const features = [
    {
      icon: '🌿',
      title: 'Sugarcane Bagasse',
      desc: '100% renewable agricultural residue. Zero trees cut, zero micro-plastics created.'
    },
    {
      icon: '🌱',
      title: '90-Day Compostable',
      desc: 'Naturally decomposes in standard backyard soil, turning into organic soil fertilizer.'
    },
    {
      icon: '🍲',
      title: 'Microwave & Oven Safe',
      desc: 'Rigid structure with heat tolerance from -20°C freezer up to 140°C hot oven.'
    },
    {
      icon: '🛡️',
      title: 'Oil & Gravy Spill-Proof',
      desc: 'Deep mold cavities and interlocked natural fibers ensure zero soggy leaks with Indian curries.'
    }
  ];

  return (
    <section className="coral-wave-section" id="benefits">
      {/* Top Wave Curve */}
      <svg 
        className="coral-wave-top-svg" 
        viewBox="0 0 1440 60" 
        fill="currentColor" 
        preserveAspectRatio="none"
      >
        <path d="M0,0 C320,50 640,65 960,35 C1200,10 1360,40 1440,55 L1440,60 L0,60 Z"></path>
      </svg>

      <div className="container coral-inner-container">
        <span className="coral-eyebrow">The Sustainable Revolution</span>
        <h2 className="coral-main-title">Say Goodbye to Plastic. Say Hello to RDV.</h2>
        <p className="coral-subtitle">
          Engineered for commercial kitchens, high-volume banquets, and fast-paced takeaway brands that refuse to compromise on strength, presentation, or environmental responsibility.
        </p>

        <div className="coral-features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="coral-feature-card">
              <div className="coral-icon-circle">{feat.icon}</div>
              <h3 className="coral-card-title">{feat.title}</h3>
              <p className="coral-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Curve */}
      <svg 
        className="coral-wave-bottom-svg" 
        viewBox="0 0 1440 60" 
        fill="currentColor" 
        preserveAspectRatio="none"
      >
        <path d="M0,60 C320,10 640,0 960,30 C1200,50 1360,20 1440,5 L1440,0 L0,0 Z"></path>
      </svg>
    </section>
  );
}
