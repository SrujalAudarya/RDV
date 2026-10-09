import React, { useState } from 'react';

// Real Client Custom Packaging & Private-Label Tableware Artifacts
import pohewalaImg from '../assets/custom/rdv-custom-pohewala.png';
import mahachaiImg from '../assets/custom/rdv-custom-mahachai.png';
import lecoquetImg from '../assets/custom/rdv-custom-lecoquet.png';
import biryaniImg from '../assets/custom/rdv-custom-biryani-yello.jpg';
import coffeeImg from '../assets/custom/rdv-custom-collective-coffee.jpg';

const CLIENT_PROJECTS = [
  {
    id: 'biryani-yello',
    name: 'Biryani by Yello',
    tagline: 'Royal Biryani Feast Packaging & Branded Tableware',
    category: 'Cloud Kitchen & Biryani Chain',
    location: 'Nagpur',
    badgeText: 'Feast Tableware Suite',
    image: biryaniImg,
    deliverables: [
      'Royal Maroon Corrugated Box with Gold Arch',
      'Sunshine-Yellow Ripple Cups with Social QR Code',
      'Printed Biryani Handi Tub with Airtight Lid'
    ],
    highlight: 'Steam-vented board retains heat & aroma for 45-min transit.',
    moq: '500 Sets',
    leadTime: '7–10 Days',
    compliance: 'Food-Safe Soybean Inks',
    theme: {
      primary: '#881337',
      accent: '#F59E0B',
      cardBorder: '#FED7AA',
      badgeBg: '#FFFBEB',
      badgeText: '#B45309',
      tagBg: '#FEF3C7',
      tagText: '#92400E',
      btnGradient: 'linear-gradient(135deg, #881337 0%, #B91C1C 100%)',
      btnColor: '#FFFFFF',
      whatsappColor: '#881337'
    }
  },
  {
    id: 'pohewala',
    name: 'Pohewala',
    tagline: 'Signature Heavyweight Carry Bags & Dual-Language Bowls',
    category: 'QSR Breakfast Chain',
    location: 'Nagpur & Pune • Est. 2018',
    badgeText: 'Black & Gold OEM Suite',
    image: pohewalaImg,
    deliverables: [
      'Matte Black 120 GSM Bag with Gold Screen Print',
      'Dual-Tone Round Bowls with Hindi/English Logo',
      'Double-Wall Insulated Cups with Snap-Fit Lids'
    ],
    highlight: 'Heavy-duty PE/PLA barrier prevents grease penetration.',
    moq: '500 Sets',
    leadTime: '7–10 Days',
    compliance: 'CPCB & FSSAI Compliant',
    theme: {
      primary: '#0F172A',
      accent: '#EAB308',
      cardBorder: '#CBD5E1',
      badgeBg: '#0F172A',
      badgeText: '#FDE047',
      tagBg: '#F1F5F9',
      tagText: '#1E293B',
      btnGradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      btnColor: '#FDE047',
      whatsappColor: '#0F172A'
    }
  },
  {
    id: 'mahachai',
    name: 'Maha Chai®',
    tagline: 'Spill-Proof Tea Spout Pouches & Heritage Kulhad Cups',
    category: 'Regional Chai Chain',
    location: 'Central India',
    badgeText: 'Spout Pouch Tech',
    image: mahachaiImg,
    deliverables: [
      '500ml & 1L Stand-Up Kettle Tea Spout Pouches',
      'Deep-Teal Printed Paper Cups with Kulhad Emblem',
      'Airtight Twist-Off Tamper-Evident Pour Cap'
    ],
    highlight: 'Holds boiling tea (up to 100°C) with zero heat or odor loss.',
    moq: '1,000 Pouches',
    leadTime: '8–12 Days',
    compliance: '100°C Heat Barrier Foil',
    theme: {
      primary: '#0D5C52',
      accent: '#10B981',
      cardBorder: '#A7F3D0',
      badgeBg: '#ECFDF5',
      badgeText: '#065F46',
      tagBg: '#E6F7F2',
      tagText: '#0D5C52',
      btnGradient: 'linear-gradient(135deg, #0D5C52 0%, #047857 100%)',
      btnColor: '#FFFFFF',
      whatsappColor: '#0D5C52'
    }
  },
  {
    id: 'collective-coffee',
    name: 'Collective Coffee House',
    tagline: 'Artisan Espresso Cups, Cold Tumblers & Eco Bowls',
    category: 'Specialty Roastery & Cafe',
    location: 'Specialty Roastery',
    badgeText: 'Minimalist Cafe Suite',
    image: coffeeImg,
    deliverables: [
      'Matte Black Kraft Shopper with Cotton Handles',
      'Crystal-Clear Cold Tumblers with White Logo',
      'Kraft Salad Bowls with Anti-Fog Dome Lids'
    ],
    highlight: 'Unified eco packaging across cold brews & hot espresso.',
    moq: '500 Sets',
    leadTime: '7–10 Days',
    compliance: '100% Recyclable Materials',
    theme: {
      primary: '#451A03',
      accent: '#D97706',
      cardBorder: '#FED7AA',
      badgeBg: '#FFF7ED',
      badgeText: '#C2410C',
      tagBg: '#FDF4E7',
      tagText: '#78350F',
      btnGradient: 'linear-gradient(135deg, #451A03 0%, #78350F 100%)',
      btnColor: '#FEF3C7',
      whatsappColor: '#451A03'
    }
  },
  {
    id: 'le-coquet',
    name: 'Le Coquet',
    tagline: 'French Boutique Striped Cups & Pastry Takeaway Bags',
    category: 'Artisan Patisserie & Bakery',
    location: 'The Fine Bakery',
    badgeText: 'French Boutique Suite',
    image: lecoquetImg,
    deliverables: [
      'Virgin Kraft Bakery Bags with French Serif Print',
      'Watercolor Powder-Blue Striped Beverage Cups',
      'Food-Safe Greaseproof Pastry Wrapping Liners'
    ],
    highlight: 'Zero odor transfer, preserving authentic pastry aromas.',
    moq: '500 Sets',
    leadTime: '7–10 Days',
    compliance: 'Virgin Odorless Paperboard',
    theme: {
      primary: '#1D4ED8',
      accent: '#38BDF8',
      cardBorder: '#BFDBFE',
      badgeBg: '#EFF6FF',
      badgeText: '#1E40AF',
      tagBg: '#F0F9FF',
      tagText: '#0284C7',
      btnGradient: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
      btnColor: '#FFFFFF',
      whatsappColor: '#1D4ED8'
    }
  }
];

