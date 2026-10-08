import React, { useState } from 'react';

export default function Footer({ onNavigatePage, onSelectCategory, onReplayPreloader, onOpenSampleKit }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer rdv-luxury-dark-footer">
      {/* 1. Top Utility & Emergency Hotline Strip */}
      <div className="footer-utility-bar">
        <div className="container">
          <div className="utility-bar-inner">
            <div className="utility-hotlines-group">
              <span className="utility-tag">Central India Wholesale Support:</span>
              <a href="tel:8378965139" className="utility-phone-link">
                📞 +91 8378965139
              </a>
              <span className="utility-sep">•</span>
              <a href="tel:9860544366" className="utility-phone-link">
                📞 +91 9860544366
              </a>
              <span className="utility-sep">•</span>
              <span className="utility-hours">Mon–Sat 9:30 AM – 8:00 PM</span>
            </div>

            <div className="utility-actions-group">
              {onOpenSampleKit && (
                <button 
                  type="button" 
                  className="btn-utility-action btn-utility-sample"
                  onClick={onOpenSampleKit}
                >
                  Request Sample Box
                </button>
              )}
              <a 
                href="https://wa.me/918378965139?text=Hello%20RDV,%20I%20would%20like%20to%20inquire%20about%20wholesale%20rates."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-utility-action btn-utility-whatsapp"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Useful Grid */}
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand, Address & Tax Credential */}
          <div className="footer-col-brand">
            <h3 className="footer-brand-title">RENUKA DESIGNERS VILLA</h3>
            <p className="footer-desc">
              Central India's leading institutional manufacturer & distributor of 100% compostable sugarcane bagasse tableware, commercial food delivery packaging, luxury hotel amenities, and traditional terracotta kulhads.
            </p>
            
            <div className="footer-credential-card">
              <div className="credential-row">
                <span className="cred-label">GSTIN:</span>
                <strong className="cred-val">27AVPPT8792E1ZN</strong>
                <span className="cred-badge">ITC Eligible</span>
              </div>
              <div className="cred-address">
                📍 Dev Nagar, Khamla, Nagpur &ndash; 440015, Maharashtra
              </div>
            </div>
          </div>

          {/* Column 2: Product Divisions (Deep Catalog Jump Links) */}
          <div className="footer-col-divisions">
            <h4 className="footer-heading">Product Divisions</h4>
            <ul className="footer-links-list">
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'bagasse')}>🌱 100% Bagasse Plates & Thalis</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'containers')}>🥡 Delivery Containers & Trays</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'paper')}>🍜 Paper Bowls & Wok Boxes</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'terracotta')}>☕ Terracotta Chai Kulhads</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'amenities')}>🏨 Hotel & Guest Amenities</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'bakery')}>🍰 Bakery Packaging & Bags</a></li>
              <li><a href="#products" onClick={(e) => handleDivisionClick(e, 'housekeeping')}>🧹 Institutional Housekeeping</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Clean Page Navigation */}
          <div className="footer-col-pages">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home Landing Page</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products Catalog Explorer</a></li>
              <li><a href="#custom-solutions" onClick={(e) => handleNavClick(e, 'custom-solutions')}>Custom OEM & Private Label</a></li>
              <li><a href="#sustainability" onClick={(e) => handleNavClick(e, 'sustainability')}>Sustainability & 90-Day Bio-Cycle</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us & Showroom</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact & Wholesale Desk</a></li>
              <li><a href="https://vyaparapp.in/store/smitadisposableandplastics" target="_blank" rel="noopener noreferrer">Live Demo Store (Vyapar) &rarr;</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Wholesale Price Drops */}
          <div className="footer-col-newsletter">
            <h4 className="footer-heading">B2B Wholesale Alerts</h4>
            <p className="footer-newsletter-desc">
              Subscribe to receive weekly factory-direct price updates, seasonal discount alerts, and new product releases.
            </p>

            {subscribed ? (
              <div className="footer-subscribe-success">
                <span>✔ Thank you! You will receive wholesale price drops.</span>
              </div>
            ) : (
              <form className="footer-subscribe-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter business email or phone..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="footer-subscribe-input"
                />
                <button type="submit" className="footer-subscribe-btn">
                  Subscribe
                </button>
              </form>
            )}

            <div className="footer-support-email-box">
              <span className="email-box-label">Email Support & RFQs:</span>
              <a href="mailto:renukadesignersvilla@gmail.com" className="email-box-link">
                renukadesignersvilla@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar with Credits and CPCB Note */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            &copy; {new Date().getFullYear()} Renuka Designers Villa (RDV). All rights reserved.
            <span className="footer-cpcb-tag">100% CPCB Plastic-Ban Compliant • 90-Day Backyard Compostable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
