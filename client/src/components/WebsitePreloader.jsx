import React, { useState, useEffect } from 'react';
import rdvEmblem from '../assets/rdv-emblem-clean.png';
import rdvLogo from '../assets/rdv-official-logo.png';

export default function WebsitePreloader({ onFinish, forceShow = false }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Eco-Fiber Matrix...');
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user already saw the preloader in this session, unless forceShow is true
    const hasSeen = sessionStorage.getItem('rdv_preloader_viewed');
    if (hasSeen && !forceShow) {
      setShouldRender(false);
      if (onFinish) onFinish();
      return;
    }

    // Lock body scroll during preloader
    document.body.style.overflow = 'hidden';

    // Status milestones
    const milestones = [
      { at: 15, text: 'Sourcing 100% Sugarcane Agro-Fibers...' },
      { at: 38, text: 'Precision Thermoforming Tableware...' },
      { at: 62, text: 'Indexing Master B2B Hospitality Catalog...' },
      { at: 84, text: 'Calibrating Zero-Plastic Green Solutions...' },
      { at: 98, text: 'Welcome to Renuka Designers Villa' }
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      // Natural non-linear easing for realistic loading feel
      const increment = Math.max(1, Math.floor(Math.random() * 4) + 1);
      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(currentProgress);

      const currentMilestone = [...milestones].reverse().find(m => currentProgress >= m.at);
      if (currentMilestone) {
        setStatusText(currentMilestone.text);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          sessionStorage.setItem('rdv_preloader_viewed', 'true');
          setTimeout(() => {
            setShouldRender(false);
            document.body.style.overflow = '';
            if (onFinish) onFinish();
          }, 650); // Matches exit transition duration
        }, 350);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [forceShow, onFinish]);

  const handleSkip = () => {
    setIsExiting(true);
    sessionStorage.setItem('rdv_preloader_viewed', 'true');
    setTimeout(() => {
      setShouldRender(false);
      document.body.style.overflow = '';
      if (onFinish) onFinish();
    }, 400);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`rdv-preloader-overlay ${isExiting ? 'preloader-exiting' : ''}`}
      role="status" 
      aria-live="polite"
      aria-label="Website initial loading animation"
    >
      {/* Ambient glowing background shapes */}
      <div className="preloader-glow glow-coral" />
      <div className="preloader-glow glow-amber" />
      <div className="preloader-glow glow-green" />

      {/* Skip Button */}
      <button 
        type="button" 
        className="preloader-skip-btn"
        onClick={handleSkip}
        aria-label="Skip loading animation"
      >
        <span>Skip</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="13 17 18 12 13 7"/>
          <polyline points="6 17 11 12 6 7"/>
        </svg>
      </button>

      <div className="preloader-content-box">
        {/* Animated Brand Emblem & Ring */}
        <div className="preloader-emblem-wrapper">
          <div className="preloader-halo-ring halo-ring-1" />
          <div className="preloader-halo-ring halo-ring-2" />
          <div className="preloader-emblem-disc">
            <img 
              src={rdvEmblem} 
              alt="RDV Monogram Emblem" 
              className="preloader-emblem-img"
            />
          </div>
          <div className="preloader-leaf-orb">🌱</div>
        </div>

        {/* Brand Text Typography */}
        <div className="preloader-brand-title">
          <span className="brand-title-accent">RENUKA</span> DESIGNERS VILLA
        </div>
        <p className="preloader-brand-sub">
          Central India’s Premier Compostable Tableware & Bio-Packaging
        </p>

        {/* Progress Display Bar */}
        <div className="preloader-progress-track">
          <div 
            className="preloader-progress-fill" 
            style={{ width: `${progress}%` }} 
          />
          <div 
            className="preloader-progress-glow-head" 
            style={{ left: `${progress}%` }} 
          />
        </div>

        {/* Status Line & Percentage */}
        <div className="preloader-meta-row">
          <span className="preloader-status-text">
            <span className="preloader-status-dot" />
            {statusText}
          </span>
          <span className="preloader-percentage-num">{progress}%</span>
        </div>

        {/* Eco Trust Pillars */}
        <div className="preloader-badges-row">
          <div className="preloader-badge">
            <span className="badge-bullet">✔</span> 100% Bagasse
          </div>
          <div className="preloader-badge">
            <span className="badge-bullet">✔</span> CPCB Plastic Ban Ready
          </div>
          <div className="preloader-badge">
            <span className="badge-bullet">✔</span> Microwave & Oven Safe
          </div>
        </div>
      </div>
    </div>
  );
}
