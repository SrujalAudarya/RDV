import React from 'react';

export default function CertificationsShowcase({ onOpenSampleKit }) {
  const certifications = [
    {
      id: 'cpcb',
      icon: '🏛️',
      title: 'CPCB PWM Rules 2022',
      authority: 'Central Pollution Control Board, Govt. of India',
      badge: 'Plastic-Ban Immune',
      desc: 'Officially certified under Plastic Waste Management Rules. Protects commercial establishments from municipal inspections and single-use plastic penalties.'
    },
    {
      id: 'cipet',
      icon: '🔬',
      title: 'CIPET Laboratory Tested',
      authority: 'Central Institute of Petrochemicals Eng. & Tech.',
      badge: '100% Biodegradable',
      desc: 'Validated for 100% natural biodegradability and soil disintegration in 90-180 days with zero microplastic residue or toxic heavy metal leaching.'
    },
    {
      id: 'fda',
      icon: '🥗',
      title: 'US FDA 21 CFR Compliant',
      authority: 'Food & Drug Administration Standards',
      badge: 'Direct Food Contact Safe',
      desc: 'Conforms to 21 CFR 176.170 standards for direct aqueous, acidic, and fatty hot food contact up to 140°C without chemical migration.'
    },
    {
      id: 'iso',
      icon: '🛡️',
      title: 'ISO 9001:2015 Certified',
      authority: 'International Quality Management Standard',
      badge: 'Cleanroom Hygiene',
      desc: 'Produced under automated, sanitized, high-temperature steam compression to guarantee medical-grade cleanliness for institutional dining.'
    },
    {
      id: 'pfas',
      icon: '🌿',
      title: 'PFAS & Fluorine Free',
      authority: 'Toxicological Safety Verified',
      badge: 'Zero Carcinogens',
      desc: 'Engineered entirely from natural sugarcane agri-fibers. Completely free from dangerous fluorinated coatings, BPA, phthalates, or chlorine bleaches.'
    },
    {
      id: 'thermal',
      icon: '🔥',
      title: '-20°C to +140°C Tested',
      authority: 'Extreme Thermal Stress Testing',
      badge: 'Microwave & Oven Safe',
      desc: 'Rigid structural matrix does not warp, melt, or leach when microwaved with boiling gravies or kept in deep commercial freezer storage.'
    }
  ];

  return (
    <section className="certifications-showcase-section" id="certifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Institutional Peace of Mind</span>
          <h2 className="section-title">Official Certifications & Food Safety Compliance</h2>
          <p className="section-subtitle">
            Operating a commercial kitchen or hotel requires strict regulatory proof. All RDV tableware shipments come backed by government laboratory certifications and formal GST compliance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-cards-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card-top">
                <span className="cert-icon-box">{cert.icon}</span>
                <span className="cert-badge-pill">{cert.badge}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-authority">{cert.authority}</p>
              <p className="cert-desc">{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit & Legal Guarantee Card */}
        <div className="cert-legal-banner">
          <div className="legal-banner-left">
            <div className="legal-shield-icon">📜</div>
            <div>
              <h3 className="legal-title">Ready for Food Safety & Municipal Audits</h3>
              <p className="legal-desc">
                We supply complete test certificates, GST invoices (GSTIN: <strong>27AVPPT8792E1ZN</strong>), and origin declarations with every wholesale shipment. Never risk fines or venue shutdowns again.
              </p>
            </div>
          </div>

          <div className="legal-banner-actions">
            {onOpenSampleKit && (
              <button 
                type="button" 
                className="btn-pill btn-pill-coral"
                onClick={onOpenSampleKit}
              >
                <span>Request Sample Box & Cert Pack</span>
              </button>
            )}
            <a 
              href="tel:8378965139" 
              className="btn-pill btn-pill-outline-white"
            >
              Consult Compliance Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
