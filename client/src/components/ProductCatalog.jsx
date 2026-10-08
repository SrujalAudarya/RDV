import React, { useState, useMemo, useRef } from 'react';
import { CATEGORIES, MASTER_PRODUCTS } from '../data/masterCatalog.js';

export default function ProductCatalog({ 
  onSelectProductForQuote, 
  externalCategory = 'all', 
  onCategoryChange,
  onViewAllProducts 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const tabsScrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const activeCategory = externalCategory || 'all';

  const handleCategoryClick = (catId) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
  };

  const scrollTabs = (direction) => {
    if (tabsScrollRef.current) {
      const step = 280;
      tabsScrollRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth'
      });
    }
  };

  const handleWheel = (e) => {
    if (!tabsScrollRef.current || e.deltaY === 0) return;
    tabsScrollRef.current.scrollLeft += e.deltaY;
  };

  const handleMouseDown = (e) => {
    if (!tabsScrollRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - tabsScrollRef.current.offsetLeft;
    scrollLeftRef.current = tabsScrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !tabsScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsScrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    tabsScrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Curated 6 flagship items for minimal, high-impact Home page presentation
  const SIGNATURE_FLAGSHIP_IDS = ['bg-1', 'bg-2', 'fc-1', 'pp-1', 'tc-1', 'am-1'];

  const displayedProducts = useMemo(() => {
    if (activeCategory === 'all' && !searchQuery.trim()) {
      // Show curated minimal 6 flagship items on default view
      return MASTER_PRODUCTS.filter(p => SIGNATURE_FLAGSHIP_IDS.includes(p.id));
    }

    // If searching or category selected, show max 6 matching items to keep homepage minimal
    return MASTER_PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.spec.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).slice(0, 6);
  }, [activeCategory, searchQuery]);

  return (
    <section className="catalog-section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Institutional Product Showcase</span>
          <h2 className="section-title">Signature Commercial Eco Tableware</h2>
          <p className="section-subtitle">
            A curated selection of our flagship 100% sugarcane bagasse compartment plates, leak-proof food delivery containers, traditional clay kulhads, and hotel guest amenities.
          </p>
        </div>

        {/* Filter & Search Bar with full-width scrollable tabs and smooth navigation */}
        <div className="catalog-filter-bar">
          <div className="category-scroll-outer">
            <button 
              type="button" 
              className="tabs-scroll-arrow arrow-left" 
              onClick={() => scrollTabs('left')}
              title="Scroll categories left"
              aria-label="Scroll categories left"
            >
              ‹
            </button>

            <div 
              ref={tabsScrollRef}
              className="category-tabs-scroll" 
              role="tablist" 
              aria-label="Product categories"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {CATEGORIES.slice(0, 6).map(cat => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
              {onViewAllProducts && (
                <button
                  type="button"
                  className="category-tab-btn tab-btn-more"
                  onClick={onViewAllProducts}
                  title="View all 7 product divisions in Master Catalog"
                >
                  + More Categories...
                </button>
              )}
            </div>

            <button 
              type="button" 
              className="tabs-scroll-arrow arrow-right" 
              onClick={() => scrollTabs('right')}
              title="Scroll categories right"
              aria-label="Scroll categories right"
            >
              ›
            </button>
          </div>

          <div className="catalog-search-row">
            <div className="search-box-wrapper">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Quick search featured items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search featured products"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="search-clear-btn" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </div>
            {onViewAllProducts && (
              <button 
                type="button" 
                className="btn-pill btn-pill-outline-dark btn-sm catalog-all-btn"
                onClick={onViewAllProducts}
              >
                Explore Full Master Catalog &rarr;
              </button>
            )}
          </div>
        </div>

        {/* Minimal Products Grid */}
        {displayedProducts.length > 0 ? (
          <div className="products-grid" key={activeCategory}>
            {displayedProducts.map((product, idx) => (
              <article 
                key={product.id} 
                className="product-card animated-card"
                style={{ animationDelay: `${Math.min(idx * 0.05, 0.3)}s` }}
              >
                <div className="product-img-box">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-img" 
                    loading="lazy" 
                  />
                  <div className="product-badge-wrapper">
                    <span className={`product-badge-pill ${product.badgeClass}`}>
                      {product.badge}
                    </span>
                  </div>
                  <div className="product-overlay-eco">
                    <span>100% Bagasse</span>
                  </div>
                </div>

                <div className="product-body">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-spec">{product.spec}</p>

                  <ul className="product-features-list">
                    {product.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>
                        <svg className="feature-check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="product-pricing-row">
                    <span className="product-price">{product.price}</span>
                    <span className="product-unit">{product.unit}</span>
                  </div>

                  <div className="product-action-buttons">
                    <a 
                      href={product.orderUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-catalog-store"
                      title="Order retail / demo sample pack on Vyapar"
                    >
                      <span>Demo Store</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </a>
                    <button 
                      type="button" 
                      className="btn-catalog-rfq"
                      onClick={() => onSelectProductForQuote(product.name)}
                      title="Request bulk wholesale quote"
                    >
                      Quick RFQ
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="catalog-empty-state">
            <div className="empty-icon-circle">🔍</div>
            <p className="empty-title">No featured products match this query.</p>
            <p className="empty-subtitle">All products and custom variations are available in our Master Catalog.</p>
            <button 
              type="button"
              className="btn-pill btn-pill-coral" 
              onClick={() => { handleCategoryClick('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* High-Impact CTA Banner to Open Full Master Products Page */}
        <div className="catalog-expand-cta-banner">
          <div className="expand-cta-content">
            <span className="expand-cta-pill">Complete B2B Range</span>
            <h3 className="expand-cta-title">Explore All 20+ Series Across 7 Institutional Divisions</h3>
            <p className="expand-cta-desc">
              Looking for our complete catalog of 3CP, 5CP, 8CP partition platters, tamper-evident takeout trays, corrugated pizza boxes, and bulk wholesale discount tiers?
            </p>
          </div>
          <div className="expand-cta-button-wrapper">
            {onViewAllProducts ? (
              <button 
                type="button" 
                className="btn-pill btn-pill-coral btn-lg expand-action-btn"
                onClick={onViewAllProducts}
              >
                <span>Open Full Master Catalog Hub</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            ) : (
              <a 
                href="#/products" 
                className="btn-pill btn-pill-coral btn-lg expand-action-btn"
              >
                <span>Open Full Master Catalog Hub</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
