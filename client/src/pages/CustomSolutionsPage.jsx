import React, { useState } from 'react';

// Real Client Custom Packaging Artifacts
import pohewalaImg from '../assets/custom/rdv-custom-pohewala.png';
import mahachaiImg from '../assets/custom/rdv-custom-mahachai.png';
import lecoquetImg from '../assets/custom/rdv-custom-lecoquet.png';
import biryaniImg from '../assets/custom/rdv-custom-biryani-yello.jpg';
import coffeeImg from '../assets/custom/rdv-custom-collective-coffee.jpg';

const CLIENT_CASE_STUDIES = [
  {
    id: 'biryani-yello',
    name: 'Biryani by Yello',
    tagline: 'Mughal Luxury Biryani Feasts & Direct QR Engagement',
    clientLocation: 'From The Kitchens of Nagpur',
    industry: 'Cloud Kitchen & Biryani Specialist',
    image: biryaniImg,
    badgeColor: '#D97706',
    itemsProduced: [
      'Royal Maroon Corrugated Biryani Delivery Box with Mughal gold arch pattern',
      'Sunshine Yellow Ripple Coffee/Chai Cups with social QR code & illustrations',
      'Custom Printed Cutlery Pouch with wooden spoon and virgin tissue',
      'Food-Grade Printed Biryani Handi Tub with tamper-evident seal'
    ],
    technicalHighlights: [
      'Steam-vented micro-flute corrugated board preserves biryani warmth without sogginess',
      'Integrated Instagram & online menu QR code on hot cups drives direct repeat orders',
      'Certified zero-grease transfer board handles rich ghee & gravy safely'
    ],
    moq: '500 Sets',
    leadTime: '7–10 Business Days',
    formProductType: 'printed-paper'
  },
  {
    id: 'pohewala',
    name: 'Pohewala',
    tagline: 'Signature Black & Gold Identity Across Bags, Bowls & Cups',
    clientLocation: 'Established 2018',
    industry: 'Quick Service Restaurant Chain',
    image: pohewalaImg,
    badgeColor: '#F59E0B',
    itemsProduced: [
      'Matte Black Heavy Kraft Carry Bag with gold screen-print branding',
      'Dual-Tone Round Meal Container with Hindi & English branding ("पोहेवाला")',
      'Custom Printed Leakproof Snap Lid ("www.pohewala.com")',
      'Double-Wall Insulated Hot Beverage Paper Cup'
    ],
    technicalHighlights: [
      '120 GSM tear-resistant virgin kraft paper bag with reinforced flat handles',
      'Airtight snap-on lid with custom flexo printed URL and logo for zero spills',
      'Double-wall insulated paper cup eliminates need for external sleeve'
    ],
    moq: '500 Sets',
    leadTime: '7–10 Business Days',
    formProductType: 'tamper-containers'
  },
  {
    id: 'mahachai',
    name: 'Maha Chai®',
    tagline: 'Piping Hot Spout Pouches & Signature Teal Chai Cups',
    clientLocation: 'Regional Chai Chain',
    industry: 'Chai Cafe & Delivery Hub',
    image: mahachaiImg,
    badgeColor: '#0D9488',
    itemsProduced: [
      '500ml & 1000ml Stand-Up Kraft Kettle Tea Delivery Pouch with spout & carry handle',
      'Matching Deep-Teal Printed Paper Tea Cups with bird & kulhad emblem',
      'Slogan Print: "One cup, many stories"',
      'Airtight twist-off tamper-evident pour nozzle'
    ],
    technicalHighlights: [
      'Multi-layer barrier foil withstands boiling tea (up to 100°C) with zero leaching',
      'Retains drinking temperature for 45+ minutes on motorcycle delivery routes',
      'Eliminates messy plastic bags & flasks; clean pour directly at the client desk'
    ],
    moq: '1,000 Pouches',
    leadTime: '8–12 Business Days',
    formProductType: 'printed-paper'
  },
  {
    id: 'collective-coffee',
    name: 'Collective Coffee House',
    tagline: 'Luxury Minimalist Cafe Aesthetic Across Hot & Cold Lines',
    clientLocation: 'Specialty Coffee & Roastery',
    industry: 'Specialty Cafe & Bakery',
    image: coffeeImg,
    badgeColor: '#10B981',
    itemsProduced: [
      'Matte Black Kraft Shopper Bag with premium cotton rope handles',
      'Crystal-Clear Iced Coffee Tumbler with minimalist white logo print',
      'Kraft Salad & Grain Bowls with anti-fog tight-fit clear dome lids',
      'Matte Black Double-Wall Hot Espresso & Flat White Paper Cups',
      'Individually Wrapped Branded Paper Straws'
    ],
    technicalHighlights: [
      'Matching pantone matte black ink across all packaging touchpoints',
      'Anti-fog recyclable PET dome lids for salads and dessert jars',
      'Thick double-wall cup barrier removes the need for extra cardboard sleeves'
    ],
    moq: '500 Sets',
    leadTime: '7–10 Business Days',
    formProductType: 'printed-paper'
  },
  {
    id: 'le-coquet',
    name: 'Le Coquet',
    tagline: 'French Patisserie Elegance in Pastel Striped Paper',
    clientLocation: 'The Fine Bakery',
    industry: 'Artisan Patisserie & Bakery',
    image: lecoquetImg,
    badgeColor: '#3B82F6',
    itemsProduced: [
      'Crisp White Virgin Kraft Bakery Takeaway Bag with French serif branding',
      'Watercolor Powder-Blue Striped Beverage Cups ("More Amore Por Favor")',
      'Food-safe greaseproof pastry liner sheets'
    ],
    technicalHighlights: [
      'Precision stripe alignment along conical cup curvature with zero bleed',
      'Ultra-pure virgin food-grade paperboard with zero odor or taste transfer',
      'Boutique bag handles designed for delicate cake and pastry box transport'
    ],
    moq: '500 Sets',
    leadTime: '7–10 Business Days',
    formProductType: 'printed-paper'
  }
];

