import React from 'react';
import rdvEmblem from '../assets/rdv-emblem-clean.png';
import restaurantHero from '../assets/rdv-restaurant-hero.jpg';

export default function AboutPage({ onOpenSampleKit, onNavigateInquiry }) {
  const pillars = [
    {
      icon: '🌿',
      title: '100% Bio-Circular Commitment',
      desc: 'We strictly refuse petroleum plastics and toxic styrofoam. Every tableware unit we produce upcycles natural sugarcane agricultural residue and safely returns to the soil.'
    },
    {
      icon: '🏭',
      title: 'Central India Mega Distribution Hub',
      desc: 'Based out of Nagpur—the logistical heart of India—we maintain deep ready inventory to fulfill same-day and next-day dispatches for hotels, QSRs, and caterers across Maharashtra, MP, and Chhattisgarh.'
    },
    {
      icon: '🛡️',
      title: 'Regulatory & CPCB Compliance',
      desc: 'We insulate our commercial clients from single-use plastic penalty enforcement with certified biodegradable documentation, CIPET migration test certificates, and full GST input invoicing.'
    },
    {
      icon: '🤝',
      title: 'Factory-Direct Wholesaling',
      desc: 'By eliminating predatory middlemen markups, we offer competitive bulk peti rates that allow restaurant owners to switch to sustainable packaging without inflating operating costs.'
    }
  ];

  const milestones = [
    { year: 'Vision', title: 'The Green Transition', desc: 'Identified the urgent crisis of single-use plastic pollution in Indian catering and committed to establishing a premier bagasse supply chain in Central India.' },
    { year: 'Infrastructure', title: 'Nagpur Experience Center', desc: 'Inaugurated our central showroom in Dev Nagar, Khamla, displaying over 200+ specialized commercial tableware and guest amenity samples.' },
    { year: 'Scale', title: '20+ Product Series', desc: 'Expanded into 7 specialized institutional divisions: sugarcane bagasse thalis, leak-proof delivery containers, clay kulhads, and hotel amenities.' },
    { year: 'Today', title: 'Trusted Partner to 500+ Hoteliers', desc: 'Proudly supplying top banquet halls, cloud kitchens, hospital canteens, and luxury resort properties across the nation.' }
  ];

  return (
    <div className="page-container about-page-view">
      {/* Page Hero Banner */}
      <section className="page-hero-banner about-hero-banner">
        <div className="page-hero-bg-blur" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="page-hero-content">
            <span className="page-eyebrow">Our Mission & Heritage</span>
            <h1 className="page-hero-title">Redefining Sustainable Food Service Across Central India</h1>
            <p className="page-hero-subtitle">
              Renuka Designers Villa (Smita Disposable & Plastics) is Central India's premier B2B manufacturer and distributor of 100% backyard-compostable tableware, commercial packaging, and luxury guest amenities.
            </p>

            <div className="about-hero-credentials">
              <span>🏛️ GSTIN: 27AVPPT8792E1ZN</span>
              <span>📍 Dev Nagar, Khamla, Nagpur</span>
              <span>⭐ Certified CPCB Plastic-Ban Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-eyebrow">The RDV Story</span>
              <h2 className="section-title">Built On The Belief That Good Food Deserves Clean Packaging</h2>
              <p className="story-paragraph">
                For decades, Indian hospitality and street food culture relied heavily on single-use plastics, toxic thermocol thalis, and non-recyclable coated papers. These materials leach carcinogenic microplastics into hot curries, clog urban drainage, and remain in landfills for a millennium.
              </p>
              <p className="story-paragraph">
                <strong>Renuka Designers Villa</strong> was established to provide restaurant owners, cloud kitchens, and banquet caterers with an uncompromising, superior alternative: <strong>100% Sugarcane Bagasse Tableware</strong> that is sturdier than plastic, withstands boiling gravies without leaking, is microwave safe up to 140°C, and decomposes naturally into organic soil humus within 90 to 180 days.
              </p>

              <div className="story-highlights-box">
                <div className="highlight-item">
                  <strong>500+</strong>
                  <span>Active Institutional Clients</span>
                </div>
                <div className="highlight-item">
                  <strong>10M+</strong>
                  <span>Plastic Pieces Diverted From Landfills</span>
                </div>
                <div className="highlight-item">
                  <strong>100%</strong>
                  <span>Backyard Compostable Range</span>
                </div>
              </div>
            </div>

            <div className="about-story-media">
              <div className="story-img-card">
                <img src={restaurantHero} alt="RDV Sustainable Dining Tableware" className="story-img" />
                <div className="story-badge-overlay">
                  <img src={rdvEmblem} alt="RDV Emblem" className="story-emblem-icon" />
                  <div>
                    <h4>Renuka Designers Villa</h4>
                    <p>Smita Disposable & Plastics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operational Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Why Hoteliers Rely On Us</span>
            <h2 className="section-title">Our Institutional Commitments</h2>
            <p className="section-subtitle">
              We understand that running a restaurant or banquet hall requires dependable supply, reliable quality, and honest wholesale pricing.
            </p>
          </div>

          <div className="about-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="about-pillar-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Evolution</span>
            <h2 className="section-title">Milestones on Our Green Journey</h2>
          </div>

          <div className="timeline-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-card">
                <span className="timeline-year-tag">{m.year}</span>
                <h3 className="timeline-title">{m.title}</h3>
                <p className="timeline-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nagpur Showroom & Experience Center */}
      <section className="about-showroom-cta-section">
        <div className="container">
          <div className="showroom-cta-card">
            <div className="showroom-cta-content">
              <span className="section-eyebrow">Visit Us in Nagpur</span>
              <h2 className="showroom-cta-title">Experience 200+ Samples in Person</h2>
              <p className="showroom-cta-desc">
                Visit our central display showroom at Dev Nagar, Khamla, Nagpur. Inspect compartment rigidity, test hot oil resistance, and take home sample packs customized for your catering menu.
              </p>

              <div className="showroom-contact-chips">
                <a href="tel:8378965139" className="showroom-chip">
                  📞 +91 8378965139
                </a>
                <a href="tel:9860544366" className="showroom-chip">
                  📞 +91 9860544366
                </a>
                <a 
                  href="https://maps.google.com/?q=Dev+Nagar+Khamla+Nagpur" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="showroom-chip"
                >
                  📍 Open in Google Maps
                </a>
              </div>

              <div className="showroom-action-buttons">
                {onOpenSampleKit && (
                  <button 
                    type="button" 
                    className="btn-pill btn-pill-coral"
                    onClick={onOpenSampleKit}
                  >
                    Request Physical Sample Box
                  </button>
                )}
                {onNavigateInquiry && (
                  <button 
                    type="button" 
                    className="btn-pill btn-pill-outline-white"
                    onClick={onNavigateInquiry}
                  >
                    Book Showroom Appointment
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
