import React, { useState } from 'react';

export default function ContactPage({ onOpenSampleKit }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    category: 'bagasse',
    estimatedQty: '1000-5000',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phone) {
      alert('Please fill in your Business Name and Phone Number.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="page-container contact-page-view">
      {/* Page Hero Banner */}
      <section className="page-hero-banner contact-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-eyebrow">Central India Wholesale Support & Distribution</span>
            <h1 className="page-hero-title">Contact Our Institutional Wholesale Desk</h1>
            <p className="page-hero-subtitle">
              Whether you are opening a new cloud kitchen, planning a 1,000-guest wedding banquet, or upgrading hotel amenities, our Nagpur wholesale team provides direct factory quotations within 2 to 4 business hours.
            </p>

            <div className="contact-quick-badges-row">
              <span className="contact-quick-badge">🏛️ GSTIN: 27AVPPT8792E1ZN</span>
              <span className="contact-quick-badge">📍 Dev Nagar, Khamla, Nagpur</span>
              <span className="contact-quick-badge">⚡ 24-48h Central India Dispatch</span>
              <span className="contact-quick-badge">⏰ Mon – Sat: 9:30 AM – 8:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Content: Details & Form */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid-layout">
            {/* Left Column: Direct Contacts, Address & Showroom Info */}
            <div className="contact-info-column">
              <span className="section-eyebrow">Direct Touchpoints</span>
              <h2 className="contact-column-title">Connect with Our Team</h2>
              <p className="contact-column-desc">
                Visit our experience center to inspect sample durability in person, or call our order hotlines directly for wholesale pricing and delivery schedules.
              </p>

              {/* Hotlines Card */}
              <div className="contact-cards-stack">
                <div className="contact-card-item">
                  <div className="c-card-icon">📞</div>
                  <div className="c-card-text">
                    <h4>Direct Wholesale Hotlines</h4>
                    <p className="c-phone-line">
                      <strong>Desk 1 (Primary):</strong> <a href="tel:8378965139">+91 8378965139</a>
                    </p>
                    <p className="c-phone-line">
                      <strong>Desk 2 (Hotels & Banquets):</strong> <a href="tel:9860544366">+91 9860544366</a>
                    </p>
                    <p className="c-phone-line">
                      <strong>Desk 3 (Cloud Kitchens):</strong> <a href="tel:9665668952">+91 9665668952</a>
                    </p>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="c-card-icon">💬</div>
                  <div className="c-card-text">
                    <h4>Instant WhatsApp Quotation Desk</h4>
                    <p>Immediate pricing, product die-line drawings, and live photos of ready inventory.</p>
                    <a 
                      href="https://wa.me/918378965139?text=Hello%20Renuka%20Designers%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20wholesale%20tableware%20rates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="c-whatsapp-link"
                    >
                      Chat on WhatsApp Now &rarr;
                    </a>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="c-card-icon">📍</div>
                  <div className="c-card-text">
                    <h4>Central Showroom & Distribution Hub</h4>
                    <p className="c-address">
                      <strong>Renuka Designers Villa (Smita Disposable & Plastics)</strong><br />
                      Dev Nagar, Khamla, Nagpur &ndash; 440015, Maharashtra, India
                    </p>
                    <p className="c-hours">Working Hours: Monday to Saturday, 9:30 AM &ndash; 8:00 PM</p>
                    <a 
                      href="https://maps.google.com/?q=Dev+Nagar+Khamla+Nagpur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="c-maps-link"
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="c-card-icon">✉️</div>
                  <div className="c-card-text">
                    <h4>Corporate Email & Benders</h4>
                    <p>For tender RFQs, annual vendor empanelment, and corporate contracts:</p>
                    <a href="mailto:renukadesignersvilla@gmail.com" className="c-email-link">
                      renukadesignersvilla@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Sample Box Prompt */}
              {onOpenSampleKit && (
                <div className="contact-sample-box-banner">
                  <div className="sample-banner-icon">📦</div>
                  <div>
                    <h4>Need Physical Product Samples?</h4>
                    <p>Order a sample presentation box delivered directly to your kitchen or banquet office.</p>
                    <button 
                      type="button" 
                      className="btn-pill btn-pill-coral btn-sm"
                      onClick={onOpenSampleKit}
                    >
                      Request Physical Sample Box
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Direct Wholesale Inquiry Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                <span className="section-eyebrow">Quick Wholesale Request</span>
                <h3 className="form-card-title">Send Us Your Product Requirement</h3>
                <p className="form-card-desc">
                  Fill in your commercial requirements below. Our sales manager will verify wholesale inventory and reply with a complete GST estimate and dispatch timeline.
                </p>

                {isSubmitted ? (
                  <div className="contact-success-state">
                    <div className="success-icon-disc">✅</div>
                    <h3>Inquiry Successfully Submitted!</h3>
                    <p>
                      Thank you for contacting Renuka Designers Villa. We have received your wholesale requirement for <strong>{formData.businessName}</strong>.
                    </p>
                    <p className="success-sub">
                      Our commercial desk will contact you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    <div className="success-btn-row">
                      <button 
                        type="button" 
                        className="btn-pill btn-pill-coral"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Inquiry
                      </button>
                      <a 
                        href={`https://wa.me/918378965139?text=Hello%20RDV,%20I%20have%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.businessName)}%20and%20would%20like%20an%20instant%20quote.`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-pill btn-pill-outline-dark"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <form className="contact-actual-form" onSubmit={handleSubmit}>
                    <div className="c-form-row">
                      <div className="c-form-group">
                        <label htmlFor="c-biz-name">Business / Establishment Name *</label>
                        <input 
                          id="c-biz-name"
                          type="text" 
                          required 
                          placeholder="e.g. Hotel Royal Orchid / Spice Kitchen"
                          value={formData.businessName}
                          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        />
                      </div>

                      <div className="c-form-group">
                        <label htmlFor="c-person">Contact Person Name</label>
                        <input 
                          id="c-person"
                          type="text" 
                          placeholder="e.g. Ramesh Patel (F&B Manager)"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="c-form-row">
                      <div className="c-form-group">
                        <label htmlFor="c-phone">Phone / WhatsApp Number *</label>
                        <input 
                          id="c-phone"
                          type="tel" 
                          required 
                          placeholder="+91 98XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>

                      <div className="c-form-group">
                        <label htmlFor="c-city">City / Location</label>
                        <input 
                          id="c-city"
                          type="text" 
                          placeholder="e.g. Nagpur / Amravati / Raipur"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="c-form-row">
                      <div className="c-form-group">
                        <label htmlFor="c-cat">Primary Product Interest</label>
                        <select 
                          id="c-cat"
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                        >
                          <option value="bagasse">100% Compostable Bagasse Plates & Thalis</option>
                          <option value="containers">Food Delivery Containers & Sealable Trays</option>
                          <option value="paper">Paper Bowls, Boat Trays & Wok Boxes</option>
                          <option value="terracotta">Traditional Terracotta Chai Kulhads</option>
                          <option value="amenities">Luxury Hotel Guest Room Amenities</option>
                          <option value="bakery">Bakery Boxes, Cake Bases & Bags</option>
                          <option value="housekeeping">Institutional Housekeeping & Garbage Bags</option>
                          <option value="custom">Custom Embossed / Printed OEM Solutions</option>
                        </select>
                      </div>

                      <div className="c-form-group">
                        <label htmlFor="c-qty">Estimated Order Quantity</label>
                        <select 
                          id="c-qty"
                          value={formData.estimatedQty}
                          onChange={(e) => setFormData({...formData, estimatedQty: e.target.value})}
                        >
                          <option value="500-1000">500 – 1,000 pcs (Demo Batch)</option>
                          <option value="1000-5000">1,000 – 5,000 pcs (Standard Wholesale)</option>
                          <option value="5000-25000">5,000 – 25,000 pcs (Peti Wholesale Lot)</option>
                          <option value="25000+">25,000+ pcs (Contract Rate)</option>
                        </select>
                      </div>
                    </div>

                    <div className="c-form-group">
                      <label htmlFor="c-msg">Specific Items or Customization Notes</label>
                      <textarea 
                        id="c-msg"
                        rows="3" 
                        placeholder="Mention required plate sizes (e.g. 10 inch 3CP, 5CP), container volumes (e.g. 500ml), logo printing requirements, or requested delivery date..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button type="submit" className="btn-pill btn-pill-coral btn-block btn-lg">
                      <span>Submit Request for Wholesale Quotation</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>

                    <p className="c-form-fineprint">
                      🔒 Your commercial inquiry is confidential. Factory-direct pricing with GST invoices provided.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-card">
            <div className="map-card-header">
              <div>
                <span className="section-eyebrow">Nagpur Experience Center</span>
                <h3 className="map-card-title">Visit Our Showroom & Warehouse</h3>
                <p className="map-card-desc">Dev Nagar, Khamla, Nagpur &ndash; 440015. Located right at the logistical hub of Central India.</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Dev+Nagar+Khamla+Nagpur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-pill btn-pill-outline-dark"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="map-embed-wrapper">
              <iframe
                title="RDV Renuka Designers Villa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14886.852924403672!2d79.0558!3d21.1215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf781b0a53b5%3A0xb351834927cb044!2sKhamla%2C%20Nagpur%2C%20Maharashtra%20440025!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
