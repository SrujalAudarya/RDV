import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div>
            <h3 className="footer-brand-title">RENUKA DESIGNERS VILLA</h3>
            <p className="footer-desc">
              Central India's leading institutional distributor of 100% compostable sugarcane bagasse tableware, commercial food packaging, luxury guest amenities, and traditional terracotta kulhads.
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
              <li><a href="#products">100% Bagasse Tableware</a></li>
              <li><a href="#products">Food Delivery Containers</a></li>
              <li><a href="#products">Paper Bowls & Wok Boxes</a></li>
              <li><a href="#products">Terracotta Chai Kulhads</a></li>
              <li><a href="#products">Hotel & Guest Amenities</a></li>
              <li><a href="#products">Bakery Packaging & Bags</a></li>
              <li><a href="#products">Institutional Housekeeping</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#benefits">Why Eco-Tableware</a></li>
              <li><a href="#sectors">Who We Cater</a></li>
              <li><a href="#impact">Sustainability Calculator</a></li>
              <li><a href="#why-rdv">The RDV Advantage</a></li>
              <li><a href="#showroom">Nagpur Showroom</a></li>
              <li><a href="#inquiry">Request Wholesale Quote</a></li>
              <li><a href="https://vyaparapp.in/store/smitadisposableandplastics" target="_blank" rel="noopener noreferrer">Online Demo Store</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
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
          <div>
            Compostable Sugarcane Bagasse & Commercial Packaging Solutions
          </div>
        </div>
      </div>
    </footer>
  );
}
