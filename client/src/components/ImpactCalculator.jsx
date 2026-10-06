import React, { useState } from 'react';

export default function ImpactCalculator() {
  const [monthlyPieces, setMonthlyPieces] = useState(15000);

  // Calculations based on bagasse environmental data
  // ~25 grams of single-use plastic replaced per plate/container
  const plasticAvoidedKg = Math.round((monthlyPieces * 0.025));
  // ~0.04 kg CO2e saved per piece compared to Styrofoam/plastic
  const co2SavedKg = Math.round((monthlyPieces * 0.04));
  // Compost created: ~70% of bagasse mass turns to rich soil compost
  const compostKg = Math.round((monthlyPieces * 0.020));

  return (
    <section className="impact-section" id="impact">
      <div className="container">
        <div className="impact-card">
          <div className="impact-grid">
            {/* Left Controls */}
            <div>
              <span className="section-eyebrow">Eco Impact Assessment</span>
              <h2 className="section-title" style={{ fontSize: '2.1rem' }}>
                Calculate Your Environmental Savings
              </h2>
              <p className="section-subtitle" style={{ fontSize: '0.98rem', marginBottom: '20px' }}>
                See how much toxic plastic waste and carbon emissions your establishment eliminates by switching to Renuka Designers Villa 100% compostable tableware.
              </p>

              <div className="impact-slider-control">
                <div className="slider-label-row">
                  <span style={{ color: 'var(--text-secondary)' }}>Estimated Monthly Plates / Containers:</span>
                  <strong style={{ color: 'var(--forest-green)', fontSize: '1.25rem' }}>
                    {monthlyPieces.toLocaleString()} pcs / mo
                  </strong>
                </div>

                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={monthlyPieces}
                  onChange={(e) => setMonthlyPieces(Number(e.target.value))}
                  className="slider-input"
                  aria-label="Monthly tableware pieces slider"
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <span>2,000 pcs (Cafe / Small Dining)</span>
                  <span>50,000 pcs</span>
                  <span>1,00,000 pcs (Banquets / QSR)</span>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a href="#inquiry" className="btn btn-primary">
                  Switch to Eco Tableware Today
                </a>
              </div>
            </div>

            {/* Right Metric Cards */}
            <div className="impact-results-grid">
              <div className="impact-stat-box">
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🚫</div>
                <div className="impact-number">{plasticAvoidedKg.toLocaleString()} kg</div>
                <div className="impact-stat-label">Plastic Waste Kept Out of Landfills</div>
              </div>

              <div className="impact-stat-box">
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>☁️</div>
                <div className="impact-number">{co2SavedKg.toLocaleString()} kg</div>
                <div className="impact-stat-label">CO₂ Emissions Prevented Annually</div>
              </div>

              <div className="impact-stat-box">
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🌱</div>
                <div className="impact-number">{compostKg.toLocaleString()} kg</div>
                <div className="impact-stat-label">Rich Organic Soil Compost Produced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
