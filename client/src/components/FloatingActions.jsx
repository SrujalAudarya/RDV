import React, { useState, useEffect } from 'react';

export default function FloatingActions({ onOpenSampleKit }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="floating-actions" aria-label="Floating quick actions">
      {/* 1. Back to Top Button (Smooth fade & slide when scrolled) */}
      <button 
        type="button"
        className={`float-btn float-top ${showTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* 2. Floating WhatsApp Quick Order & Inquiry Desk */}
      <a 
        href="https://wa.me/918378965139?text=Hello%20Renuka%20Designers%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20your%20compostable%20tableware%20and%20packaging%20catalog." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-btn float-whatsapp" 
        aria-label="Chat with RDV WhatsApp Desk"
        title="Instant WhatsApp Wholesale Desk"
      >
        <span className="float-pulse-ring" aria-hidden="true" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.07c-.24.68-1.41 1.25-1.95 1.32-.49.07-1.12.1-3.27-.79-2.75-1.15-4.52-3.95-4.66-4.13-.14-.19-1.12-1.49-1.12-2.85 0-1.35.71-2.02.96-2.29.25-.28.55-.35.73-.35.19 0 .37.01.53.02.17.01.4.06.61.57.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.19-.15.31-.3.49-.15.17-.32.39-.46.52-.15.15-.31.31-.13.62.17.3 1.02 1.69 2.2 2.74 1.51 1.35 2.78 1.77 3.17 1.96.39.19.62.16.85-.1.24-.26 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.2.37.14 2.37 1.12 2.78 1.32.41.21.68.31.78.48.1.18.1.98-.14 1.66z"/>
        </svg>
        <span className="float-whatsapp-tooltip">Chat with us</span>
      </a>
    </aside>
  );
}
