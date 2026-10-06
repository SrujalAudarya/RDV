import React, { useState, useEffect } from 'react';

export default function InquiryForm({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessName: '',
    city: 'Nagpur',
    productCategory: 'Complete Sample Kit (Assorted Items)',
    orderVolume: 'Sample Pack (First Order Testing)',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        notes: `Interested in wholesale quotation & sample pricing for: ${prefilledProduct}`
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Post to Node.js backend & Supabase
      await fetch('http://localhost:5001/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(err => console.log('Backend notification:', err));

      // 2. Generate WhatsApp URL
      const msg = `*New Wholesale Inquiry - RDV Tableware Portal*%0A%0A` +
        `👤 *Contact Person:* ${encodeURIComponent(formData.fullName)}%0A` +
        `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
        `🏢 *Business / Venue:* ${encodeURIComponent(formData.businessName)}%0A` +
        `📦 *Category / Product:* ${encodeURIComponent(formData.productCategory)}%0A` +
        `📊 *Order Volume:* ${encodeURIComponent(formData.orderVolume)}%0A` +
        `📍 *Location:* ${encodeURIComponent(formData.city)}%0A` +
        `📝 *Specific Requirements:* ${encodeURIComponent(formData.notes)}`;

      const whatsappUrl = `https://wa.me/918378965139?text=${msg}`;
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          phone: '',
          businessName: '',
          city: 'Nagpur',
          productCategory: 'Complete Sample Kit (Assorted Items)',
          orderVolume: 'Sample Pack (First Order Testing)',
          notes: ''
        });
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="inquiry-section" id="inquiry">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Institutional Quotations</span>
          <h2 className="section-title">Request a Sample Kit or Wholesale Quote</h2>
          <p className="section-subtitle">
            Get direct distributor wholesale rates, custom logo branding, and fast delivery across Nagpur and Vidarbha.
          </p>
        </div>

        <div className="inquiry-grid">
          {/* Contact Information Card */}
          <div className="inquiry-info-card">
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#A5D6A7', fontWeight: 700 }}>
              Direct Wholesale Office
            </span>
            <h3 style={{ fontSize: '1.7rem', margin: '14px 0 12px' }}>Renuka Designers Villa</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              We supply institutional restaurants, hotels, banquet halls, cloud kitchens, and hospitals with factory-sealed cartons and bespoke branding options.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="contact-details">
                  <h4>Registered Address & Showroom</h4>
                  <p>23/A Dev Nagar, Opposite Sanjay Traders, Orange City Hospital Road, Khamla, Nagpur &ndash; 440015</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div className="contact-details">
                  <h4>Wholesale Phone Numbers</h4>
                  <p>
                    <a href="tel:8378965139">+91 8378965139</a> &bull;{' '}
                    <a href="tel:9860544366">+91 9860544366</a> &bull;{' '}
                    <a href="tel:9665668952">+91 9665668952</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="contact-details">
                  <h4>Email & GST Details</h4>
                  <p>
                    <a href="mailto:renukadesignersvilla@gmail.com">renukadesignersvilla@gmail.com</a><br />
                    <span style={{ color: '#FFE082', fontWeight: 600 }}>GSTIN: 27AVPPT8792E1ZN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="inquiry-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Your Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="form-control" 
                    placeholder="e.g. Rajesh Sharma" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="form-control" 
                    placeholder="e.g. 9876543210" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="businessName">Business / Establishment Name *</label>
                  <input 
                    type="text" 
                    id="businessName" 
                    className="form-control" 
                    placeholder="e.g. Hotel Grand, Sweet Corner, Cloud Kitchen" 
                    value={formData.businessName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="city">City / Delivery Location</label>
                  <input 
                    type="text" 
                    id="city" 
                    className="form-control" 
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City" 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="productCategory">Primary Product Requirement *</label>
                  <select 
                    id="productCategory" 
                    className="form-control" 
                    value={formData.productCategory}
                    onChange={handleChange}
                    required
                  >
                    <option value="Complete Sample Kit (Assorted Items)">Request Complete Sample Kit</option>
                    <option value="100% Sugarcane Bagasse Plates & Thalis">100% Sugarcane Bagasse Plates & Thalis</option>
                    <option value="Food Delivery Containers & Sealable Bowls">Food Delivery Containers & Sealable Bowls</option>
                    <option value="Paper PSB Meal Boxes & Wok Containers">Paper PSB Meal Boxes & Wok Containers</option>
                    <option value="Traditional Terracotta Kulhads & Biryani Handis">Traditional Terracotta Kulhads & Biryani Handis</option>
                    <option value="Hotel & Guest Amenities Kits">Hotel & Guest Amenities Kits</option>
                    <option value="Bakery Boxes, Cake Bases & Bags">Bakery Boxes, Cake Bases & Bags</option>
                    <option value="Housekeeping, Napkins & Janitorial Rolls">Housekeeping, Napkins & Janitorial Rolls</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="orderVolume">Estimated Order Volume</label>
                  <select 
                    id="orderVolume" 
                    className="form-control"
                    value={formData.orderVolume}
                    onChange={handleChange}
                  >
                    <option value="Sample Pack (First Order Testing)">Sample Testing Pack</option>
                    <option value="500 - 2,000 Pieces">500 &ndash; 2,000 Pieces</option>
                    <option value="2,000 - 10,000 Pieces (Wholesale)">2,000 &ndash; 10,000 Pieces (Wholesale)</option>
                    <option value="10,000+ Pieces / Recurring Monthly">10,000+ Pieces / Recurring Monthly</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="notes">Specific Sizes, Custom Printing or Delivery Details</label>
                <textarea 
                  id="notes" 
                  className="form-control" 
                  placeholder="Mention sizing specifications, event dates, custom logo printing on boxes..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-submit-rfq" 
                disabled={submitting}
              >
                {submitted ? (
                  <span>✓ Request Sent & Redirected to WhatsApp!</span>
                ) : submitting ? (
                  <span>Connecting to Wholesale Team...</span>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send RFQ & Connect Directly via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
