/**
 * RDV - Renuka Designers Villa
 * Master Catalog Data (All 7 Pages of Catalog)
 * Eco-friendly tableware, commercial packaging, hotel amenities & institutional supplies
 */

export const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'bagasse', label: '100% Compostable Bagasse' },
  { id: 'containers', label: 'Containers & Delivery Trays' },
  { id: 'paper', label: 'Paper Bowls & Wok Boxes' },
  { id: 'terracotta', label: 'Terracotta Kulhads & Handis' },
  { id: 'amenities', label: 'Hotel & Guest Amenities' },
  { id: 'bakery', label: 'Bakery Boxes & Bags' },
  { id: 'housekeeping', label: 'Housekeeping & Mops' }
];

export const MASTER_PRODUCTS = [
  // Division 1: 100% Compostable Bagasse Tableware
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

  // Division 2: Food Delivery Containers & Trays
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

  // Division 3: Paper Packaging, Bowls & PSB Boxes
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

  // Division 4: Traditional Terracotta & Earthenware
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

  // Division 5: Luxury Hotel & Guest Amenities
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

  // Division 6: Bakery, Confectionery & Bags
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
  {
    id: 'bk-4',
    name: 'B.O.P.S Crystal Containers, Muffin Cups & Cookie Jars',
    category: 'bakery',
    badge: 'Confectionery',
    badgeClass: 'badge-gold',
    spec: 'Crystal Clear Jars, Ladoo Cups & High-Clarity Cookie Boxes',
    price: 'Direct Wholesale',
    unit: 'Pack of 100/500',
    features: ['Crystal Clarity', 'Food Grade Air-Tight', 'Sweet Shop Standard'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },

  // Division 7: Institutional Housekeeping & Cleaning
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
  },
  {
    id: 'hk-3',
    name: 'Floor Wet Mops, Dry Mops & Stainless Steel Scrubbers',
    category: 'housekeeping',
    badge: 'Cleaning Materials',
    badgeClass: 'badge-earth',
    spec: 'Floor Wipers, Cotton Dusters, Glass & Kitchen Scrubbers',
    price: 'Trade Pack',
    unit: 'Dozen / Bundles',
    features: ['Commercial Grade', 'Durable Scrubbing', 'Hospital & Hotel Ready'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  }
];
