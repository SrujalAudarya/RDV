import React from 'react';
import stackImg from '../assets/rdv-tableware-stack.jpg';

export default function PillarsSection() {
  const advantages = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="18" x2="12" y2="20"/><line x1="12" y1="4" x2="12" y2="6"/>
        </svg>
      ),
      title: 'Factory Wholesale Pricing',
      desc: 'Direct distributor prices with bulk tier discounts for high-volume restaurants and caterers.'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: 'Fast Central India Logistics',
      desc: 'Strategically located warehouse in Nagpur ensuring prompt, reliable order dispatches.'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: '100% Certified Eco-Standards',
      desc: 'Free of carcinogenic coatings, BPA, or micro-plastics. Safe for all foods.'
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: 'Custom Brand Printing',
      desc: 'Bespoke logo printing on pizza boxes, paper bags, burger boxes, and amenity kits.'
    }
  ];

  return (
    <section className="why-rdv-section" id="why-rdv">
      <div className="container">
        <div className="why-rdv-grid">
          {/* Left Generated Visual Showcase */}
          <div className="why-rdv-image-wrapper">
            <img 
              src={stackImg} 
              alt="Renuka Designers Villa Eco Tableware Stack" 
              className="why-rdv-image"
            />
          </div>

          {/* Right Content */}
          <div className="why-rdv-content">
            <span className="section-eyebrow">The RDV Advantage</span>
            <h2 className="section-title">
              Why Central India Chooses Renuka Designers Villa
            </h2>
            <p className="section-subtitle">
              We empower food businesses to transition away from single-use plastics without sacrificing strength, customer presentation, or commercial margins.
            </p>

            <div className="advantages-list">
              {advantages.map((adv, index) => (
                <div key={index} className="advantage-item">
                  <div className="adv-icon-circle">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="adv-title">{adv.title}</h3>
                    <p className="adv-desc">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#inquiry" className="btn btn-primary">
                Get a Custom Wholesale Quotation
              </a>
              <a href="#showroom" className="btn btn-secondary">
                View Showroom Inventory
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
