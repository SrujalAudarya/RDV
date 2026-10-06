import React, { useState, useEffect, useRef } from 'react';
import logoNavbar from '../assets/rdv-logo-navbar.png';

export default function Navbar({ onOpenSampleKit, onSelectCategory }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Scroll detection for sticky header backdrop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleGroup = (groupName) => {
    setExpandedGroup((prev) => (prev === groupName ? null : groupName));
  };

  const handleNavigate = (targetId) => {
    setMenuOpen(false);
    if (!targetId) return;

    if (targetId.startsWith('#')) {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCategorySelect = (categoryId) => {
    setMenuOpen(false);
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const catalogEl = document.querySelector('#products');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrapper">
        {/* Brand Logo */}
        <a href="#" className="brand-logo-link" aria-label="Renuka Designers Villa Home">
          <img 
            src={logoNavbar} 
            alt="Renuka Designers Villa Logo" 
            className="brand-logo-navbar-img"
          />
        </a>

        {/* Right Action Icons & Menu Button */}
        <div className="header-actions">
          {/* 1. Instagram Logo */}
          <a 
            href="https://www.instagram.com/renukadesignersvilla" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-icon-btn instagram-icon"
            title="Follow us on Instagram"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* 2. Phone Logo */}
          <a 
            href="tel:8378965139" 
            className="header-icon-btn phone-icon"
            title="Call Showroom Hotline: +91 8378965139"
            aria-label="Call Showroom Desk"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>

          {/* 3. WhatsApp Logo */}
          <a 
            href="https://wa.me/918378965139?text=Hello%20Renuka%20Designers%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20your%20compostable%20tableware."
            target="_blank" 
            rel="noopener noreferrer"
            className="header-icon-btn whatsapp-icon"
            title="Chat with WhatsApp Desk"
            aria-label="Chat on WhatsApp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.07c-.24.68-1.41 1.25-1.95 1.32-.49.07-1.12.1-3.27-.79-2.75-1.15-4.52-3.95-4.66-4.13-.14-.19-1.12-1.49-1.12-2.85 0-1.35.71-2.02.96-2.29.25-.28.55-.35.73-.35.19 0 .37.01.53.02.17.01.4.06.61.57.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.19-.15.31-.3.49-.15.17-.32.39-.46.52-.15.15-.31.31-.13.62.17.3 1.02 1.69 2.2 2.74 1.51 1.35 2.78 1.77 3.17 1.96.39.19.62.16.85-.1.24-.26 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.2.37.14 2.37 1.12 2.78 1.32.41.21.68.31.78.48.1.18.1.98-.14 1.66z"/>
            </svg>
          </a>

          {/* 4. Menu Toggle Button (Hamburger ☰ when closed, Close ✕ when open) */}
          <button 
            ref={toggleBtnRef}
            type="button"
            className={`header-menu-toggle-btn ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            title={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown Menu Card (Identical to Screenshot 1) */}
        {menuOpen && (
          <>
            <div 
              className="chuk-menu-backdrop" 
              onClick={() => setMenuOpen(false)} 
              aria-hidden="true" 
            />
            <div 
              className="chuk-menu-card" 
              ref={menuRef} 
              role="menu"
              aria-label="Website Navigation Menu"
            >
              {/* Item 1: About Us */}
              <div 
                className="chuk-menu-item" 
                onClick={() => handleNavigate('#why-rdv')}
                role="menuitem"
                tabIndex={0}
              >
                <span className="chuk-menu-label">About Us</span>
              </div>

              {/* Item 2: Products ▾ */}
              <div className="chuk-menu-item-group">
                <div 
                  className={`chuk-menu-item has-dropdown ${expandedGroup === 'products' ? 'is-expanded' : ''}`}
                  onClick={() => toggleGroup('products')}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span className="chuk-menu-label">Products</span>
                  <svg className={`chuk-caret ${expandedGroup === 'products' ? 'rotated' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
                {expandedGroup === 'products' && (
                  <div className="chuk-submenu">
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('all')}>
                      All Products
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('bagasse')}>
                      100% Bagasse Plates & Thalis
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('containers')}>
                      Delivery Containers & Trays
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('paper')}>
                      Paper Bowls & Wok Boxes
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('terracotta')}>
                      Terracotta Chai Kulhads
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('amenities')}>
                      Hotel & Guest Amenities
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('bakery')}>
                      Bakery Boxes & Bags
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleCategorySelect('housekeeping')}>
                      Institutional Housekeeping
                    </div>
                  </div>
                )}
              </div>

              {/* Item 3: Buyers */}
              <div 
                className="chuk-menu-item" 
                onClick={() => handleNavigate('#sectors')}
                role="menuitem"
                tabIndex={0}
              >
                <span className="chuk-menu-label">Buyers</span>
              </div>

              {/* Item 4: News & Events ▾ */}
              <div className="chuk-menu-item-group">
                <div 
                  className={`chuk-menu-item has-dropdown ${expandedGroup === 'news' ? 'is-expanded' : ''}`}
                  onClick={() => toggleGroup('news')}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span className="chuk-menu-label">News & Events</span>
                  <svg className={`chuk-caret ${expandedGroup === 'news' ? 'rotated' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
                {expandedGroup === 'news' && (
                  <div className="chuk-submenu">
                    <div className="chuk-submenu-item" onClick={() => handleNavigate('#showroom')}>
                      Central India Food & Hotel Expo
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleNavigate('#benefits')}>
                      CPCB Plastic Ban Guidelines
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleNavigate('#why-rdv')}>
                      Zero-Plastic Hospitality Summits
                    </div>
                  </div>
                )}
              </div>

              {/* Item 5: Distributors */}
              <div 
                className="chuk-menu-item" 
                onClick={() => handleNavigate('#inquiry')}
                role="menuitem"
                tabIndex={0}
              >
                <span className="chuk-menu-label">Distributors</span>
              </div>

              {/* Item 6: Blog & Media ▾ */}
              <div className="chuk-menu-item-group">
                <div 
                  className={`chuk-menu-item has-dropdown ${expandedGroup === 'blog' ? 'is-expanded' : ''}`}
                  onClick={() => toggleGroup('blog')}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span className="chuk-menu-label">Blog & Media</span>
                  <svg className={`chuk-caret ${expandedGroup === 'blog' ? 'rotated' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
                {expandedGroup === 'blog' && (
                  <div className="chuk-submenu">
                    <div className="chuk-submenu-item" onClick={() => handleNavigate('#smart-design')}>
                      Bagasse vs Plastic Tableware Guide
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleNavigate('#benefits')}>
                      Commercial Cloud Kitchen Packaging
                    </div>
                    <div className="chuk-submenu-item" onClick={() => handleNavigate('#showroom')}>
                      Showroom Gallery & Media Kit
                    </div>
                  </div>
                )}
              </div>

              {/* Item 7: Impact Calculator */}
              <div 
                className="chuk-menu-item" 
                onClick={() => handleNavigate('#impact')}
                role="menuitem"
                tabIndex={0}
              >
                <span className="chuk-menu-label">Impact Calculator</span>
              </div>

              {/* Menu Quick Action Bar */}
              <div className="chuk-menu-footer">
                {onOpenSampleKit && (
                  <button
                    type="button"
                    className="chuk-menu-action-btn btn-sample"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenSampleKit();
                    }}
                  >
                    <span>Request Sample Kit</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                )}
                <a
                  href="https://vyaparapp.in/store/smitadisposableandplastics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chuk-menu-action-btn btn-store"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Live Demo Store</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
