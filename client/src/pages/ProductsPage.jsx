import React, { useState, useMemo, useRef } from 'react';
import { CATEGORIES, MASTER_PRODUCTS } from '../data/masterCatalog.js';

export default function ProductsPage({ 
  onSelectProductForQuote, 
  onOpenSampleKit, 
  initialCategory = 'all' 
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterChips, setActiveFilterChips] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [calcQty, setCalcQty] = useState(25);

  const tabsScrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

  const filterChips = [
    { id: 'compostable', label: '🌱 100% Compostable' },
    { id: 'microwave', label: '🔥 Microwave Safe' },
    { id: 'oilproof', label: '💧 Oil & Gravy Proof' },
    { id: 'peti', label: '📦 Wholesale Peti / Carton' }
  ];

  const toggleFilterChip = (chipId) => {
    setActiveFilterChips(prev => 
      prev.includes(chipId) ? prev.filter(c => c !== chipId) : [...prev, chipId]
    );
  };

  // Helper to parse price string for sorting
  const getPriceNumber = (priceStr) => {
    if (!priceStr) return 0;
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 999;
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = MASTER_PRODUCTS.filter(product => {
      // Category match
      const matchCat = selectedCategory === 'all' || product.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.spec.toLowerCase().includes(query) ||
        product.features.some(f => f.toLowerCase().includes(query));

      // Chips match
      let matchChips = true;
      if (activeFilterChips.length > 0) {
        matchChips = activeFilterChips.every(chip => {
          if (chip === 'compostable') {
            return product.badge.toLowerCase().includes('compostable') || 
                   product.badge.toLowerCase().includes('eco') ||
                   product.features.some(f => f.toLowerCase().includes('compostable') || f.toLowerCase().includes('biodegradable'));
          }
          if (chip === 'microwave') {
            return product.features.some(f => f.toLowerCase().includes('microwave') || f.toLowerCase().includes('oven') || f.toLowerCase().includes('heat'));
          }
          if (chip === 'oilproof') {
            return product.features.some(f => f.toLowerCase().includes('oil') || f.toLowerCase().includes('leak') || f.toLowerCase().includes('gravy') || f.toLowerCase().includes('grease'));
          }
          if (chip === 'peti') {
            return product.unit.toLowerCase().includes('peti') || 
                   product.unit.toLowerCase().includes('carton') || 
                   product.price.toLowerCase().includes('peti') ||
                   product.price.toLowerCase().includes('wholesale');
          }
          return true;
        });
      }

      return matchCat && matchSearch && matchChips;
    });

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === 'price-asc') {
        return getPriceNumber(a.price) - getPriceNumber(b.price);
      }
      if (sortBy === 'price-desc') {
        return getPriceNumber(b.price) - getPriceNumber(a.price);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      return 0; // 'featured' keeps original catalog order
    });

    return result;
  }, [selectedCategory, searchQuery, activeFilterChips, sortBy]);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
    setCalcQty(25);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  // Wholesale calculation helper in Quick View modal
  const basePriceNum = quickViewProduct ? getPriceNumber(quickViewProduct.price) : 100;
  const isEstimatedPrice = quickViewProduct && !quickViewProduct.price.includes('₹');
  const unitRate = isEstimatedPrice ? 120 : (basePriceNum || 120);
  const discountRate = calcQty >= 100 ? 0.20 : calcQty >= 50 ? 0.12 : calcQty >= 20 ? 0.06 : 0;
  const totalRaw = unitRate * calcQty;
  const discountAmt = Math.round(totalRaw * discountRate);
  const finalEst = totalRaw - discountAmt;

  return (
    <div className="page-container products-page-view">
      {/* Page Hero Section */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-eyebrow">B2B Master Catalog & Wholesale Distribution</span>
            <h1 className="page-hero-title">Commercial Eco-Tableware & Packaging</h1>
            <p className="page-hero-subtitle">
              Central India's most comprehensive catalog of 100% sugarcane bagasse plates, tamper-evident delivery containers, terracotta chai kulhads, and eco-certified hotel amenities.
            </p>

            <div className="page-hero-stats-row">
              <div className="page-stat-badge">
                <strong>20+</strong> Active Series
              </div>
              <div className="page-stat-badge">
                <strong>7</strong> Specialized Divisions
              </div>
              <div className="page-stat-badge">
                <strong>100%</strong> CPCB Compliant
              </div>
              <div className="page-stat-badge">
                <strong>24-48h</strong> Dispatch in Central India
              </div>
            </div>

            <div className="page-hero-actions-row">
              <button 
                type="button" 
                className="btn-pill btn-pill-coral"
                onClick={() => setIsCatalogModalOpen(true)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Download Wholesale Catalog PDF</span>
              </button>
              {onOpenSampleKit && (
                <button 
                  type="button" 
                  className="btn-pill btn-pill-outline-white"
                  onClick={onOpenSampleKit}
                >
                  <span>Request Physical Sample Kit</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Explorer Body */}
      <section className="catalog-explorer-section">
        <div className="container">
          {/* Controls Bar: Categories, Search, Filters & View Toggle */}
          <div className="explorer-controls-wrapper">
            {/* Category Switcher Tabs with smooth horizontal navigation */}
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
                aria-label="Catalog Divisions"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {CATEGORIES.map(cat => {
                  const count = cat.id === 'all' 
                    ? MASTER_PRODUCTS.length 
                    : MASTER_PRODUCTS.filter(p => p.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      role="tab"
                      aria-selected={selectedCategory === cat.id}
                      className={`category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <span>{cat.label}</span>
                      <span className="cat-count-pill">{count}</span>
                    </button>
                  );
                })}
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

            {/* Filter Chips & Search Bar */}
            <div className="explorer-subcontrols-bar">
              {/* Feature Chips */}
              <div className="filter-chips-row">
                <span className="filter-chips-label">Quick Filter:</span>
                {filterChips.map(chip => (
                  <button
                    key={chip.id}
                    type="button"
                    className={`filter-chip-btn ${activeFilterChips.includes(chip.id) ? 'active' : ''}`}
                    onClick={() => toggleFilterChip(chip.id)}
                  >
                    {chip.label}
                  </button>
                ))}
                {activeFilterChips.length > 0 && (
                  <button 
                    type="button" 
                    className="filter-clear-link"
                    onClick={() => setActiveFilterChips([])}
                  >
                    Reset Filters
                  </button>
                )}
              </div>

              {/* Search, Sort & View Mode Controls */}
              <div className="search-and-sort-group">
                <div className="search-box-wrapper">
                  <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search by name, spec, or feature..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search catalog products"
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

                {/* Sort Dropdown */}
                <div className="sort-selector-wrapper">
                  <label htmlFor="catalog-sort" className="sort-label">Sort:</label>
                  <select 
                    id="catalog-sort" 
                    className="sort-select-input"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured / Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="view-mode-toggle">
                  <button 
                    type="button" 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                    aria-label="Grid View"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                    </svg>
                  </button>
                  <button 
                    type="button" 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                    title="Detailed List / Spec View"
                    aria-label="List View"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
                      <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
                      <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Active Product Count Status */}
          <div className="catalog-meta-bar">
            <span className="results-count-text">
              Showing <strong>{filteredAndSortedProducts.length}</strong> products
              {selectedCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
          </div>

          {/* Product Items: Grid View vs List View */}
          {filteredAndSortedProducts.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="products-grid products-page-grid">
                {filteredAndSortedProducts.map((product, idx) => (
                  <article 
                    key={product.id} 
                    className="product-card animated-card"
                    style={{ animationDelay: `${Math.min(idx * 0.03, 0.35)}s` }}
                  >
                    <div className="product-img-box" onClick={() => handleOpenQuickView(product)}>
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
                      <div className="product-quick-view-hover">
                        <span>🔍 Click for Quick Specs</span>
                      </div>
                    </div>

                    <div className="product-body">
                      <h3 className="product-name" onClick={() => handleOpenQuickView(product)}>
                        {product.name}
                      </h3>
                      <p className="product-spec">{product.spec}</p>

                      <ul className="product-features-list">
                        {product.features.map((feat, fIdx) => (
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
                        <button
                          type="button"
                          className="btn-catalog-view-spec"
                          onClick={() => handleOpenQuickView(product)}
                        >
                          Quick View
                        </button>
                        <button 
                          type="button" 
                          className="btn-catalog-rfq"
                          onClick={() => onSelectProductForQuote(product.name)}
                          title="Request bulk wholesale quote"
                        >
                          Wholesale RFQ
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Detailed List View */
              <div className="products-list-view">
                {filteredAndSortedProducts.map((product, idx) => (
                  <div key={product.id} className="product-list-row animated-card">
                    <div className="product-list-thumb" onClick={() => handleOpenQuickView(product)}>
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <span className={`product-badge-pill ${product.badgeClass}`}>
                        {product.badge}
                      </span>
                    </div>

                    <div className="product-list-info">
                      <h3 className="product-list-name" onClick={() => handleOpenQuickView(product)}>
                        {product.name}
                      </h3>
                      <p className="product-list-spec">{product.spec}</p>
                      <div className="product-list-features-pills">
                        {product.features.map((feat, fIdx) => (
                          <span key={fIdx} className="list-feature-tag">✔ {feat}</span>
                        ))}
                      </div>
                    </div>

                    <div className="product-list-pricing">
                      <span className="list-price-amount">{product.price}</span>
                      <span className="list-price-unit">{product.unit}</span>
                    </div>

                    <div className="product-list-actions">
                      <button 
                        type="button" 
                        className="btn-list-view-btn"
                        onClick={() => handleOpenQuickView(product)}
                      >
                        Specs & Tiers
                      </button>
                      <button 
                        type="button" 
                        className="btn-catalog-rfq"
                        onClick={() => onSelectProductForQuote(product.name)}
                      >
                        RFQ
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="catalog-empty-state">
              <div className="empty-icon-circle">🔍</div>
              <p className="empty-title">No products match your criteria.</p>
              <p className="empty-subtitle">Try adjusting your filters, clearing your search keywords, or selecting "All Categories".</p>
              <button 
                type="button"
                className="btn-pill btn-pill-coral" 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setActiveFilterChips([]); }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <div className="modal-backdrop" onClick={handleCloseQuickView} role="dialog" aria-modal="true">
          <div className="quickview-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="quickview-close-btn"
              onClick={handleCloseQuickView}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="quickview-grid">
              {/* Product Image & Key Badges */}
              <div className="quickview-img-column">
                <div className="quickview-img-box">
                  <img src={quickViewProduct.image} alt={quickViewProduct.name} />
                  <span className={`quickview-badge ${quickViewProduct.badgeClass}`}>
                    {quickViewProduct.badge}
                  </span>
                </div>
                <div className="quickview-cert-pills">
                  <span>🌱 100% Biodegradable</span>
                  <span>🔥 -20°C to +140°C</span>
                  <span>🛡️ CPCB Approved</span>
                </div>
              </div>

              {/* Product Technical Details & Tier Pricing */}
              <div className="quickview-details-column">
                <span className="quickview-cat-label">
                  Division: {CATEGORIES.find(c => c.id === quickViewProduct.category)?.label}
                </span>
                <h2 className="quickview-title">{quickViewProduct.name}</h2>
                <p className="quickview-spec-lead">{quickViewProduct.spec}</p>

                <div className="quickview-specs-table">
                  <div className="spec-row">
                    <span className="spec-key">Base Material:</span>
                    <span className="spec-val">100% Natural Sugarcane Agri-Bagasse Fiber</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Packaging Standard:</span>
                    <span className="spec-val">{quickViewProduct.unit}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Leak & Oil Barrier:</span>
                    <span className="spec-val">Resistant to Hot Oil, Boiling Curries & Sambar</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Degradability:</span>
                    <span className="spec-val">Backyard Compostable in 90-180 Days</span>
                  </div>
                </div>

                {/* Wholesale Volume Estimator */}
                <div className="quickview-tier-box">
                  <h4 className="tier-box-title">Bulk Wholesale Rate Estimator</h4>
                  <div className="tier-input-row">
                    <label htmlFor="tier-packs-input">Estimated Packs Required:</label>
                    <div className="tier-counter">
                      <button type="button" onClick={() => setCalcQty(Math.max(5, calcQty - 10))}>-10</button>
                      <input 
                        id="tier-packs-input"
                        type="number" 
                        min="1" 
                        value={calcQty} 
                        onChange={(e) => setCalcQty(Math.max(1, parseInt(e.target.value) || 1))} 
                      />
                      <button type="button" onClick={() => setCalcQty(calcQty + 10)}>+10</button>
                    </div>
                  </div>

                  <div className="tier-summary-row">
                    <div className="tier-stat">
                      <span className="tier-stat-label">Estimated Wholesale Total:</span>
                      <span className="tier-stat-val">₹{finalEst.toLocaleString()}</span>
                    </div>
                    {discountRate > 0 && (
                      <div className="tier-stat discount">
                        <span className="tier-stat-label">Tier Savings:</span>
                        <span className="tier-stat-val-save">{Math.round(discountRate * 100)}% Off (₹{discountAmt})</span>
                      </div>
                    )}
                  </div>
                  <p className="tier-fineprint">*Rates are indicative for wholesale lots. GST & freight calculated at dispatch.</p>
                </div>

                {/* Direct Action Buttons */}
                <div className="quickview-actions-row">
                  <button 
                    type="button" 
                    className="btn-quickview-rfq"
                    onClick={() => {
                      handleCloseQuickView();
                      onSelectProductForQuote(`${quickViewProduct.name} (${calcQty} packs wholesale estimate)`);
                    }}
                  >
                    <span>Instant RFQ for this Item</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>

                  <a 
                    href={`https://wa.me/918378965139?text=Hello%20RDV,%20I%20am%20inquiring%20about%20Wholesale%20Rates%20for%20${encodeURIComponent(quickViewProduct.name)}%20(Estimated%20Quantity:%20${calcQty}%20packs).`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-quickview-whatsapp"
                    title="Direct WhatsApp Inquiry"
                  >
                    <span>WhatsApp Quote</span>
                  </a>

                  {quickViewProduct.orderUrl && quickViewProduct.orderUrl.startsWith('http') && (
                    <a 
                      href={quickViewProduct.orderUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-quickview-store"
                    >
                      Demo Store Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Catalog Download Modal */}
      {isCatalogModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsCatalogModalOpen(false)} role="dialog" aria-modal="true">
          <div className="catalog-download-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="quickview-close-btn"
              onClick={() => setIsCatalogModalOpen(false)}
            >
              &times;
            </button>

            <div className="modal-catalog-icon">📑</div>
            <h3 className="modal-catalog-title">RDV Master Product Catalog (2026 Edition)</h3>
            <p className="modal-catalog-desc">
              Download our comprehensive 28-page B2B Price Matrix, containing full specifications, carton dimensions, pallet quantities, and test certificates for Sugarcane Bagasse, Paper Packaging, Terracotta, and Hotel Amenities.
            </p>

            <div className="catalog-download-box">
              <div className="download-item-row">
                <div>
                  <strong>RDV Complete Wholesale Catalog.pdf</strong>
                  <span className="file-size-tag">14.2 MB • High Resolution</span>
                </div>
                <a 
                  href="https://vyaparapp.in/store/smitadisposableandplastics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-coral btn-sm"
                  onClick={() => setIsCatalogModalOpen(false)}
                >
                  Download / View Online
                </a>
              </div>
            </div>

            <p className="catalog-modal-note">
              Need custom printing or distributor contracts? Call our wholesale team directly at <a href="tel:8378965139">+91 8378965139</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
