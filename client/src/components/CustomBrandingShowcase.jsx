import React, { useState, useMemo } from 'react';

// Real Client Custom Packaging Artifacts
import pohewalaImg from '../assets/custom/rdv-custom-pohewala.png';
import mahachaiImg from '../assets/custom/rdv-custom-mahachai.png';
import lecoquetImg from '../assets/custom/rdv-custom-lecoquet.png';
import biryaniImg from '../assets/custom/rdv-custom-biryani-yello.jpg';
import coffeeImg from '../assets/custom/rdv-custom-collective-coffee.jpg';

const CLIENT_PROJECTS = [
  {
    id: 'biryani-yello',
    category: 'cloud-kitchen',
    categoryLabel: 'Cloud Kitchen & Biryani',
    name: 'Biryani by Yello',
    location: 'From The Kitchens of Nagpur',
    tagline: 'Mughal Luxury Biryani Feasts & Direct QR Engagement',
    image: biryaniImg,
    badgeText: 'Cloud Kitchen Packaging',
    items: [
      'Royal Maroon Corrugated Biryani Box with Mughal gold arch motif',
      'Sunshine-Yellow Ripple Beverage Cups with social media QR code & illustrations',
      'Custom Printed Cutlery Pouch with birch spoon & napkins',
      'Food-Grade Printed Biryani Handi Tub with tight seal'
    ],
    highlights: [
      'Steam-vented corrugated board keeps biryani steaming hot & aroma intact',
      'QR code printed on cups drives direct repeat orders and Instagram followers',
      'Zero oil or gravy leakage during 45-minute bike delivery'
    ],
    moq: '500 Sets',
    turnaround: '7–10 Days'
  },
  {
    id: 'pohewala',
    category: 'qsr',
    categoryLabel: 'Quick Service Chain',
    name: 'Pohewala',
    location: 'Established 2018',
    tagline: 'Signature Black Kraft Bags, Dual-Language Bowls & Cups',
    image: pohewalaImg,
    badgeText: 'Signature Black & Gold',
    items: [
      'Matte Black Heavy-Duty Kraft Carry Bag with gold screen-print branding',
      'Dual-Tone Round Meal Container with Hindi & English logo ("पोहेवाला")',
      'Custom Printed Snap Lid ("www.pohewala.com")',
      'Double-Wall Insulated Hot Beverage Paper Cup'
    ],
    highlights: [
      'Heavyweight 120 GSM kraft bag with reinforced flat handles for safe transit',
      'Food-grade leakproof inner PE/PLA barrier for hot morning breakfast gravies',
      'High-contrast gold & white flexographic ink certified odorless'
    ],
    moq: '500 Sets',
    turnaround: '7–10 Days'
  },
  {
    id: 'mahachai',
    category: 'tea-chains',
    categoryLabel: 'Chai Chains & Cafes',
    name: 'Maha Chai®',
    location: 'Regional Chai Chain',
    tagline: 'Stand-Up Tea Spout Delivery Pouches & Teal Paper Cups',
    image: mahachaiImg,
    badgeText: 'Leakproof Spout Delivery',
    items: [
      '500ml & 1000ml Stand-Up Kraft Kettle Tea Delivery Pouch with spout & handle',
      'Matching Deep-Teal Printed Paper Tea Cups with bird & kulhad emblem',
      'Slogan Print: "One cup, many stories"',
      'Airtight twist-off tamper-evident pour cap'
    ],
    highlights: [
      'Eliminates messy plastic bags & flasks; pour directly at customer desk',
      'Multi-layer barrier foil holds piping hot tea (up to 100°C) for 45+ minutes',
      'Reinforced die-cut carry handle for effortless delivery bike transit'
    ],
    moq: '1,000 Pouches',
    turnaround: '8–12 Days'
  },
  {
    id: 'collective-coffee',
    category: 'cafes',
    categoryLabel: 'Specialty Coffee & Roastery',
    name: 'Collective Coffee House',
    location: 'Specialty Roastery & Cafe',
    tagline: 'Black Kraft Bags, Crystal Cold Tumblers & Eco Bowls',
    image: coffeeImg,
    badgeText: 'Minimalist Cafe Aesthetic',
    items: [
      'Matte Black Kraft Shopper Bag with premium cotton rope handles',
      'Crystal-Clear Iced Coffee Tumbler with minimalist white infinity emblem',
      'Kraft Salad & Grain Bowls with anti-fog tight-fit clear dome lids',
      'Matte Black Double-Wall Hot Espresso & Flat White Paper Cups',
      'Individually Wrapped Branded Paper Straws'
    ],
    highlights: [
      'Unified minimalist cafe aesthetic across hot, cold, and dine-in lines',
      'Anti-fog recyclable PET lids maintain pristine salad & dessert visibility',
      'Thick double-wall cup barrier removes the need for extra cardboard sleeves'
    ],
    moq: '500 Sets',
    turnaround: '7–10 Days'
  },
  {
    id: 'le-coquet',
    category: 'bakeries',
    categoryLabel: 'Artisan Patisserie',
    name: 'Le Coquet',
    location: 'The Fine Bakery',
    tagline: 'Pastel Striped Paper Cups & Boutique Pastry Bags',
    image: lecoquetImg,
    badgeText: 'Luxury Patisserie Suite',
    items: [
      'Crisp White Virgin Kraft Bakery Takeaway Bag with French serif branding',
      'Watercolor Powder-Blue Striped Beverage Cups ("More Amore Por Favor")',
      'Food-safe greaseproof pastry wrapping liners'
    ],
    highlights: [
      'European luxury aesthetic tailored for high-end artisan bakeries',
      'Ultra-pure virgin food-grade paperboard with zero odor or taste leaching',
      'Precision stripe alignment on curved cup conic die-lines'
    ],
    moq: '500 Sets',
    turnaround: '7–10 Days'
  }
];