export default function CustomSolutionsPage({ onSelectProductForQuote, onOpenSampleKit }) {
  const [selectedIndustry, setSelectedIndustry] = useState('cloud-kitchen');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [customFormState, setCustomFormState] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    productType: 'printed-paper',
    monthlyVolume: '10000-50000',
    brandingDetails: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const industries = [
    {
      id: 'cloud-kitchen',
      name: 'Cloud Kitchens & QSRs',
      tagline: 'Zero-Spill Gravy Packaging & Fast Dispatch',
      icon: '🛵',
      highlights: [
        'Airtight snap-on lids for dal, curries and biryanis',
        'Stackable ridges preventing transit crushing on bikes',
        'Branded greaseproof paper bags & seal stickers'
      ],
      recommendedItems: [
        '123 MM Round Meal Containers (500ml - 1200ml)',
        'PSB Folded Kraft Food Boxes',
        'Custom Branded Paper Carry Bags'
      ]
    },
    {
      id: 'catering',
      name: 'Banquets & Wedding Caterers',
      tagline: 'High-Rigidity Luxury Compartment Plates',
      icon: '🎉',
      highlights: [
        'Deep 3CP, 5CP, and 8CP compartment thalis with zero food mingling',
        'Natural earthen terracotta chai kulhads for live stations',
        'High structural rigidity withstands heavy gravy without bending'
      ],
      recommendedItems: [
        '10" Square 3-Compartment Bagasse Plates',
        'Traditional River Clay Chai Kulhads (100ml)',
        'Compostable Cornstarch Cutlery Sets'
      ]
    },
    {
      id: 'hotels',
      name: '5-Star Hotels & Resorts',
      tagline: 'Luxury Monogrammed Guest Amenities',
      icon: '🏨',
      highlights: [
        'Eco-kraft packaged dental, shaving and comb kits',
        'Hand-finished wooden hangers with chrome hooks',
        'Hygienic non-woven guest slippers and shoe-care kits'
      ],
      recommendedItems: [
        'Luxury Hotel Dental & Shaving Kits',
        'Natural Hardwood Wardrobe Hangers',
        'Guest Bathroom Slippers & Toiletry Kits'
      ]
    },
    {
      id: 'institutions',
      name: 'Corporate Cafeterias & Hospitals',
      tagline: 'Scheduled Bulk Replenishment Contracts',
      icon: '🏢',
      highlights: [
        'Subsidized volume rates on master peti orders',
        'Scheduled recurring bi-weekly delivery across Central India',
        'Full GST invoice input credit and CPCB compliance certification'
      ],
      recommendedItems: [
        '10" Round Plain Bagasse Buffet Plates',
        'Commercial M-Fold Virgin Paper Napkins',
        'Heavy Duty Star-Base Janitorial Garbage Bags'
      ]
    }
  ];

  const currentInd = industries.find(i => i.id === selectedIndustry) || industries[0];

  const handleSelectCaseStudyForConfig = (study) => {
    setCustomFormState(prev => ({
      ...prev,
      productType: study.formProductType,
      brandingDetails: `Interested in custom packaging setup inspired by ${study.name} (${study.itemsProduced.slice(0, 2).join(', ')}). Monthly volume requirements:`
    }));
    const el = document.getElementById('custom-configurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitCustomQuote = (e) => {
    e.preventDefault();
    if (!customFormState.phone || !customFormState.businessName) {
      alert('Please provide your business name and phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="page-container custom-solutions-page-view">
      {/* Hero Banner */}
      <section className="page-hero-banner custom-solutions-hero-banner">
        <div className="page-hero-bg-blur" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="page-hero-content">
            <span className="page-eyebrow">🔥 Trending #1 Service • B2B OEM & Private Label</span>
            <h1 className="page-hero-title">Custom-Branded Packaging & Private-Label Tableware</h1>
            <p className="page-hero-subtitle">
              Turn everyday takeaway packaging into a powerful brand identity. From custom kettle spout pouches and biryani feast boxes to branded kraft bags and double-wall cups—manufactured with certified food-grade inks and low 500-unit starter MOQs.
            </p>

            <div className="page-hero-actions-row">
              <a href="#client-showcase" className="btn-pill btn-pill-coral">
                <span>View Real Client Portfolio</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </a>
              <a href="#custom-configurator" className="btn-pill btn-pill-white">
                <span>Configure Custom Order</span>
              </a>
              {onOpenSampleKit && (
                <button 
                  type="button" 
                  className="btn-pill btn-pill-outline-white"
                  onClick={onOpenSampleKit}
                >
                  Request Sample Box
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Real Client Case Studies & Portfolio Showcase */}
      <section className="client-portfolio-section" id="client-showcase">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Proven Institutional Track Record</span>
            <h2 className="section-title">Real Client Custom Packaging Showcase</h2>
            <p className="section-subtitle">
              See actual custom packaging suites engineered by Renuka Designers Villa for leading cloud kitchens, chai chains, and bakeries.
            </p>
          </div>

          <div className="client-portfolio-grid">
            {CLIENT_CASE_STUDIES.map((study) => (
              <div key={study.id} className="client-case-card">
                <div 
                  className="client-case-image-box"
                  onClick={() => setActiveProjectModal(study)}
                  title="Click to view high-resolution photo"
                >
                  <img 
                    src={study.image} 
                    alt={`${study.name} Custom Packaging manufactured by RDV`}
                    className="client-case-img"
                    loading="lazy"
                  />
                  <div className="case-overlay-pill" style={{ borderColor: study.badgeColor }}>
                    <span>{study.clientLocation}</span>
                  </div>
                  <div className="case-zoom-hint">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    <span>Click to Zoom</span>
                  </div>
                </div>

                <div className="client-case-body">
                  <div className="case-meta-row">
                    <span className="case-industry-tag">{study.industry}</span>
                    <span className="case-moq-tag">MOQ: {study.moq}</span>
                  </div>

                  <h3 className="case-title">{study.name}</h3>
                  <p className="case-tagline">"{study.tagline}"</p>

                  <div className="case-items-list">
                    <strong>Custom Manufactured Deliverables:</strong>
                    <ul>
                      {study.itemsProduced.map((item, idx) => (
                        <li key={idx}>
                          <span className="check-icon">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-card-actions">
                    <button 
                      type="button"
                      className="btn-pill btn-pill-coral btn-sm"
                      onClick={() => handleSelectCaseStudyForConfig(study)}
                    >
                      <span>Inquire This Setup</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                    <a 
                      href={`https://wa.me/918378965139?text=Hello%20RDV,%20I%20am%20interested%20in%20custom%20packaging%20like%20${encodeURIComponent(study.name)}.`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-pill btn-pill-outline-white btn-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Capabilities Pillars */}
      <section className="oem-capabilities-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Factory Capabilities</span>
            <h2 className="section-title">End-to-End Customization Services</h2>
            <p className="section-subtitle">
              From precision mold debossing to full-color flexographic printing and stand-up spout pouch fabrication.
            </p>
          </div>

          <div className="oem-pillars-grid">
            <div className="oem-card">
              <div className="oem-icon-circle">🏷️</div>
              <h3>Logo Embossing on Bagasse</h3>
              <p>
                Have your restaurant or club monogram precision debossed directly into the rim or base of sugarcane bagasse plates and thalis with high-temperature precision molds.
              </p>
              <ul className="oem-card-list">
                <li>Permanent thermal debossing</li>
                <li>Zero toxic ink or solvents</li>
                <li>Low MOQ for annual contracts</li>
              </ul>
            </div>

            <div className="oem-card">
              <div className="oem-icon-circle">📦</div>
              <h3>Multi-Color Printed Paper Packaging</h3>
              <p>
                Custom flexographic and offset printing for kraft paper carry bags, biryani boxes, pizza boxes, Asian noodle wok tubs, and bakery boxes using certified food-safe inks.
              </p>
              <ul className="oem-card-list">
                <li>Full 4-color Pantone matching</li>
                <li>Twisted and flat handle paper bags</li>
                <li>Steam-vented corrugated food boxes</li>
              </ul>
            </div>

            <div className="oem-card">
              <div className="oem-icon-circle">☕</div>
              <h3>Kettle Tea Spout Delivery Pouches</h3>
              <p>
                Specialized stand-up liquid pouches with screw caps and carry handles designed to keep tea and soups boiling hot for 45+ minutes during bike delivery.
              </p>
              <ul className="oem-card-list">
                <li>100% leakproof barrier foil structure</li>
                <li>Holds boiling hot tea up to 100°C</li>
                <li>Zero spills for high-volume tea deliveries</li>
              </ul>
            </div>

            <div className="oem-card">
              <div className="oem-icon-circle">🏨</div>
              <h3>Private Label Hotel Amenities</h3>
              <p>
                Customized guest room amenities with custom boxed packaging, eco foil embossing, or kraft paper pouches tailored to 4-star and 5-star brand identity manuals.
              </p>
              <ul className="oem-card-list">
                <li>Customized dental, shaving & vanity kits</li>
                <li>Laser engraved wooden hangers</li>
                <li>Hotel branded non-woven slippers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Switcher */}
      <section className="industry-solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Tailored Programs</span>
            <h2 className="section-title">Specialized Packages by Sector</h2>
            <p className="section-subtitle">
              Select your sector to view recommended product bundles and institutional support.
            </p>
          </div>

          <div className="industry-tabs-scroll">
            {industries.map(ind => (
              <button
                key={ind.id}
                type="button"
                className={`industry-tab-btn ${selectedIndustry === ind.id ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(ind.id)}
              >
                <span className="ind-tab-icon">{ind.icon}</span>
                <span className="ind-tab-name">{ind.name}</span>
              </button>
            ))}
          </div>

          <div className="industry-showcase-box">
            <div className="industry-showcase-left">
              <div className="ind-icon-badge">{currentInd.icon}</div>
              <h3 className="ind-title">{currentInd.name}</h3>
              <p className="ind-tagline">{currentInd.tagline}</p>

              <h4 className="ind-subheading">Key Sector Advantages:</h4>
              <ul className="ind-highlights-list">
                {currentInd.highlights.map((item, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="industry-showcase-right">
              <h4 className="ind-subheading">Core Recommended Bundle:</h4>
              <div className="ind-recommended-items">
                {currentInd.recommendedItems.map((prod, idx) => (
                  <div key={idx} className="ind-item-pill">
                    <span className="pill-check">✔</span>
                    <span className="pill-title">{prod}</span>
                    <button 
                      type="button"
                      className="pill-rfq-btn"
                      onClick={() => onSelectProductForQuote(`${currentInd.name} Package: ${prod}`)}
                    >
                      Request RFQ
                    </button>
                  </div>
                ))}
              </div>

              <div className="ind-action-banner">
                <p>Ready to streamline supply for your {currentInd.name}?</p>
                <button 
                  type="button" 
                  className="btn-pill btn-pill-coral"
                  onClick={() => onSelectProductForQuote(`Turnkey Supply Contract for ${currentInd.name}`)}
                >
                  Get Sector Contract Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Configurator Form */}
      <section className="custom-configurator-section" id="custom-configurator">
        <div className="container">
          <div className="configurator-card">
            <div className="section-header text-center">
              <span className="section-eyebrow">Institutional Contract Desk</span>
              <h2 className="section-title">Configure Your Custom OEM Specification</h2>
              <p className="section-subtitle">
                Submit your monthly volume requirements and branding preferences. Our technical team responds with 3D die-line mockups and direct factory discount tiers within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="configurator-success-state">
                <div className="success-icon-disc">✅</div>
                <h3>Custom OEM Inquiry Received!</h3>
                <p>
                  Thank you for contacting Renuka Designers Villa. Our technical team is reviewing your volume request for <strong>{customFormState.businessName}</strong> and will connect via WhatsApp / Phone shortly at <strong>{customFormState.phone}</strong>.
                </p>
                <div className="success-actions-row">
                  <button 
                    type="button" 
                    className="btn-pill btn-pill-coral"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Request
                  </button>
                  <a 
                    href="https://wa.me/918378965139?text=Hello%20RDV,%20I%20have%20submitted%20a%20custom%20OEM%20request%20on%20your%20website%20and%20would%20like%20to%20discuss%20specifications."
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-pill btn-pill-outline-white"
                  >
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>
            ) : (
              <form className="configurator-form-grid" onSubmit={handleSubmitCustomQuote}>
                <div className="form-group">
                  <label htmlFor="cfg-biz-name">Business / Establishment Name *</label>
                  <input 
                    id="cfg-biz-name"
                    type="text" 
                    required 
                    placeholder="e.g. Biryani Hub / Cafe Terrace" 
                    value={customFormState.businessName}
                    onChange={(e) => setCustomFormState({...customFormState, businessName: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cfg-person">Contact Person *</label>
                  <input 
                    id="cfg-person"
                    type="text" 
                    required 
                    placeholder="e.g. Rajesh Sharma (Purchase Manager)" 
                    value={customFormState.contactPerson}
                    onChange={(e) => setCustomFormState({...customFormState, contactPerson: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cfg-phone">WhatsApp / Phone Number *</label>
                  <input 
                    id="cfg-phone"
                    type="tel" 
                    required 
                    placeholder="+91 98XXXXXXXX" 
                    value={customFormState.phone}
                    onChange={(e) => setCustomFormState({...customFormState, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cfg-email">Corporate Email Address</label>
                  <input 
                    id="cfg-email"
                    type="email" 
                    placeholder="purchase@yourbrand.com" 
                    value={customFormState.email}
                    onChange={(e) => setCustomFormState({...customFormState, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cfg-prod-type">Desired Customization Type</label>
                  <select 
                    id="cfg-prod-type"
                    value={customFormState.productType}
                    onChange={(e) => setCustomFormState({...customFormState, productType: e.target.value})}
                  >
                    <option value="printed-paper">Custom Printed Kraft Bags, Cups & Boxes</option>
                    <option value="embossed-bagasse">Custom Embossed Bagasse Plates & Thalis</option>
                    <option value="spout-pouches">Stand-Up Kettle Tea Spout Delivery Pouches</option>
                    <option value="tamper-containers">Tamper-Proof Meal Containers with Printed Lids</option>
                    <option value="hotel-amenities">Private Label Hotel & Room Amenities</option>
                    <option value="full-turnkey">Full Turnkey Takeaway & Packaging Line</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cfg-volume">Estimated Monthly Consumption</label>
                  <select 
                    id="cfg-volume"
                    value={customFormState.monthlyVolume}
                    onChange={(e) => setCustomFormState({...customFormState, monthlyVolume: e.target.value})}
                  >
                    <option value="500-2000">500 – 2,000 sets (Starter Trial Tier)</option>
                    <option value="2000-10000">2,000 – 10,000 sets / month</option>
                    <option value="10000-50000">10,000 – 50,000 sets / month (Wholesale Tier)</option>
                    <option value="50000-200000">50,000 – 2,00,000 sets / month (Contract OEM Tier)</option>
                    <option value="200000+">2,00,000+ sets / month (National Distributor)</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="cfg-details">Branding Specifications or Special Requirements</label>
                  <textarea 
                    id="cfg-details"
                    rows="3" 
                    placeholder="Provide details about your logo debossing, required plate compartments (e.g. 3CP or 5CP), color codes, or delivery schedules..."
                    value={customFormState.brandingDetails}
                    onChange={(e) => setCustomFormState({...customFormState, brandingDetails: e.target.value})}
                  />
                </div>

                <div className="form-submit-row full-width">
                  <button type="submit" className="btn-pill btn-pill-coral btn-lg">
                    <span>Submit Specification for Direct Factory Proposal</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                  <p className="form-security-note">🔒 Strictly confidential B2B data. Direct Nagpur factory pricing guaranteed.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeProjectModal && (
        <div className="custom-lightbox-backdrop" onClick={() => setActiveProjectModal(null)}>
          <div className="custom-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close-btn"
              onClick={() => setActiveProjectModal(null)}
              aria-label="Close image zoom"
            >
              ✕
            </button>
            <img 
              src={activeProjectModal.image} 
              alt={activeProjectModal.name} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">
              <strong>{activeProjectModal.name}</strong> ({activeProjectModal.clientLocation}) — {activeProjectModal.tagline}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
