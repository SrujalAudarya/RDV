import React, { useState, useRef, useEffect } from 'react';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // Mouse drag state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const testimonials = [
    {
      id: 1,
      category: 'banquet',
      quote: "Switching from thermocol to RDV's 10-inch 3-compartment sugarcane bagasse plates was the best decision for our banquet hall. Even with piping-hot dal makhani, boiling gravies, and heavy rice, the plates stay rigid and never leak or bend. Our wedding hosts are delighted by the premium eco-chic look.",
      author: 'Chef Anant Deshmukh',
      role: 'Executive Chef & F&B Manager',
      company: 'Grand Heritage Banquets & Lawns',
      location: 'Wardha Road, Nagpur',
      rating: 5,
      avatar: '👨‍🍳',
      highlight: 'Zero Gravy Leakage'
    },
    {
      id: 2,
      category: 'cloud-kitchen',
      quote: "We ship over 450 takeaway meals every single day. RDV's 123 MM round sealable containers with snap-fit lids have completely eliminated our transit spill complaints. Most importantly, we passed municipal CPCB plastic ban inspections with zero hassle and full paperwork.",
      author: 'Pooja Agarwal',
      role: 'Founder & Head of Operations',
      company: 'Bowl & Box Cloud Kitchens',
      location: 'Nagpur & Raipur Hubs',
      rating: 5,
      avatar: '👩‍💼',
      highlight: 'Airtight Delivery'
    },
    {
      id: 3,
      category: 'hotel',
      quote: "RDV handles our complete hotel supply—from luxury eco-kraft guest dental and shaving kits to restaurant buffet thalis. Having their central warehouse right in Khamla, Nagpur means emergency dispatches reach us within 24 hours.",
      author: 'Vikramaditya Shinde',
      role: 'General Manager',
      company: 'The Green Leaf Resort & Spa',
      location: 'Pench & Central India',
      rating: 5,
      avatar: '🏨',
      highlight: '24-Hour Dispatch'
    },
    {
      id: 4,
      category: 'catering',
      quote: "Their handcrafted earthen chai kulhads and square 3CP thalis gave our live wedding catering counters an authentic, royal heritage touch. Their direct factory wholesale rates saved our catering firm nearly 15% compared to local retail traders.",
      author: 'Sanjay Kulkarni',
      role: 'Master Caterer & Proprietor',
      company: 'Shree Krishna Catering Services',
      location: 'Dharampeth, Nagpur',
      rating: 5,
      avatar: '🍲',
      highlight: '15% Bulk Savings'
    },
    {
      id: 5,
      category: 'bakery',
      quote: "For our premium festival gift hampers and assorted pastries, finding certified food-grade, chlorine-free compostable boxes was critical. RDV delivers consistent thickness, zero odor, and custom branding die-cuts that our corporate gifting clients love.",
      author: 'Rajesh Agrawal',
      role: 'Managing Director',
      company: 'Agrawal Sweets & Mithaiwala Chain',
      location: 'Sitabuldi & Sadar, Nagpur',
      rating: 5,
      avatar: '🧁',
      highlight: 'FSSAI & PFAS Free'
    },
    {
      id: 6,
      category: 'hospital',
      quote: "In patient dietary services, avoiding chemical leaching from warm plastic containers is paramount. RDV's bagasse meal trays withstand autoclave and microwave reheating up to 140°C without leaching harmful additives or odors.",
      author: 'Dr. Meenakshi Sundaram',
      role: 'Director of Healthcare Operations',
      company: 'Central India Hospital & Health Hub',
      location: 'Ramdaspeth, Nagpur',
      rating: 5,
      avatar: '🩺',
      highlight: 'Microplastic-Free Care'
    },
    {
      id: 7,
      category: 'restro',
      quote: "Our tandoori platters and sizzlers require heavy-duty tableware that does not soften under grease. RDV's 5-compartment bagasse plates have zero oil soaking even after 45 minutes on dining tables.",
      author: 'Kunal Vardhan',
      role: 'Culinary Director',
      company: 'The Spice Route Restro-Bar & Lounges',
      location: 'Civil Lines, Nagpur',
      rating: 5,
      avatar: '🍽️',
      highlight: 'Heat Resistant 140°C'
    },
    {
      id: 8,
      category: 'association',
      quote: "Municipal corporations across Maharashtra are enforcing severe single-use plastic fines. RDV provides genuine CPCB PWM-2022 compliant certification and CIPET test reports with every single wholesale invoice.",
      author: 'Nitin Gadre',
      role: 'President',
      company: 'Vidarbha Institutional Caterers Association',
      location: 'Nagpur & Amravati Region',
      rating: 5,
      avatar: '📜',
      highlight: '100% CPCB Shield'
    }
  ];

  const filtered = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeTab);

  // Update scroll arrow states
  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, [filtered]);

  // Auto-rotation with break: every 3.8 seconds, scroll forward unless hovered or touched
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const el = scrollContainerRef.current;
      const card = el.querySelector('.testimonial-card');
      const step = card ? card.offsetWidth + 24 : 360;

      // If at end, wrap back to start smoothly
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, filtered]);

  // Manual scroll buttons
  const scrollStep = (direction) => {
    if (!scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    const card = el.querySelector('.testimonial-card');
    const step = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  // Mouse wheel horizontal scroll handler
  const handleWheel = (e) => {
    if (!scrollContainerRef.current || e.deltaY === 0) return;
    // Allow natural wheel translation to horizontal scrolling
    scrollContainerRef.current.scrollLeft += e.deltaY;
  };

  // Mouse drag to scroll handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Verified Institutional Feedback</span>
          <h2 className="section-title">Trusted by 500+ Hoteliers, Caterers & Food Hubs</h2>
          <p className="section-subtitle">
            See how leading food service brands across Central India eliminated plastic penalties, delighted dinner guests, and streamlined wholesale supplies with Renuka Designers Villa.
          </p>
        </div>

        {/* Aggregate Credibility Stats Bar */}
        <div className="testimonials-stats-strip">
          <div className="t-stat-item">
            <span className="t-stat-number">4.9 / 5.0</span>
            <span className="t-stat-label">★★★★★ Average Client Rating</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat-item">
            <span className="t-stat-number">500+</span>
            <span className="t-stat-label">Active Commercial Partners</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat-item">
            <span className="t-stat-number">10M+</span>
            <span className="t-stat-label">Plastic Units Replaced</span>
          </div>
          <div className="t-stat-divider" />
          <div className="t-stat-item">
            <span className="t-stat-number">99.8%</span>
            <span className="t-stat-label">On-Time Central India Dispatch</span>
          </div>
        </div>

        {/* Top Controls: Filter Tabs + Horizontal Scroll Arrows */}
        <div className="testimonials-top-controls">
          <div className="testimonials-filter-tabs">
            <button 
              type="button"
              className={`t-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Feedback ({testimonials.length})
            </button>
            <button 
              type="button"
              className={`t-tab-btn ${activeTab === 'banquet' ? 'active' : ''}`}
              onClick={() => setActiveTab('banquet')}
            >
              Banquets & Lawns
            </button>
            <button 
              type="button"
              className={`t-tab-btn ${activeTab === 'cloud-kitchen' ? 'active' : ''}`}
              onClick={() => setActiveTab('cloud-kitchen')}
            >
              Cloud Kitchens
            </button>
            <button 
              type="button"
              className={`t-tab-btn ${activeTab === 'hotel' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotel')}
            >
              Hotels & Resorts
            </button>
            <button 
              type="button"
              className={`t-tab-btn ${activeTab === 'catering' ? 'active' : ''}`}
              onClick={() => setActiveTab('catering')}
            >
              Wedding Caterers
            </button>
          </div>

          <div className="testimonials-scroll-nav-btns">
            <button 
              type="button" 
              className={`t-nav-arrow-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scrollStep('left')}
              title="Scroll left"
              aria-label="Scroll testimonials left"
              disabled={!canScrollLeft}
            >
              ‹
            </button>
            <span className="t-auto-rotate-badge" title="Auto-rotates with pause on hover">
              {isPaused ? '⏸ Paused (Hold)' : '▶ Auto-Rotating'}
            </span>
            <button 
              type="button" 
              className={`t-nav-arrow-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scrollStep('right')}
              title="Scroll right"
              aria-label="Scroll testimonials right"
              disabled={!canScrollRight}
            >
              ›
            </button>
          </div>
        </div>

        {/* Horizontal Testimonials Scroll Row (Multiple in one row, auto-rotates with break on hover) */}
        <div 
          className="testimonials-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseUp();
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="testimonials-horizontal-row"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {filtered.map(item => (
              <div key={item.id} className="testimonial-card">
                <div className="t-card-header">
                  <div className="t-avatar-box">{item.avatar}</div>
                  <div className="t-author-meta">
                    <h3 className="t-author-name">{item.author}</h3>
                    <p className="t-author-role">{item.role}</p>
                    <span className="t-company-tag">{item.company} • {item.location}</span>
                  </div>
                  <span className="t-highlight-pill">{item.highlight}</span>
                </div>

                <div className="t-stars-row">
                  {'★'.repeat(item.rating)}
                  <span className="t-verified-badge">✔ Verified Institutional Client</span>
                </div>

                <p className="t-quote-text">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scroll Helper Hint */}
        <div className="testimonials-scroll-hint">
          <span>👈 Swipe, drag, or use arrows ‹ › to explore all {filtered.length} client stories • Pauses on hover 👉</span>
        </div>

        {/* Bottom CTA Strip */}
        <div className="testimonials-footer-cta">
          <p>Want to join 500+ satisfied food businesses transitioning to certified eco-tableware?</p>
          <div className="t-cta-actions">
            <a href="#inquiry" className="btn-pill btn-pill-coral">
              Request Wholesale Quote
            </a>
            <a 
              href="https://wa.me/918378965139?text=Hello%20RDV,%20I%20would%20like%20to%20know%20more%20about%20your%20commercial%20client%20references%20and%20pricing." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-pill btn-pill-outline-dark"
            >
              Chat With Our Hospitality Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
