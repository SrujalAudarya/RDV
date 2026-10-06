import React from 'react';

export default function CertificationsTicker() {
  const items = [
    'FDA Compliant',
    'SGS certified',
    'Good Design Award',
    'CIPET Certified',
    '100% Home Compostable',
    'Microwave & Oven Safe',
    'Oil & Leak Proof',
    'PFAS Free & Food Safe'
  ];

  return (
    <div className="certifications-ticker-strip" aria-label="Certifications & Compliance">
      <div className="marquee-track">
        {/* First Group */}
        <div className="marquee-group">
          {items.map((item, idx) => (
            <span key={`grp1-${idx}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>

        {/* Duplicate Group for Seamless Loop */}
        <div className="marquee-group" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`grp2-${idx}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