export default function CustomBrandingShowcase({ 
  onSelectProductForQuote, 
  onOpenSampleKit, 
  onNavigateCustomPage 
}) {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleInquireThis = (project) => {
    if (onSelectProductForQuote) {
      onSelectProductForQuote(`Custom Branded Packaging & Private-Label Tableware (${project.name})`);
    } else {
      const el = document.getElementById('inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="custom-branding-standard-section" id="custom-branding" aria-label="Custom-Branded Packaging & Private-Label Tableware">
      <div className="container">
        {/* Section Header with exact requested title */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Institutional OEM Solutions</span>
          <h2 className="section-title">Custom-Branded Packaging &amp; Private-Label Tableware</h2>
          <p className="section-subtitle">
            Turn everyday food deliveries into high-recall brand touchpoints. From custom-printed sugarcane bagasse meal trays, sealable biryani tubs, and tea spout pouches to boutique bakery bags and double-wall cups—manufactured with certified food-grade inks at low starter MOQs.
          </p>
        </div>

        {/* Sleek Balanced Micro Trust Bar */}
        <div className="custom-micro-trust-bar">
          <div className="custom-micro-pill">
            <span className="c-micro-icon">⚡</span>
            <span><strong>500-Unit</strong> Starter MOQ</span>
          </div>
          <span className="c-micro-divider">•</span>
          <div className="custom-micro-pill">
            <span className="c-micro-icon">☕</span>
            <span><strong>100°C</strong> Kettle Spout Pouches</span>
          </div>
          <span className="c-micro-divider">•</span>
          <div className="custom-micro-pill">
            <span className="c-micro-icon">🌿</span>
            <span><strong>Food-Safe</strong> Soybean Inks</span>
          </div>
          <span className="c-micro-divider">•</span>
          <div className="custom-micro-pill">
            <span className="c-micro-icon">📐</span>
            <span><strong>Free 3D</strong> Die-Line Proofs</span>
          </div>
          <span className="c-micro-divider">•</span>
          <div className="custom-micro-pill">
            <span className="c-micro-icon">🚚</span>
            <span><strong>7–10 Day</strong> Dispatch</span>
          </div>
        </div>

        {/* Standard Fixed-Size Product Cards Grid (Matching Website Product Cards) */}
        <div className="custom-branding-cards-grid">
          {CLIENT_PROJECTS.map((project) => (
            <article 
              key={project.id} 
              className="custom-standard-card animated-card"
              style={{
                '--brand-accent': project.theme.accent,
                '--brand-border': project.theme.cardBorder
              }}
            >
              {/* Brand Color Top Gradient Accent Line */}
              <div 
                className="custom-card-color-bar"
                style={{ background: project.theme.btnGradient }}
              />

              {/* Standard Height Image Frame (220px, same as ProductCatalog) */}
              <div 
                className="custom-card-img-box"
                onClick={() => setZoomedImage(project)}
                title={`Click to view high-resolution photo of ${project.name}`}
              >
                <img 
                  src={project.image} 
                  alt={`${project.name} Custom-Branded Packaging & Private-Label Tableware`}
                  className="custom-card-img"
                  loading="lazy"
                />
                
                {/* Distinct Brand Badge */}
                <div className="custom-card-badge-wrap">
                  <span 
                    className="custom-card-badge-pill"
                    style={{
                      backgroundColor: project.theme.badgeBg,
                      color: project.theme.badgeText,
                      borderColor: project.theme.cardBorder
                    }}
                  >
                    {project.badgeText}
                  </span>
                </div>

                <div className="custom-zoom-hint-tag">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  <span>Click to Zoom</span>
                </div>
              </div>

              {/* Card Body with Detailed Deliverables & Specs */}
              <div className="custom-card-body">
                <div className="custom-card-meta-line">
                  <span className="custom-card-category">{project.category}</span>
                  <span className="custom-card-location">📍 {project.location}</span>
                </div>

                <h3 className="custom-card-title">{project.name}</h3>
                <p className="custom-card-tagline">"{project.tagline}"</p>

                {/* Detailed Deliverables List */}
                <div className="custom-card-deliverables">
                  <span className="c-deliv-header">Custom Deliverables:</span>
                  <ul className="custom-deliv-list">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <svg className="c-deliv-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: project.theme.primary }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Highlight Box */}
                <div className="custom-card-highlight-box" style={{ borderColor: project.theme.cardBorder }}>
                  <span className="c-highlight-icon">✨</span>
                  <p className="c-highlight-text">{project.highlight}</p>
                </div>

                {/* Procurement Specs Bar */}
                <div className="custom-card-specs-row">
                  <div className="c-spec-pill">MOQ: <strong>{project.moq}</strong></div>
                  <div className="c-spec-pill">Time: <strong>{project.leadTime}</strong></div>
                  <div className="c-spec-pill c-spec-compliance">{project.compliance}</div>
                </div>

                {/* Actions: Themed Gradient Button + Quick WhatsApp */}
                <div className="custom-card-actions">
                  <button 
                    type="button" 
                    className="custom-inquire-btn"
                    style={{
                      background: project.theme.btnGradient,
                      color: project.theme.btnColor
                    }}
                    onClick={() => handleInquireThis(project)}
                  >
                    <span>Inquire This Setup</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>

                  <a 
                    href={`https://wa.me/918378965139?text=Hello%20RDV,%20I%20am%20interested%20in%20custom%20branding%20like%20${encodeURIComponent(project.name)}.`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="custom-whatsapp-action-btn"
                    title={`WhatsApp direct inquiry for ${project.name}`}
                    aria-label={`WhatsApp inquiry for ${project.name}`}
                    style={{ color: project.theme.primary }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.07c-.24.68-1.41 1.25-1.95 1.32-.49.07-1.12.1-3.27-.79-2.75-1.15-4.52-3.95-4.66-4.13-.14-.19-1.12-1.49-1.12-2.85 0-1.35.71-2.02.96-2.29.25-.28.55-.35.73-.35.19 0 .37.01.53.02.17.01.4.06.61.57.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.19-.15.31-.3.49-.15.17-.32.39-.46.52-.15.15-.31.31-.13.62.17.3 1.02 1.69 2.2 2.74 1.51 1.35 2.78 1.77 3.17 1.96.39.19.62.16.85-.1.24-.26 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.2.37.14 2.37 1.12 2.78 1.32.41.21.68.31.78.48.1.18.1.98-.14 1.66z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="custom-standard-bottom-banner">
          <div className="c-std-banner-left">
            <div className="c-std-banner-icon">📐</div>
            <div className="c-std-banner-text">
              <h4>Have a Custom Box, Pouch, or Tableware Requirement?</h4>
              <p>
                Send us your logo and packaging dimensions. Our technical team prepares free 3D digital die-line mockups and direct wholesale factory pricing within 24 hours.
              </p>
            </div>
          </div>
          <div className="c-std-banner-actions">
            {onOpenSampleKit && (
              <button 
                type="button" 
                className="btn-pill btn-pill-outline-dark"
                onClick={onOpenSampleKit}
              >
                Request Sample Box
              </button>
            )}
            {onNavigateCustomPage && (
              <button 
                type="button" 
                className="btn-pill btn-pill-coral"
                onClick={onNavigateCustomPage}
              >
                Configure Custom OEM Order
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedImage && (
        <div className="custom-lightbox-backdrop" onClick={() => setZoomedImage(null)}>
          <div className="custom-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close-btn"
              onClick={() => setZoomedImage(null)}
              aria-label="Close zoom"
            >
              ✕
            </button>
            <img 
              src={zoomedImage.image} 
              alt={zoomedImage.name} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">
              <strong>{zoomedImage.name}</strong> ({zoomedImage.location}) — {zoomedImage.tagline}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
