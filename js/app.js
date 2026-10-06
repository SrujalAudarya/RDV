/**
 * RDV - RENUKA DESIGNERS VILLA
 * Clean Eco Tableware & Packaging Interactive Logic (Inspired by CHUK)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmartSlider();
  initMasterCatalog();
  initImpactCalculator();
  initInquiryForm();
  initBackToTop();
});

/* ===================================================================
   1. Navbar Scroll Effect & Mobile Menu
   =================================================================== */
/* ===================================================================
   1. Navbar Scroll Effect & CHUK Dropdown Menu
   =================================================================== */
function initNavbar() {
  const header = document.querySelector('.main-header');
  const toggleBtn = document.getElementById('menuToggleBtn');
  const menuCard = document.getElementById('chukMenuCard');
  const backdrop = document.getElementById('menuBackdrop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (toggleBtn && menuCard) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menuCard.style.display === 'block';
      if (isOpen) {
        closeChukMenu();
      } else {
        openChukMenu();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeChukMenu();
    });
  }

  // Handle Accordion Submenu Toggles (Products ▾, News ▾, Blog ▾)
  document.querySelectorAll('.chuk-menu-item.has-dropdown').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const toggleId = item.getAttribute('data-toggle');
      const submenu = document.getElementById(toggleId);
      const caret = item.querySelector('.chuk-caret');
      
      if (submenu) {
        const isShown = submenu.style.display === 'block';
        // Close all other submenus first
        document.querySelectorAll('.chuk-submenu').forEach(sub => sub.style.display = 'none');
        document.querySelectorAll('.chuk-menu-item.has-dropdown').forEach(btn => btn.classList.remove('is-expanded'));
        document.querySelectorAll('.chuk-caret').forEach(c => c.classList.remove('rotated'));

        if (!isShown) {
          submenu.style.display = 'block';
          item.classList.add('is-expanded');
          caret?.classList.add('rotated');
        }
      }
    });
  });

  // Handle direct navigation items inside menu
  document.querySelectorAll('.chuk-menu-item[data-target], .chuk-submenu-item[data-target]').forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-target');
      if (targetId) {
        closeChukMenu();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Handle category filter inside products submenu
  document.querySelectorAll('.chuk-submenu-item[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      closeChukMenu();
      const targetElement = document.querySelector('#products');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      // If category tab exists in catalog, click it
      if (cat) {
        const catBtn = document.querySelector(`.category-tab-btn[data-category="${cat}"]`);
        if (catBtn) {
          catBtn.click();
        }
      }
    });
  });

  // Escape key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeChukMenu();
    }
  });

  // Smooth scroll for all other anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          closeChukMenu();
        }
      }
    });
  });
}

function openChukMenu() {
  const toggleBtn = document.getElementById('menuToggleBtn');
  const menuCard = document.getElementById('chukMenuCard');
  const backdrop = document.getElementById('menuBackdrop');
  if (!menuCard) return;

  menuCard.style.display = 'block';
  if (backdrop) backdrop.style.display = 'block';
  toggleBtn?.classList.add('active');
  const hamburger = toggleBtn?.querySelector('.icon-hamburger');
  const close = toggleBtn?.querySelector('.icon-close');
  if (hamburger) hamburger.style.display = 'none';
  if (close) close.style.display = 'block';
}

function closeChukMenu() {
  const toggleBtn = document.getElementById('menuToggleBtn');
  const menuCard = document.getElementById('chukMenuCard');
  const backdrop = document.getElementById('menuBackdrop');
  if (!menuCard) return;

  menuCard.style.display = 'none';
  if (backdrop) backdrop.style.display = 'none';
  toggleBtn?.classList.remove('active');
  const hamburger = toggleBtn?.querySelector('.icon-hamburger');
  const close = toggleBtn?.querySelector('.icon-close');
  if (hamburger) hamburger.style.display = 'block';
  if (close) close.style.display = 'none';
}

/* ===================================================================
   2. Master Product Catalog (All 7 Divisions, Zero CHUK Branding)
   =================================================================== */
