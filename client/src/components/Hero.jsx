import React from 'react';
import restaurantHeroBg from '../assets/rdv-restaurant-hero.jpg';

export default function Hero({ onOpenSampleKit }) {
  return (
    <section 
      className="hero-showcase-section" 
      id="hero"
      style={{ backgroundImage: `url(${restaurantHeroBg})` }}
      aria-label="Hero Showcase"
    >
      <div className="container hero-container">
        <div className="hero-text-block">
          <h1 className="hero-main-title">
            <span className="hero-line-white">EVERYTHING TASTES</span>
            <span className="hero-line-gold">BETTER IN</span>
            <span className="hero-line-brand">
              <span className="hero-brand-top">RENUKA</span>
              <span className="hero-brand-sub">DESIGNERS VILLA</span>
            </span>
          </h1>

          <p className="hero-trust-subtitle">
            Trusted by 500+ restaurants across India
          </p>

          <div className="hero-actions-row">
            <button 
              type="button" 
              className="btn-pill btn-pill-white"
              onClick={onOpenSampleKit}
              id="hero-btn-sample-kit"
            >
              Request a Sample Kit
            </button>

            <a 
              href="https://vyaparapp.in/store/smitadisposableandplastics" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-pill btn-pill-coral"
              id="hero-btn-buy-now"
            >
              Buy Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
