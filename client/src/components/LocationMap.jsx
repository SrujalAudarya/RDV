import React from 'react';

export default function LocationMap() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6508933454224!2d79.06456367503417!3d21.114654480556093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf84762c4a45%3A0xb3e6a0d4c8efbdf0!2sRenuka%20Designers%20Villa!5e0!3m2!1sen!2sin!4v1717392810000!5m2!1sen!2sin";

  return (
    <section className="map-section" id="location">
      <div className="container">
        <div className="map-card-wrapper">
          <div className="map-iframe-box">
            <iframe
              src={mapUrl}
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Renuka Designers Villa Nagpur Showroom Location"
            ></iframe>
          </div>

          <div className="map-details-box">
            <span className="section-eyebrow" style={{ alignSelf: 'flex-start' }}>Physical Location</span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--forest-green-dark)', margin: '10px 0 14px' }}>
              Showroom & Distribution Center
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Conveniently located on Orange City Hospital Road in Dev Nagar, Khamla, Nagpur. Visit us to inspect sample sizes, check lid fitting tightness, and discuss wholesale contract pricing.
            </p>

            <div style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              <p>📍 <strong>23/A Dev Nagar</strong>, Opp. Sanjay Traders</p>
              <p>Orange City Hospital Road, Khamla, Nagpur &ndash; 440015</p>
              <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>🕒 Mon &ndash; Sat: 10:00 AM &ndash; 8:00 PM</p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="https://www.google.com/maps/search/Renuka%20Designers%20Villa/@21.11465442,79.06713864,17z?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Get Google Maps Directions
              </a>
              <a href="tel:8378965139" className="btn btn-secondary">
                Call Showroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
