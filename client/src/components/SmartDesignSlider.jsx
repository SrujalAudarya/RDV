import React, { useState, useEffect, useRef, useCallback } from 'react';
import plateImg from '../assets/rdv-smart-compartment-plate.jpg';
import bowlsImg from '../assets/rdv-spillproof-bowls.jpg';
import heroImg from '../assets/rdv-restaurant-hero.jpg';
import stackImg from '../assets/rdv-tableware-stack.jpg';

const SLIDES = [
  {
    id: 1,
    eyebrow: 'RDV is',
    title: 'Smart by Design',
    desc: 'Award-winning range with built-in compartments, so every dish stays perfectly portioned and mess-free.',
    tag: '4 & 5 Compartment Thalis',
    image: plateImg,
    alt: 'RDV Smart 4-Compartment Bagasse Meal Plate with Indian Dishes',
    category: 'meal-trays'
  },
  {
    id: 2,
    eyebrow: 'RDV is',
    title: '100% Spill-Proof',
    desc: 'Deep interlocked sugarcane bagasse fibers and airtight lids handle hot gravies, dal makhani, and biryani with zero leakage.',
    tag: 'Heavy-Duty Bowls & Lids',
    image: bowlsImg,
    alt: 'RDV Spill-Proof Bagasse Containers with Lids',
    category: 'bowls-containers'
  },
  {
    id: 3,
    eyebrow: 'RDV is',
    title: 'Oven & Freezer Safe',
    desc: 'Tested thermal stability from -20°C freezer storage up to 140°C microwave and oven reheating. Direct from kitchen to customer.',
    tag: 'Thermal Endurance -20°C to 140°C',
    image: heroImg,
    alt: 'RDV Microwave and Oven Safe Tableware',
    category: 'heavy-plates'
  },
  {
    id: 4,
    eyebrow: 'RDV is',
    title: 'Backyard Compostable',
    desc: 'Naturally decomposes in 60 to 90 days into rich organic soil humus. Zero petroleum plastics, zero toxic PFAS coatings, 100% earth-positive.',
    tag: '100% Sugarcane Agricultural Residue',
    image: stackImg,
    alt: 'RDV 100% Compostable Bagasse Tableware Stack',
    category: 'all'
  }
];

// Extended slides for infinite seamless right-to-left glide
const EXTENDED_SLIDES = [
  { ...SLIDES[SLIDES.length - 1], uniqueKey: 'clone-prev' },
  ...SLIDES.map((s) => ({ ...s, uniqueKey: `orig-${s.id}` })),
  { ...SLIDES[0], uniqueKey: 'clone-next' }
];

export default function SmartDesignSlider({ onSelectCategory }) {
  // Start at index 1 (the first real slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const timerRef = useRef(null);
  const touchStartXRef = useRef(null);

  const totalExtended = EXTENDED_SLIDES.length;

  // Move right to left (next slide)
  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Move left to right (previous slide)
  const prevSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(nextSlide, 3500);
  }, [nextSlide]);

  const handlePrevClick = () => {
    prevSlide();
    resetAutoplay();
  };

  const handleNextClick = () => {
    nextSlide();
    resetAutoplay();
  };

  // Continuous auto-rotate every 3.5s
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  // Handle seamless infinite transition jump
  const handleTransitionEnd = () => {
    if (currentIndex === totalExtended - 1) {
      // Reached the clone of slide 0 -> jump silently to real slide 0 (index 1)
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached the clone of last slide -> jump silently to real last slide (index 4)
      setWithTransition(false);
      setCurrentIndex(SLIDES.length);
    }
  };

  // Re-enable smooth transition after silent jump
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  // Mobile swipe gestures
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX > 45) {
      handlePrevClick();
    } else if (deltaX < -45) {
      handleNextClick();
    }
    touchStartXRef.current = null;
  };

  const handleCtaClick = (cat) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    const target = document.getElementById('products');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="smart-design-section"
      id="smart-design"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="RDV Product Design Showcase"
    >
      <div className="container smart-slider-viewport">
        {/* Left Arrow Button */}
        <button
          type="button"
          className="slider-arrow-btn slider-arrow-prev"
          onClick={handlePrevClick}
          aria-label="Previous slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Carousel Window: Shows only 1 slide at a time */}
        <div className="smart-slider-window">
          <div
            className="smart-slider-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: withTransition ? 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {EXTENDED_SLIDES.map((slide, idx) => (
              <div className="smart-slide-item" key={`${slide.uniqueKey}-${idx}`}>
                <div className="smart-slide-content">
                  {/* Left Column: Text */}
                  <div className="smart-slide-text">
                    <span className="smart-slide-eyebrow">{slide.eyebrow}</span>
                    <h2 className="smart-slide-title">{slide.title}</h2>
                    <p className="smart-slide-desc">{slide.desc}</p>

                    <div className="smart-slide-actions">
                      <span className="smart-slide-badge">{slide.tag}</span>
                      <button
                        type="button"
                        className="btn-pill btn-pill-white smart-slide-cta"
                        onClick={() => handleCtaClick(slide.category)}
                      >
                        Explore Products &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Rotating Background Shape + Static Stand-Alone Dish */}
                  <div className="smart-slide-visual">
                    <div className="smart-visual-wrapper">
                      <div className="organic-blob-shape rotating-bg-shape" aria-hidden="true" />
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="smart-plate-image static-stand-alone"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          className="slider-arrow-btn slider-arrow-next"
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
