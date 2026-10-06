import React, { useState } from 'react';

export default function SampleKitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    restaurant: '',
    phone: '',
    city: '',
    address: '',
    items: [
      '4-Compartment Sugarcane Meal Tray',
      '10" Heavy Dinner Plate',
      '250ml Leak-proof Curry Bowl',
      'Birchwood Cutlery Set',
      'Greaseproof Wrapping Paper Sample'
    ]
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleCheckboxChange = (item) => {
    setFormData(prev => {
      const exists = prev.items.includes(item);
      return {
        ...prev,
        items: exists ? prev.items.filter(i => i !== item) : [...prev.items, item]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Submit to API backend
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.restaurant,
          phone: formData.phone,
          city: formData.city,
          message: `Sample Kit Request for items: ${formData.items.join(', ')}. Delivery Address: ${formData.address}`,
          productInterest: 'Free Commercial Sample Kit'
        })
      });
    } catch (err) {
      console.warn('API submission failed or offline, proceeding to WhatsApp dispatch:', err);
    }

    // 2. Prepare WhatsApp dispatch
    const waText = encodeURIComponent(
      `*FREE SAMPLE KIT REQUEST - RENUKA DESIGNERS VILLA*\n\n` +
      `*Contact Person:* ${formData.name}\n` +
      `*Restaurant/Business:* ${formData.restaurant}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*City:* ${formData.city}\n` +
      `*Delivery Address:* ${formData.address}\n\n` +
      `*Sample Products Selected:*\n` +
      formData.items.map(item => `• ${item}`).join('\n') +
      `\n\nPlease dispatch our free commercial trial sample box. Thank you!`
    );

    const waUrl = `https://wa.me/918378965139?text=${waText}`;

    setSubmitting(false);
    setSubmitted(true);

    // Open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="sample-modal-title">
      <div className="modal-dialog-box" onClick={e => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close sample kit modal"
        >
          &times;
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="modal-badge-pill">Commercial Trial Offer</span>
              <h2 className="modal-title" id="sample-modal-title">Request a Free Sample Kit</h2>
              <p className="modal-description">
                Experience the rigid quality, zero-leak barrier, and premium presentation of RDV 100% Bagasse Tableware in your own kitchen before placing bulk orders.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group-grid">
                <div className="form-field">
                  <label htmlFor="sample-name">Your Name *</label>
                  <input
                    id="sample-name"
                    type="text"
                    required
                    placeholder="e.g. Chef Vikram Patel"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="sample-restaurant">Restaurant / Business Name *</label>
                  <input
                    id="sample-restaurant"
                    type="text"
                    required
                    placeholder="e.g. Spice Route Bistro / Taj Caterers"
                    value={formData.restaurant}
                    onChange={e => setFormData({ ...formData, restaurant: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-grid">
                <div className="form-field">
                  <label htmlFor="sample-phone">WhatsApp / Mobile Number *</label>
                  <input
                    id="sample-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="sample-city">City & State *</label>
                  <input
                    id="sample-city"
                    type="text"
                    required
                    placeholder="e.g. Nagpur, Maharashtra"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="sample-address">Complete Courier Delivery Address *</label>
                <textarea
                  id="sample-address"
                  rows="2"
                  required
                  placeholder="Street address, landmark, pincode for dispatch"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                ></textarea>
              </div>

              <div className="sample-items-selection">
                <label className="selection-label">Select Items For Your Sample Box:</label>
                <div className="checkboxes-grid">
                  {[
                    '4-Compartment Sugarcane Meal Tray',
                    '10" Heavy Dinner Plate',
                    '250ml Leak-proof Curry Bowl',
                    'Birchwood Cutlery Set',
                    'Greaseproof Wrapping Paper Sample'
                  ].map(item => (
                    <label key={item} className="custom-checkbox-row">
                      <input
                        type="checkbox"
                        checked={formData.items.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                      />
                      <span className="checkbox-text">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="modal-actions-row">
                <button 
                  type="submit" 
                  className="btn-pill btn-pill-coral"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                  disabled={submitting}
                >
                  {submitting ? 'Preparing Dispatch...' : 'Dispatch My Sample Kit (WhatsApp & Courier)'}
                </button>
              </div>

              <p className="modal-trust-note">
                🔒 Free for verifiable food service operators, restaurants, hotels, cloud kitchens, and caterers.
              </p>
            </form>
          </div>
        ) : (
          <div className="modal-success-view">
            <div className="success-icon-bubble">✓</div>
            <h3 className="success-title">Sample Kit Request Sent!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Your sample request for <strong>{formData.restaurant}</strong> has been logged.
            </p>
            <p className="success-subdesc">
              A direct dispatch confirmation is opening on WhatsApp. Our dispatch desk in Nagpur will coordinate courier tracking immediately.
            </p>
            <button 
              type="button" 
              className="btn-pill btn-pill-coral"
              style={{ marginTop: '20px' }}
              onClick={onClose}
            >
              Back to Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
