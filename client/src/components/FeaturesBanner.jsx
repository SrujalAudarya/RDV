import React from 'react';

export default function FeaturesBanner() {
  const USPs = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: '100% Agri-Fiber Bagasse',
      desc: 'Made from renewable sugarcane pulp, saving trees & eliminating plastics.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      ),
      title: '90-Day Compostable',
      desc: 'Decomposes naturally in standard soil without toxic micro-plastics.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 12h.01M18 12h.01M10 12h4"/>
        </svg>
      ),
      title: 'Microwave & Oven Safe',
      desc: 'Handles extreme temperatures from -20°C up to 140°C safely.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      ),
      title: 'Oil & Gravy Resistant',
      desc: 'Dense fiber molding keeps plates rigid and prevents any soggy leakage.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Food-Grade & Safe',
      desc: 'Zero PFAS, zero carcinogens, non-toxic, and certified food safe.'
    }
  ];

  return (
    <section className="usps-section" id="benefits">
      <div className="container">
        <div className="usps-grid">
          {USPs.map((usp, index) => (
            <div key={index} className="usp-card">
              <div className="usp-icon-wrap">
                {usp.icon}
              </div>
              <h3 className="usp-title">{usp.title}</h3>
              <p className="usp-desc">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