const PRODUCTS = [
  // 100% Bagasse Eco Tableware
  {
    id: 'bg-1',
    name: '10" Round 3-Compartment Sugarcane Bagasse Plate',
    category: 'bagasse',
    badge: '100% Compostable',
    badgeClass: 'badge-eco',
    spec: '3-Compartment Dinner Plate | 100% Agri-Fiber Sugarcane Bagasse',
    price: '₹130',
    unit: 'per Pac (25 pcs)',
    features: ['100% Backyard Compostable', 'Microwave & Oven Safe to 140°C', 'Oil, Gravy & Leak Proof'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa2010910ac82d034fa8/163fc716dfa20_109_6.jpg?v=1744724851977',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bg-2',
    name: '10" Square 3-Compartment Sugarcane Bagasse Plate',
    category: 'bagasse',
    badge: 'Eco Luxury Thali',
    badgeClass: 'badge-eco',
    spec: 'Premium Square Thali Plate with 3 Deep Compartments',
    price: '₹138',
    unit: 'per Pac (25 pcs)',
    features: ['Modern Geometric Edge', 'Deep Spill-Resistant Dividers', 'High Rigidity for Buffets'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa2011011d5f331edcaf/163fc716dfa20_110_8.jpg?v=1744870152815',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bg-3',
    name: '10" Round Plain Sugarcane Bagasse Buffet Plate',
    category: 'bagasse',
    badge: 'Heavy Duty Buffet',
    badgeClass: 'badge-eco',
    spec: 'Heavy Duty Buffet & Catering Large Flat Dinner Plate',
    price: '₹130',
    unit: 'per Pac (25 pcs)',
    features: ['Natural Unbleached Sugarcane Fiber', 'Rigid Structure', 'Freezer Safe down to -20°C'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa201081055c2ed9fab0/163fc716dfa20_108_7.jpg?v=1744724940097',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bg-4',
    name: '100% Biodegradable Cornstarch Cutlery (Spoons, Forks)',
    category: 'bagasse',
    badge: 'Plant-Based Eco',
    badgeClass: 'badge-eco',
    spec: 'Plant-Based Heavy Duty Spoons, Forks & Knives Set',
    price: 'Wholesale Peti',
    unit: '1,000 pcs / Carton',
    features: ['Zero Plastic', 'Smooth Premium Mouthfeel', 'Heat Resistant with Hot Soups'],
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },

  // Food Delivery Containers
  {
    id: 'fc-1',
    name: '123 MM Dia Round Sealable Containers with Lids',
    category: 'containers',
    badge: 'Meal Packaging',
    badgeClass: 'badge-gold',
    spec: 'Black & Transparent Options (250ml to 1200ml)',
    price: '₹110',
    unit: 'per Pac (50 pcs)',
    features: ['100% Microwave Safe', 'Airtight Snap Lid', 'Spill Proof Gravy Seal'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa208115d2207073f78/163fc716dfa20_81_12.jpg?v=1744808923742',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'fc-2',
    name: 'Rectangular Food Trays with Lid 190*140 Series',
    category: 'containers',
    badge: 'Takeaway Trays',
    badgeClass: 'badge-gold',
    spec: '400 ML - 1800 ML Capacities | Clear & Black',
    price: '₹145',
    unit: 'per Pac (50 pcs)',
    features: ['Deep Cavity', 'Stackable Ridges', 'Cloud Kitchen Standard'],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'fc-3',
    name: 'Combo Meal Platter Trays (2CP, 3CP, 4CP, 5CP, 8CP)',
    category: 'containers',
    badge: 'Banquets & Platters',
    badgeClass: 'badge-gold',
    spec: 'Sectional Meal Platter Trays with Clear Dome Lids',
    price: 'Wholesale Lot',
    unit: 'per Carton',
    features: ['Separate Dal/Curry Cavities', 'Zero Flavor Mixing', 'Catering Special'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'fc-4',
    name: 'Tamper-Proof & RO Series Containers with Lid',
    category: 'containers',
    badge: 'Tamper Proof',
    badgeClass: 'badge-gold',
    spec: 'RO-Series (350ml - 1600ml) & Dip Containers (25ml - 70ml)',
    price: 'Direct Wholesale',
    unit: 'Packs of 50/100',
    features: ['Locking Security Tab', 'Crystal Clear Clarity', 'Sauce & Chutney Dips'],
    image: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },

  // Paper Packaging
  {
    id: 'pp-1',
    name: '1000 ml Kraft Paper Boat Tray (50 pcs)',
    category: 'paper',
    badge: 'Food Packaging',
    badgeClass: 'badge-earth',
    spec: 'Heavy GSM Food Boat for Chaat, Fries, Pav Bhaji & Snacks',
    price: '₹325',
    unit: 'per Pac (50 pcs)',
    features: ['High GSM Food Board', 'Grease & Oil Resistant', 'Easy Grab & Go Service'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa209614e70c55bf680/163fc716dfa20_96_16.jpg?v=1744809255303',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'pp-2',
    name: 'White & Brown PSB Food Boxes (500 ML - 1600 ML)',
    category: 'paper',
    badge: 'PSB Food Boxes',
    badgeClass: 'badge-earth',
    spec: 'Leak Proof Folded Meal & Curry Boxes with Flaps',
    price: 'Wholesale Pack',
    unit: 'per Pac (50 pcs)',
    features: ['Food Grade PE Lined', 'Hot Gravy Safe', 'Eco Takeaway Design'],
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'pp-3',
    name: 'Asian Wok Boxes & Rippled Paper Containers (500-900ml)',
    category: 'paper',
    badge: 'Wok & Noodle Boxes',
    badgeClass: 'badge-earth',
    spec: 'Round Base & Flap Top Wok Containers for Chinese & Rice',
    price: 'Direct Wholesale',
    unit: '50 pcs / Sleeve',
    features: ['Foldable Wire Handle Ready', 'Keeps Food Steaming Hot', 'Branding Available'],
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'pp-4',
    name: 'Customized Pizza, Burger & French Fries Boxes',
    category: 'paper',
    badge: 'Custom Printing',
    badgeClass: 'badge-earth',
    spec: 'Corrugated Pizza Boxes (7", 8", 10", 12", 14") & Fries Pockets',
    price: 'Order on Basis',
    unit: 'Cartons of 100/250',
    features: ['Full Color Custom Logo', 'Steam Vents Included', 'Crispy Crust Retention'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },

  // Terracotta Kulhads & Handis
  {
    id: 'tc-1',
    name: '100 ml Traditional Earthen Clay Kullad Peti (100 pcs)',
    category: 'terracotta',
    badge: 'Pure Terracotta',
    badgeClass: 'badge-clay',
    spec: 'Natural River Clay Chai & Coffee Kulhads | Kiln Fired Terracotta',
    price: '₹220',
    unit: 'per Box (100 pcs Peti)',
    features: ['100% Natural River Clay', 'Authentic Earthen Aroma', '100% Biodegradable & Toxin-Free'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa20992a07e882e30d0/163fc716dfa20_99_13.jpg?v=1744808968340',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'tc-2',
    name: 'Handcrafted Clay Biryani Handis with Lid Seals',
    category: 'terracotta',
    badge: 'Dum Cooking Special',
    badgeClass: 'badge-clay',
    spec: 'Dum Biryani Earthen Pots with Matching Fitted Clay Lids',
    price: 'Wholesale Lot',
    unit: 'Cartons of 20/40 pcs',
    features: ['Authentic Dum Cooking', 'Retains Rich Aroma', 'Table Presentation Hit'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },

  // Hotel Amenities
  {
    id: 'am-1',
    name: 'Luxury Hotel Dental & Shaving Kits',
    category: 'amenities',
    badge: 'Hotel Amenities',
    badgeClass: 'badge-luxury',
    spec: 'Sealed Eco Kraft / Foil Packaging with Toothpaste & Razor',
    price: 'Wholesale Rates',
    unit: 'Boxes of 100 Kits',
    features: ['Sanitized Seal', 'Soft Bristle Brush', 'Custom Hotel Branding Option'],
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'am-2',
    name: 'Premium Wooden & Satin Garment Hangers',
    category: 'amenities',
    badge: 'Wardrobe Essentials',
    badgeClass: 'badge-luxury',
    spec: 'Natural Polished Wood Hangers with Notches & Trouser Bar',
    price: 'Contract Price',
    unit: 'Bundles of 50 pcs',
    features: ['Heavy Duty Hardwood', 'Chrome Swivel Hook', 'Anti-Slip Crossbar'],
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'am-3',
    name: 'Guest Bathroom Slippers & Toiletry Kits',
    category: 'amenities',
    badge: 'Guest Care',
    badgeClass: 'badge-luxury',
    spec: 'Non-Woven Soft Slippers, Shower Caps, Sewing Kits & Shoe Horns',
    price: 'Per Unit Bulk',
    unit: 'Master Cartons',
    features: ['Hygienic Disposable', 'Comfort Sole', 'Complete Hospitality Package'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },

  // Bakery, Confectionery & Bags
  {
    id: 'bk-1',
    name: 'Dry Cake & Pastry Packaging Boxes with Window',
    category: 'bakery',
    badge: 'Bakery Range',
    badgeClass: 'badge-earth',
    spec: '1/2 kg, 1 kg Cake Boxes & Pastry Bases in Gold/Silver',
    price: 'Wholesale Pack',
    unit: 'Bundles of 50 pcs',
    features: ['Food Grade Board', 'Clear View Window', 'Sturdy High-GSM Base Board'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'bk-2',
    name: '10 mm High-GSM Paper Straws (50 pcs)',
    category: 'bakery',
    badge: 'Eco Drinkware',
    badgeClass: 'badge-eco',
    spec: 'Food Grade Extra Thick Paper Shake & Beverage Straws',
    price: '₹65',
    unit: 'per Pac (50 pcs)',
    features: ['No Soggy Ends (4+ hours)', 'Thick Shake & Smoothie Ready', '100% Recyclable'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa2038cbbc31885a167/163fc716dfa20_38_10.jpg?v=1744725120045',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bk-3',
    name: 'Custom Branded Paper Carry Bags & Retail Bags',
    category: 'bakery',
    badge: 'Custom Branding',
    badgeClass: 'badge-earth',
    spec: 'Kraft, White & Color Paper Shopping Bags with Twisted Handles',
    price: 'Printed on Order',
    unit: 'Lots of 500/1000',
    features: ['High Tensile Strength', 'Full Color Logo Print', 'Luxury Retail Finish'],
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },

  // Housekeeping & Cleaning
  {
    id: 'hk-1',
    name: 'Commercial M-Fold & C-Fold Paper Napkins',
    category: 'housekeeping',
    badge: 'Hygiene & Clean',
    badgeClass: 'badge-eco',
    spec: 'Virgin Pulp High Absorbency Napkins & Dispenser Rolls',
    price: 'Wholesale Rates',
    unit: 'Bulk Cartons',
    features: ['High Absorbency', 'Lint Free', 'Hotel & Restaurant Grade'],
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'hk-2',
    name: 'Heavy Duty Black Garbage Bags & Zip Lock Pouches',
    category: 'housekeeping',
    badge: 'Janitorial Supplies',
    badgeClass: 'badge-earth',
    spec: 'All Sizes: Small, Medium, Large, XL & Biohazard Rolls',
    price: 'Factory Price',
    unit: 'Per Roll / Peti',
    features: ['Tear Resistant', 'Leak-proof Star Base', 'Wet & Dry Waste'],
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  }
];

function initMasterCatalog() {
  const grid = document.getElementById('products-grid');
  const tabs = document.querySelectorAll('.category-tab-btn');
  const searchInput = document.getElementById('catalog-search');

  let activeCategory = 'all';
  let searchTerm = '';

  function render() {
    if (!grid) return;

    const filtered = PRODUCTS.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchTerm) || 
                          p.spec.toLowerCase().includes(searchTerm) ||
                          p.features.some(f => f.toLowerCase().includes(searchTerm));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
          <p style="font-size: 1.2rem; margin-bottom: 12px;">No products match your search.</p>
          <button class="btn btn-secondary" onclick="resetCatalogFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <article class="product-card" data-category="${p.category}">
        <div class="product-img-box">
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
          <span class="product-badge-pill ${p.badgeClass}">${p.badge}</span>
        </div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-spec">${p.spec}</p>
          <ul class="product-features-list">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="product-pricing-row">
            <span class="product-price">${p.price}</span>
            <span class="product-unit">${p.unit}</span>
          </div>
          <div class="product-action-buttons">
            <a href="${p.orderUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-store">
              Demo Store
            </a>
            <button type="button" class="btn btn-sm btn-primary" onclick="selectForQuotation('${p.name}')">
              Quick RFQ
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  window.resetCatalogFilters = function() {
    activeCategory = 'all';
    searchTerm = '';
    if (searchInput) searchInput.value = '';
    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-filter') === 'all'));
    render();
  };

  window.selectForQuotation = function(productName) {
    const inquiryField = document.getElementById('notes');
    const formElement = document.getElementById('inquiry');
    if (inquiryField) {
      inquiryField.value = `Interested in wholesale quotation and sample kit for: ${productName}`;
    }
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-filter');
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      render();
    });
  }

  render();
}

/* ===================================================================
   3. Eco Sustainability Calculator
   =================================================================== */
function initImpactCalculator() {
  const slider = document.getElementById('plate-slider');
  const countDisplay = document.getElementById('plate-count-display');
  const plasticDisplay = document.getElementById('metric-plastic');
  const co2Display = document.getElementById('metric-co2');
  const compostDisplay = document.getElementById('metric-compost');

  if (!slider) return;

  function update() {
    const val = parseInt(slider.value, 10);
    if (countDisplay) countDisplay.textContent = `${val.toLocaleString()} pcs / mo`;

    // Metric formulas
    const plasticKg = Math.round(val * 0.025);
    const co2Kg = Math.round(val * 0.04);
    const compostKg = Math.round(val * 0.020);

    if (plasticDisplay) plasticDisplay.textContent = `${plasticKg.toLocaleString()} kg`;
    if (co2Display) co2Display.textContent = `${co2Kg.toLocaleString()} kg`;
    if (compostDisplay) compostDisplay.textContent = `${compostKg.toLocaleString()} kg`;
  }

  slider.addEventListener('input', update);
  update();
}

/* ===================================================================
   4. Inquiry Form Submission & Direct WhatsApp RFQ
   =================================================================== */
function initInquiryForm() {
  const form = document.getElementById('rfq-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';

    const payload = {
      fullName: document.getElementById('fullName')?.value || '',
      phone: document.getElementById('phone')?.value || '',
      businessName: document.getElementById('businessName')?.value || '',
      city: document.getElementById('city')?.value || 'Nagpur',
      productCategory: document.getElementById('productCategory')?.value || 'General Inquiry',
      orderVolume: document.getElementById('orderVolume')?.value || 'Wholesale Lot',
      notes: document.getElementById('notes')?.value || ''
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Connecting to Wholesale Desk...';
    }

    try {
      // 1. Post to Node.js backend
      await fetch('http://localhost:5001/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.log('Backend notification:', err));

      // 2. Open WhatsApp RFQ
      const msg = `*New Wholesale Inquiry - RDV Tableware Portal*%0A%0A` +
        `👤 *Contact Person:* ${encodeURIComponent(payload.fullName)}%0A` +
        `📞 *Phone:* ${encodeURIComponent(payload.phone)}%0A` +
        `🏢 *Business / Venue:* ${encodeURIComponent(payload.businessName)}%0A` +
        `📦 *Category / Product:* ${encodeURIComponent(payload.productCategory)}%0A` +
        `📊 *Order Volume:* ${encodeURIComponent(payload.orderVolume)}%0A` +
        `📍 *Location:* ${encodeURIComponent(payload.city)}%0A` +
        `📝 *Specific Requirements:* ${encodeURIComponent(payload.notes)}`;

      const whatsappUrl = `https://wa.me/918378965139?text=${msg}`;
      window.open(whatsappUrl, '_blank');

      if (submitBtn) {
        submitBtn.innerHTML = '✓ Inquiry Sent & Redirected to WhatsApp!';
        submitBtn.style.background = '#2E7D32';
      }

      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }
      }, 5000);
    } catch (err) {
      console.error(err);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  });
}

/* ===================================================================
   5. Back to Top Button
   =================================================================== */
function initBackToTop() {
  const topBtn = document.querySelector('.floating-top');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===================================================================
   6. Sample Kit Modal Logic
   =================================================================== */
window.openSampleKitModal = function() {
  const modal = document.getElementById('sample-kit-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
};

window.closeSampleKitModal = function() {
  const modal = document.getElementById('sample-kit-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const sampleForm = document.getElementById('sample-kit-form');
  if (sampleForm) {
    sampleForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = sampleForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Preparing Dispatch...';
      }

      const name = document.getElementById('modal-sample-name')?.value || '';
      const restaurant = document.getElementById('modal-sample-restaurant')?.value || '';
      const phone = document.getElementById('modal-sample-phone')?.value || '';
      const city = document.getElementById('modal-sample-city')?.value || '';
      const address = document.getElementById('modal-sample-address')?.value || '';

      const checkedItems = Array.from(sampleForm.querySelectorAll('input[name="sample_item"]:checked'))
        .map(cb => cb.value);

      try {
        await fetch('http://localhost:5001/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            company: restaurant,
            phone,
            city,
            message: `Free Sample Kit Request: ${checkedItems.join(', ')}. Delivery Address: ${address}`,
            productInterest: 'Free Commercial Sample Kit'
          })
        });
      } catch (err) {
        console.warn('API submission notice:', err);
      }

      const waText = encodeURIComponent(
        `*FREE COMMERCIAL SAMPLE KIT REQUEST - RENUKA DESIGNERS VILLA*\n\n` +
        `*Contact Name:* ${name}\n` +
        `*Business/Restaurant:* ${restaurant}\n` +
        `*Phone:* ${phone}\n` +
        `*City:* ${city}\n` +
        `*Delivery Address:* ${address}\n\n` +
        `*Samples Selected:*\n` +
        checkedItems.map(item => `• ${item}`).join('\n') +
        `\n\nPlease confirm our free courier dispatch tracking. Thank you!`
      );

      const waUrl = `https://wa.me/918378965139?text=${waText}`;

      const modalDialog = document.querySelector('.modal-dialog-box');
      if (modalDialog) {
        modalDialog.innerHTML = `
          <button class="modal-close-btn" onclick="closeSampleKitModal()" aria-label="Close">&times;</button>
          <div class="modal-success-view">
            <div class="success-icon-bubble">✓</div>
            <h3 class="success-title">Sample Kit Request Sent!</h3>
            <p class="success-desc">Thank you, <strong>${name}</strong>. Your sample request for <strong>${restaurant}</strong> is being processed.</p>
            <p class="success-subdesc">Direct WhatsApp dispatch confirmation is opening right now.</p>
            <button type="button" class="btn-pill btn-pill-coral" style="margin-top: 20px;" onclick="closeSampleKitModal()">Back to Catalog</button>
          </div>
        `;
      }

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);
    });
  }
});

/* ===================================================================
   7. Smart Design Interactive Slider Logic (Matching CHUK Screenshot)
   =================================================================== */
function initSmartSlider() {
  const section = document.getElementById('smart-design');
  if (!section) return;

  const slides = [
    {
      eyebrow: 'RDV is',
      title: 'Smart by Design',
      desc: 'Award-winning range with built-in compartments, so every dish stays perfectly portioned and mess-free.',
      tag: '4 & 5 Compartment Thalis',
      image: 'assets/rdv-smart-compartment-plate.jpg',
      category: 'meal-trays'
    },
    {
      eyebrow: 'RDV is',
      title: '100% Spill-Proof',
      desc: 'Deep interlocked sugarcane bagasse fibers and airtight lids handle hot gravies, dal makhani, and biryani with zero leakage.',
      tag: 'Heavy-Duty Bowls & Lids',
      image: 'assets/rdv-spillproof-bowls.jpg',
      category: 'bowls-containers'
    },
    {
      eyebrow: 'RDV is',
      title: 'Oven & Freezer Safe',
      desc: 'Tested thermal stability from -20°C freezer storage up to 140°C microwave and oven reheating. Direct from kitchen to customer.',
      tag: 'Thermal Endurance -20°C to 140°C',
      image: 'assets/rdv-restaurant-hero.jpg',
      category: 'heavy-plates'
    },
    {
      eyebrow: 'RDV is',
      title: 'Backyard Compostable',
      desc: 'Naturally decomposes in 60 to 90 days into rich organic soil humus. Zero petroleum plastics, zero toxic PFAS coatings, 100% earth-positive.',
      tag: '100% Sugarcane Agricultural Residue',
      image: 'assets/rdv-tableware-stack.jpg',
      category: 'all'
    }
  ];

  const track = document.getElementById('smart-slider-track');
  const slideItems = track ? track.querySelectorAll('.smart-slide-item') : [];
  const prevBtn = document.getElementById('slider-prev-btn');
  const nextBtn = document.getElementById('slider-next-btn');

  let currentIndex = 0;
  let timer = null;
  const slideCount = slideItems.length || 4;

  function renderSlide(idx) {
    currentIndex = (idx + slideCount) % slideCount;
    if (track) {
      track.style.transition = 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)';
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  function nextSlide() {
    renderSlide(currentIndex + 1);
  }

  function prevSlide() {
    renderSlide(currentIndex - 1);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, 3500);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  // Mobile swipe support
  let touchStartX = 0;
  section.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  section.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 45) {
      prevSlide();
      startAutoplay();
    } else if (deltaX < -45) {
      nextSlide();
      startAutoplay();
    }
  }, { passive: true });

  startAutoplay();
}

/* ===================================================================
   8. Back to Top Smooth Scroll Logic
   =================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


