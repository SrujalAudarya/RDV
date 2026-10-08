import React from 'react';

export default function Footer({ onNavigatePage, onSelectCategory, onReplayPreloader }) {
  const handleDivisionClick = (e, catId) => {
    e.preventDefault();
    if (onSelectCategory) onSelectCategory(catId);
    if (onNavigatePage) onNavigatePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, pageId, sectionId = null) => {
    e.preventDefault();
    if (onNavigatePage) onNavigatePage(pageId);
    if (sectionId) {
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div>
            <h3 className="footer-brand-title">RENUKA DESIGNERS VILLA</h3>
            <p className="footer-desc">
              Central India's leading institutional manufacturer & distributor of 100% compostable sugarcane bagasse tableware, commercial food packaging, luxury guest amenities, and traditional terracotta kulhads.
            </p>
            <div style={{ fontSize: '0.85rem', color: '#A5D6A7', marginBottom: '8px' }}>
              <strong>GSTIN: 27AVPPT8792E1ZN</strong>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              Dev Nagar, Khamla, Nagpur &ndash; 440015
            </div>
          </div>

          {/* Column 2: Product Divisions */}
          <div>
            <h4 className="footer-heading">Product Divisions</h4>
            <ul className="footer-links-list">
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'bagasse')}>100% Bagasse Tableware</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'containers')}>Food Delivery Containers</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'paper')}>Paper Bowls & Wok Boxes</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'terracotta')}>Terracotta Chai Kulhads</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'amenities')}>Hotel & Guest Amenities</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'bakery')}>Bakery Packaging & Bags</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'housekeeping')}>Institutional Housekeeping</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home Landing Page</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products Explorer Hub</a></li>
              <li><a href="#sustainability" onClick={(e) => handleNavClick(e, 'sustainability')}>Sustainability & 90-Day Bio-Cycle</a></li>
              <li><a href="#custom-solutions" onClick={(e) => handleNavClick(e, 'custom-solutions')}>Custom OEM & Private Label</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us & Showroom</a></li>
              <li><a href="#inquiry" onClick={(e) => handleNavClick(e, 'home', '#inquiry')}>Wholesale RFQ Desk</a></li>
              <li><a href="https://vyaparapp.in/store/smitadisposableandplastics" target="_blank" rel="noopener noreferrer">Online Demo Store</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Wholesale Desks */}
          <div>
            <h4 className="footer-heading">Wholesale Desk</h4>
            <ul className="footer-links-list">
              <li>
                <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '0.78rem' }}>Order Desk 1:</span>
                <a href="tel:8378965139">+91 8378965139</a>
              </li>
              <li>
                <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '0.78rem' }}>Order Desk 2:</span>
                <a href="tel:9860544366">+91 9860544366</a>
              </li>
              <li>
                <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '0.78rem' }}>Order Desk 3:</span>
                <a href="tel:9665668952">+91 9665668952</a>
              </li>
              <li>
                <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '0.78rem' }}>Email Support:</span>
                <a href="mailto:renukadesignersvilla@gmail.com">renukadesignersvilla@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Renuka Designers Villa (RDV). All rights reserved.
          </div>
          <div className="footer-bottom-actions">
            <span>Compostable Sugarcane Bagasse & Commercial Packaging Solutions</span>
            {onReplayPreloader && (
              <button 
                type="button" 
                className="footer-replay-btn"
                onClick={onReplayPreloader}
                title="Replay website introductory loading animation"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
                <span>Replay Intro Animation</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
