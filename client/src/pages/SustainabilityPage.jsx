import React, { useState } from 'react';

export default function SustainabilityPage({ onOpenSampleKit, onNavigateInquiry }) {
  const [dailyMeals, setDailyMeals] = useState(300);

  // Calculations for eco offset
  const daysInYear = 365;
  const annualMeals = dailyMeals * daysInYear;
  // Avg single-use plastic meal package weighs ~35 grams
  const plasticSavedKg = Math.round((annualMeals * 0.035));
  // Avg bagasse produces ~28 grams of nutrient compost
  const compostGeneratedKg = Math.round((annualMeals * 0.028));
  // CO2 offset: ~2.4 kg CO2 saved per kg of plastic replaced
  const co2OffsetTonnes = ((plasticSavedKg * 2.4) / 1000).toFixed(1);

  const bioCycleSteps = [
    {
      num: '01',
      title: 'Sugarcane Agro-Waste Upcycling',
      desc: 'Instead of burning dry sugarcane bagasse in fields after juice extraction, the raw agricultural fiber is collected and cleaned, preventing seasonal stubble smoke emissions.',
      icon: '🌾',
      tag: 'Zero Trees Cut'
    },
    {
      num: '02',
      title: 'Non-Toxic Thermoforming',
      desc: 'The pulp is molded under 180°C high-pressure steam without harmful chemical chlorine bleaches, PFOS, or synthetic binders, creating a rigid structural matrix.',
      icon: '⚙️',
      tag: 'PFAS & BPA Free'
    },
    {
      num: '03',
      title: 'Heavy-Duty Commercial Service',
      desc: 'Used in 5-star buffets, wedding catering, and cloud kitchen deliveries. Withstands boiling curries, gravies, microwave reheating up to 140°C, and freezer storage down to -20°C.',
      icon: '🍲',
      tag: 'Leak & Oil Proof'
    },
    {
      num: '04',
      title: 'Backyard Composting in 90-180 Days',
      desc: 'After disposal, RDV tableware naturally degrades in garden soil or commercial composting units, turning into nutrient-rich humus with absolutely zero toxic microplastics.',
      icon: '🌱',
      tag: '100% Circular'
    }
  ];

  const comparisonData = [
    {
      feature: 'Biodegradation Time',
      bagasse: '90 - 180 Days (Natural Soil)',
      plastic: '450 - 1000 Years',
      thermocol: 'Never Degrades (Crumbles into microplastics)',
      coatedPaper: 'Requires chemical industrial stripping'
    },
    {
      feature: 'CPCB 2022 Plastic Ban Status',
      bagasse: '100% Permitted & Promoted',
      plastic: 'Strictly Prohibited & Fined',
      thermocol: 'Strictly Banned Nationwide',
      coatedPaper: 'Restricted under single-use plastic norms'
    },
    {
      feature: 'Microwave Safe (Up to 140°C)',
      bagasse: 'Yes (Does not warp or melt)',
      plastic: 'Leaches harmful phthalates',
      thermocol: 'Melts & releases toxic styrene carcinogens',
      coatedPaper: 'Glue melts, structural failure'
    },
    {
      feature: 'Hot Gravy & Oil Resistance',
      bagasse: 'Excellent (Natural fibrous barrier)',
      plastic: 'Good, but toxic under heat',
      thermocol: 'Weak, easily punctured by utensils',
      coatedPaper: 'Prone to sogginess and leaks'
    },
    {
      feature: 'Carbon Footprint',
      bagasse: 'Net Carbon Negative Upcycling',
      plastic: 'High fossil fuel extraction emissions',
      thermocol: 'Extreme petroleum lifecycle emissions',
      coatedPaper: 'Requires tree cutting & bleaching'
    }
  ];

  return (
    <div className="page-container sustainability-page-view">
      {/* Hero Banner */}
      <section className="page-hero-banner sustainability-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-eyebrow">Zero Plastic • Zero Landfill • 100% Earth</span>
            <h1 className="page-hero-title">The Science of Sugarcane Bagasse & Circular Hospitality</h1>
            <p className="page-hero-subtitle">
              How agricultural residue from Indian sugarcane farms transforms into luxury commercial tableware, withstands boiling curries, and returns to soil as organic compost.
            </p>

            <div className="sustainability-hero-stats">
              <div className="hero-stat-card">
                <span className="stat-num">90-180</span>
                <span className="stat-label">Days to Natural Soil Humus</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-num">0%</span>
                <span className="stat-label">Microplastics Generated</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-num">140°C</span>
                <span className="stat-label">Microwave Heat Resistance</span>
              </div>
              <div className="hero-stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-label">CPCB & CIPET Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 90-Day Circular Bio-Cycle */}
      <section className="biocycle-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Closed-Loop Life Cycle</span>
            <h2 className="section-title">The 4-Stage 90-Day Journey from Soil to Soil</h2>
            <p className="section-subtitle">
              Every RDV plate or meal container is crafted entirely from reclaimed sugarcane stalks, completely avoiding tree logging and petrochemical extraction.
            </p>
          </div>

          <div className="biocycle-grid">
            {bioCycleSteps.map((step, idx) => (
              <div key={idx} className="biocycle-card">
                <div className="biocycle-top-row">
                  <span className="biocycle-step-num">{step.num}</span>
                  <span className="biocycle-icon">{step.icon}</span>
                </div>
                <h3 className="biocycle-title">{step.title}</h3>
                <span className="biocycle-tag-pill">{step.tag}</span>
                <p className="biocycle-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Carbon & Plastic Offset Estimator */}
      <section className="interactive-calc-section">
        <div className="container">
          <div className="calc-interactive-card">
            <div className="calc-intro-column">
              <span className="section-eyebrow">Hospitality Impact Engine</span>
              <h2 className="calc-main-title">Estimate Your Establishment’s Environmental Impact</h2>
              <p className="calc-main-desc">
                Adjust your venue's estimated daily meal or takeaway count to see how much non-degradable single-use plastic waste your brand can eliminate per year by partnering with RDV.
              </p>

              <div className="calc-slider-box">
                <div className="slider-header">
                  <label htmlFor="daily-meals-slider" className="slider-label">Daily Meals / Takeaway Orders:</label>
                  <span className="slider-val-badge">{dailyMeals.toLocaleString()} Meals / Day</span>
                </div>
                <input 
                  id="daily-meals-slider"
                  type="range" 
                  min="50" 
                  max="2000" 
                  step="25"
                  value={dailyMeals}
                  onChange={(e) => setDailyMeals(parseInt(e.target.value, 10))}
                  className="interactive-range-slider"
                />
                <div className="slider-quick-presets">
                  <button type="button" onClick={() => setDailyMeals(150)}>Café (150)</button>
                  <button type="button" onClick={() => setDailyMeals(400)}>Cloud Kitchen (400)</button>
                  <button type="button" onClick={() => setDailyMeals(800)}>Banquets (800)</button>
                  <button type="button" onClick={() => setDailyMeals(1500)}>Hotel Chain (1,500)</button>
                </div>
              </div>
            </div>

            <div className="calc-results-column">
              <div className="result-metric-box">
                <div className="metric-icon">🛡️</div>
                <div className="metric-text">
                  <span className="metric-number">{plasticSavedKg.toLocaleString()} kg</span>
                  <span className="metric-title">Single-Use Plastic Landfill Waste Prevented</span>
                </div>
              </div>

              <div className="result-metric-box">
                <div className="metric-icon">🌍</div>
                <div className="metric-text">
                  <span className="metric-number">{co2OffsetTonnes} Tonnes</span>
                  <span className="metric-title">Greenhouse Carbon Emissions Abated Annually</span>
                </div>
              </div>

              <div className="result-metric-box">
                <div className="metric-icon">🌱</div>
                <div className="metric-text">
                  <span className="metric-number">{compostGeneratedKg.toLocaleString()} kg</span>
                  <span className="metric-title">Organic Farm Compost Created for Natural Soil</span>
                </div>
              </div>

              <button 
                type="button" 
                className="btn-pill btn-pill-coral btn-block"
                onClick={onOpenSampleKit}
              >
                <span>Request Green Certification Sample Kit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Material Matrix */}
      <section className="comparison-matrix-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Rigorous Testing</span>
            <h2 className="section-title">Sugarcane Bagasse vs Alternative Materials</h2>
            <p className="section-subtitle">
              Comprehensive side-by-side performance comparison based on laboratory testing and Central Pollution Control Board (CPCB) standards.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Performance Metric</th>
                  <th className="highlight-column">RDV Sugarcane Bagasse</th>
                  <th>Single-Use Plastic</th>
                  <th>Thermocol (EPS)</th>
                  <th>PE Coated Paper</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="metric-name-cell">{row.feature}</td>
                    <td className="highlight-column metric-bagasse-cell">
                      <span className="check-bullet">✔</span> {row.bagasse}
                    </td>
                    <td className="negative-cell">{row.plastic}</td>
                    <td className="negative-cell">{row.thermocol}</td>
                    <td className="neutral-cell">{row.coatedPaper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Official Certifications & Compliance */}
      <section className="certifications-compliance-section">
        <div className="container">
          <div className="compliance-banner-card">
            <div className="compliance-text">
              <span className="section-eyebrow">Institutional Peace of Mind</span>
              <h2 className="compliance-title">100% Certified for Commercial Compliance</h2>
              <p className="compliance-desc">
                Operating a hotel, banquet hall, or cloud kitchen requires strict regulatory adherence. All RDV tableware batches comply with CPCB single-use plastic guidelines, CIPET biodegradable migration testing, and international US FDA 21 CFR standards.
              </p>

              <div className="compliance-badges-grid">
                <div className="compliance-badge-item">
                  <div className="badge-shield">🏛️</div>
                  <div>
                    <h4>CPCB Plastic Ban Compliant</h4>
                    <p>PWM Rules 2022 Certified</p>
                  </div>
                </div>
                <div className="compliance-badge-item">
                  <div className="badge-shield">🔬</div>
                  <div>
                    <h4>CIPET Biodegradable Tested</h4>
                    <p>Central Institute of Petrochemicals</p>
                  </div>
                </div>
                <div className="compliance-badge-item">
                  <div className="badge-shield">🥗</div>
                  <div>
                    <h4>US FDA 21 CFR Compliant</h4>
                    <p>Direct Food Contact Approved</p>
                  </div>
                </div>
                <div className="compliance-badge-item">
                  <div className="badge-shield">🛡️</div>
                  <div>
                    <h4>ISO 9001:2015 Facility</h4>
                    <p>Cleanroom Quality Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