export default function CustomBrandingShowcase({ 
  onSelectProductForQuote, 
  onOpenSampleKit, 
  onNavigateCustomPage 
}) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [zoomedImage, setZoomedImage] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategoryFilter === 'all') return CLIENT_PROJECTS;
    return CLIENT_PROJECTS.filter(p => p.category === activeCategoryFilter);
  }, [activeCategoryFilter]);

  const handleInquireThis = (project) => {
    if (onSelectProductForQuote) {
      onSelectProductForQuote(`Custom Branded Packaging Setup (Inspired by ${project.name})`);
    } else {
      const el = document.getElementById('inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="custom-branding-light-section" id="custom-branding" aria-label="Custom Branded Packaging Showcase">
      <div className="container">
        {/* Section Header matching standard website design system */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Trending Private-Label OEM</span>
          <h2 className="section-title">Custom-Branded Packaging Solutions</h2>
          <p className="section-subtitle">
            Turn everyday food deliveries into a lasting brand identity. From boiling-hot kettle tea spout pouches and royal biryani feast boxes to custom-printed kraft carry bags and double-wall cups—manufactured with certified food-grade inks and low starter MOQs.
          </p>
        </div>

        {/* 4 Core B2B Advantages Bar (Clean light theme matching website) */}
        <div className="custom-light-advantages-row">
          <div className="custom-light-adv-card">
            <div className="c-adv-icon">⚡</div>
            <div className="c-adv-text">
              <strong>Low 500-Unit Starter MOQ</strong>
              <span>Launch your brand without heavy upfront storage</span>
            </div>
          </div>

          <div className="custom-light-adv-card">
            <div className="c-adv-icon">☕</div>
            <div className="c-adv-text">
              <strong>Kettle Spout Pouches</strong>
              <span>100% spill-proof 45-min hot tea transit (up to 100°C)</span>
            </div>
          </div>

          <div className="custom-light-adv-card">
            <div className="c-adv-icon">🌿</div>
            <div className="c-adv-text">
              <strong>Food-Safe Soybean Inks</strong>
              <span>Certified non-toxic, odorless, safe for direct contact</span>
            </div>
          </div>

          <div className="custom-light-adv-card">
            <div className="c-adv-icon">📐</div>
            <div className="c-adv-text">
              <strong>Free 3D Digital Proofing</strong>
              <span>Visualize on 3D die-lines before printing plate casting</span>
            </div>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="custom-filter-chips-container">
          <button
            type="button"
            className={`filter-chip-btn ${activeCategoryFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategoryFilter('all')}
          >
            All Projects ({CLIENT_PROJECTS.length})
          </button>
          <button
            type="button"
            className={`filter-chip-btn ${activeCategoryFilter === 'cloud-kitchen' ? 'active' : ''}`}
            onClick={() => setActiveCategoryFilter('cloud-kitchen')}
          >
            Cloud Kitchens & Biryani
          </button>
          <button
            type="button"
            className={`filter-chip-btn ${activeCategoryFilter === 'tea-chains' ? 'active' : ''}`}
            onClick={() => setActiveCategoryFilter('tea-chains')}
          >
            Chai Chains & Spout Pouches
          </button>
          <button
            type="button"
            className={`filter-chip-btn ${activeCategoryFilter === 'cafes' ? 'active' : ''}`}
            onClick={() => setActiveCategoryFilter('cafes')}
          >
            Cafes & Cold Brew
          </button>
          <button
            type="button"
            className={`filter-chip-btn ${activeCategoryFilter === 'bakeries' ? 'active' : ''}`}
            onClick={() => setActiveCategoryFilter('bakeries')}
          >
            Bakeries & Patisseries
          </button>
        </div>

        {/* Clean Light Projects Grid matching product cards */}
        <div className="custom-client-cards-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="custom-client-card">
              {/* Image Frame */}
              <div 
                className="custom-client-img-frame"
                onClick={() => setZoomedImage(project)}
                title="Click to view high-resolution photo"
              >
                <img 
                  src={project.image} 
                  alt={`${project.name} Custom Branded Packaging manufactured by RDV`}
                  className="custom-client-img"
                  loading="lazy"
                />
                <span className="custom-client-badge-pill">{project.badgeText}</span>
                <span className="custom-zoom-action-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  <span>Click to Zoom</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="custom-client-body">
                <div className="custom-client-meta-line">
                  <span className="custom-meta-category">{project.categoryLabel}</span>
                  <span className="custom-meta-location">📍 {project.location}</span>
                </div>

                <h3 className="custom-client-title">{project.name}</h3>
                <p className="custom-client-tagline">"{project.tagline}"</p>

                {/* Deliverables List */}
                <div className="custom-deliverables-box">
                  <strong>Custom Deliverables:</strong>
                  <ul>
                    {project.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="check-bullet">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spec Tag Pills */}
                <div className="custom-specs-bar">
                  <span className="custom-spec-badge">MOQ: <strong>{project.moq}</strong></span>
                  <span className="custom-spec-badge">Lead Time: <strong>{project.turnaround}</strong></span>
                  <span className="custom-spec-badge">Food-Grade Inks</span>
                </div>

                {/* Actions Row */}
                <div className="custom-card-actions-row">
                  <button 
                    type="button" 
                    className="btn-pill btn-pill-coral btn-sm"
                    onClick={() => handleInquireThis(project)}
                  >
                    <span>Inquire This Setup</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>

                  <a 
                    href={`https://wa.me/918378965139?text=Hello%20RDV,%20I%20am%20interested%20in%20custom%20branding%20like%20${encodeURIComponent(project.name)}.`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-pill btn-pill-outline-dark btn-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner matching website's elegant callouts */}
        <div className="custom-light-bottom-banner">
          <div className="c-banner-text">
            <h4>Have a Custom Box, Pouch, or Bag Requirement?</h4>
            <p>
              Send us your logo and packaging dimensions. Our technical team prepares free 3D digital die-line mockups and direct wholesale factory pricing within 24 hours.
            </p>
          </div>
          <div className="c-banner-actions">
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
