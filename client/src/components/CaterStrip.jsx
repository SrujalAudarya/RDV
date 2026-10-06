import React from 'react';

export default function CaterStrip() {
  const sectors = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>
        </svg>
      ),
      title: 'Restaurants & QSRs',
      desc: 'Rigid bagasse thalis, bowls, ripple cups, and takeaway meal containers designed for heavy Indian gravies.',
      products: 'Thalis, Gravy Bowls, Cutlery'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      title: 'Banquets & Caterers',
      desc: 'High-volume buffet plates, 5-CP & 8-CP compartment thalis, cornstarch cutlery, and napkin dispensers.',
      products: 'Buffet Plates, Compartment Platters'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Hotels & Resorts',
      desc: 'Eco guest amenities, sanitized dental/shaving kits, luxury wooden hangers, and guest room supplies.',
      products: 'Amenity Kits, Wooden Hangers'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Cloud Kitchens',
      desc: 'Airtight leak-proof round bowls, rectangular meal boxes, Asian wok boxes, and corrugated takeaway packaging.',
      products: 'Sealable Bowls, Wok Boxes'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Cafeterias & Hospitals',
      desc: 'Hygienic 100% compostable disposable trays, sanitization supplies, mops, and biohazard garbage rolls.',
      products: 'Sectional Trays, Janitorial Rolls'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="18" x2="12" y2="20"/><line x1="12" y1="4" x2="12" y2="6"/>
        </svg>
      ),
      title: 'Bakeries & Sweet Shops',
      desc: 'Window cake boxes, rigid golden cake boards, greaseproof muffin liners, and custom retail carry bags.',
      products: 'Cake Boxes, Crystal Jars'
    }
  ];

  return (
    <section className="sectors-section" id="sectors">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Institutional Client Base</span>
          <h2 className="section-title">Industries We Proudly Serve</h2>
          <p className="section-subtitle">
            Supplying Central India’s leading food service brands, hospitality chains, and event planners with reliable, sustainable packaging solutions.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div key={index} className="sector-card">
              <div className="sector-icon-box">
                {sector.icon}
              </div>
              <h3 className="sector-title">{sector.title}</h3>
              <p className="sector-desc">{sector.desc}</p>
              <div className="sector-products-tag">
                <span>Featured:</span>
                <strong>{sector.products}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
