import React, { useState, useMemo } from 'react';
import { CATEGORIES, MASTER_PRODUCTS } from '../data/masterCatalog.js';

export default function ProductCatalog({ 
  onSelectProductForQuote, 
  externalCategory = 'all', 
  onCategoryChange 
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategory = externalCategory || 'all';

  const handleCategoryClick = (catId) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
  };

  const filteredProducts = useMemo(() => {
    return MASTER_PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.spec.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="catalog-section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Institutional Product Catalog</span>
          <h2 className="section-title">Commercial Eco Tableware & Packaging</h2>
          <p className="section-subtitle">
            100% sugarcane bagasse compartment trays, heavy-duty dinner plates, leak-proof delivery containers, wooden cutlery, and greaseproof wrapping paper.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="catalog-filter-bar">
          <div className="category-tabs-scroll" role="tablist" aria-label="Product categories">
            {CATEGORIES.map(cat => (
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
          </div>

          <div className="search-box-wrapper">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search plates, trays, bowls, cutlery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
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
        </div>

        {/* Products Grid with CHUK-Style Micro-Animations */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid" key={activeCategory}>
            {filteredProducts.map((product, idx) => (
              <article 
                key={product.id} 
                className="product-card animated-card"
                style={{ animationDelay: `${Math.min(idx * 0.04, 0.4)}s` }}
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
            <p className="empty-title">No products found matching your search.</p>
            <p className="empty-subtitle">Try searching for "plate", "tray", "bowl", or select "All Products".</p>
            <button 
              type="button"
              className="btn-pill btn-pill-coral" 
              onClick={() => { handleCategoryClick('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
