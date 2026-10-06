import express from 'express';
import { supabase, isConfigured, localStore } from '../config/supabase.js';

const router = express.Router();

// Master products data served through API
const PRODUCTS = [
  {
    id: 'hk-1',
    name: 'Commercial M-Fold & C-Fold Paper Napkins',
    category: 'housekeeping',
    badge: 'Hygiene & Housekeeping',
    badgeClass: 'badge-teal',
    spec: 'Virgin Pulp High Absorbency Napkins & Rolls',
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
    badgeClass: 'badge-teal',
    spec: 'All Sizes: Small, Medium, Large, XL & Biohazard',
    price: 'Factory Price',
    unit: 'Per Roll / Peti',
    features: ['Tear Resistant', 'Leak-proof Base', 'Wet & Dry Waste'],
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'hk-3',
    name: 'Floor Wet Mops, Dry Mops & Stainless Steel Scrubber Juna',
    category: 'housekeeping',
    badge: 'Cleaning Materials',
    badgeClass: 'badge-teal',
    spec: 'Floor Wipers, Cotton Dusters, Glass & Toilet Cleaners',
    price: 'Trade Pack',
    unit: 'Dozen / Bundles',
    features: ['Commercial Grade', 'Durable Scrubbing', 'Hospital & Hotel Ready'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'fc-1',
    name: '123 MM Dia Round Sealable Containers with Lids',
    category: 'containers',
    badge: 'Meal Packaging',
    badgeClass: 'badge-amber',
    spec: 'Black & Transparent Options (250ml to 1200ml)',
    price: '₹110',
    unit: 'per Pac (50 pcs)',
    features: ['100% Microwave Safe', 'Airtight Snap Lid', 'Spill Proof Gravy'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa208115d2207073f78/163fc716dfa20_81_12.jpg?v=1744808923742',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'fc-2',
    name: 'Rectangular Food Trays with Lid 190*140 Series',
    category: 'containers',
    badge: 'Takeaway Trays',
    badgeClass: 'badge-amber',
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
    badgeClass: 'badge-amber',
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
    badgeClass: 'badge-amber',
    spec: 'RO-Series (350ml - 1600ml) & Dip Containers (25ml - 70ml)',
    price: 'Direct Wholesale',
    unit: 'Packs of 50/100',
    features: ['Locking Security Tab', 'Crystal Clear Clarity', 'Sauce & Chutney Dips'],
    image: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bg-1',
    name: '10" Round 3-CP Sugarcane Bagasse Plate (25 pcs)',
    category: 'bagasse',
    badge: '100% Compostable',
    badgeClass: 'badge-eco',
    spec: '3-Compartment Dinner Plate | 100% Sugarcane Bagasse',
    price: '₹130',
    unit: 'per Pac (25 pcs)',
    features: ['100% Home Compostable', 'Microwave & Oven Safe', 'Oil & Leak Proof'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa2010910ac82d034fa8/163fc716dfa20_109_6.jpg?v=1744724851977',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bg-2',
    name: '10" Square 3-CP Sugarcane Bagasse Plate (25 pcs)',
    category: 'bagasse',
    badge: '100% Compostable',
    badgeClass: 'badge-eco',
    spec: 'Premium Square Thali Plate with 3 Sections',
    price: '₹138',
    unit: 'per Pac (25 pcs)',
    features: ['Modern Geometric Design', 'Deep Spill-Resistant Divs', 'B2B Wholesale'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa2011011d5f331edcaf/163fc716dfa20_110_8.jpg?v=1744870152815',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bg-3',
    name: '10" Round Plain Sugarcane Bagasse Plate (25 pcs)',
    category: 'bagasse',
    badge: '100% Compostable',
    badgeClass: 'badge-eco',
    spec: 'Heavy Duty Buffet & Catering Dinner Plate',
    price: '₹130',
    unit: 'per Pac (25 pcs)',
    features: ['Natural Sugarcane Fiber', 'Rigid & Sturdy', 'Freezer Safe to -20°C'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa201081055c2ed9fab0/163fc716dfa20_108_7.jpg?v=1744724940097',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'bg-4',
    name: '100% Biodegradable Cornstarch Cutlery (Spoons, Forks)',
    category: 'bagasse',
    badge: 'Cornstarch Eco',
    badgeClass: 'badge-eco',
    spec: 'Plant-Based Heavy Duty Spoons, Forks & Knives',
    price: 'Wholesale Peti',
    unit: '1000 pcs / Carton',
    features: ['Zero Plastic', 'Smooth Mouthfeel', 'Heat Resistant'],
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=500&auto=format&fit=crop&q=60',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'pp-1',
    name: '1000 ml Kraft Paper Boat Tray (50 pcs)',
    category: 'paper',
    badge: 'Food Packaging',
    badgeClass: 'badge-teal',
    spec: 'Heavy GSM Food Boat for Chaat, Fries, Pav Bhaji & Snacks',
    price: '₹325',
    unit: 'per Pac (50 pcs)',
    features: ['High GSM Food Board', 'Grease & Oil Resistant', 'Easy Grab & Go'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa209614e70c55bf680/163fc716dfa20_96_16.jpg?v=1744809255303',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'pp-2',
    name: 'White & Brown PSB Food Boxes (500 ML - 1600 ML)',
    category: 'paper',
    badge: 'PSB Food Boxes',
    badgeClass: 'badge-teal',
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
    badgeClass: 'badge-teal',
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
    badgeClass: 'badge-teal',
    spec: 'Corrugated Pizza Boxes (7", 8", 10", 12", 14") & Fries Pockets',
    price: 'Order on Basis',
    unit: 'Cartons of 100/250',
    features: ['Full Color Custom Logo', 'Steam Vents Included', 'Crispy Crust Retention'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'am-1',
    name: 'Luxury Hotel Dental & Shaving Kits',
    category: 'amenities',
    badge: 'Hotel Amenities',
    badgeClass: 'badge-pink',
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
    badgeClass: 'badge-pink',
    spec: 'Natural Polished Wood Hangers with Notches & Trouser Bar',
    price: 'Contract Price',
    unit: 'Bundles of 50 pcs',
    features: ['Heavy Duty Wood', 'Chrome Swivel Hook', 'Anti-Slip Crossbar'],
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'am-3',
    name: 'Guest Bathroom Slippers & Toiletry Kits',
    category: 'amenities',
    badge: 'Guest Care',
    badgeClass: 'badge-pink',
    spec: 'Non-Woven Soft Slippers, Shower Caps, Sewing Kits & Shoe Horns',
    price: 'Per Unit Bulk',
    unit: 'Master Cartons',
    features: ['Hygienic Disposable', 'Comfort Sole', 'Complete Guest Experience'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'tc-1',
    name: '100 ml Traditional Earthen Clay Kullad Peti (100 pcs)',
    category: 'terracotta',
    badge: 'Pure Terracotta',
    badgeClass: 'badge-terracotta',
    spec: 'Natural River Clay Chai & Coffee Kulhads | Fired Terracotta',
    price: '₹220',
    unit: 'per Box (100 pcs Peti)',
    features: ['100% Natural River Clay', 'Authentic Earthen Aroma', 'Biodegradable & Toxin-Free'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa20992a07e882e30d0/163fc716dfa20_99_13.jpg?v=1744808968340',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  },
  {
    id: 'tc-2',
    name: 'Handcrafted Clay Biryani Handis with Lid Seals',
    category: 'terracotta',
    badge: 'Dum Cooking Special',
    badgeClass: 'badge-terracotta',
    spec: 'Dum Biryani Earthen Pots with Matching Clay Lids',
    price: 'Wholesale Lot',
    unit: 'Cartons of 20/40 pcs',
    features: ['Authentic Dum Cooking', 'Retains Rich Aroma', 'Table Presentation Hit'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'bk-1',
    name: 'Dry Cake & Pastry Packaging Boxes with Window',
    category: 'bakery',
    badge: 'Bakery Solutions',
    badgeClass: 'badge-pink',
    spec: '1/2 kg, 1 kg Cake Boxes & Pastry Bases in Gold/Silver',
    price: 'Wholesale Pack',
    unit: 'Bundles of 50 pcs',
    features: ['Food Grade Board', 'Clear View Window', 'Sturdy Base Board'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60',
    orderUrl: '#inquiry'
  },
  {
    id: 'bk-2',
    name: '10 mm High-GSM Paper Straws (50 pcs)',
    category: 'bakery',
    badge: 'Eco Drinkware',
    badgeClass: 'badge-teal',
    spec: 'Food Grade Thick Paper Shake & Beverage Straws',
    price: '₹65',
    unit: 'per Pac (50 pcs)',
    features: ['No Soggy Ends (4+ hours)', 'Shake & Smoothie Ready', '100% Recyclable'],
    image: 'https://vyapar-catalog.vypcdn.in/163fc716dfa20/163fc716dfa2038cbbc31885a167/163fc716dfa20_38_10.jpg?v=1744725120045',
    orderUrl: 'https://vyaparapp.in/store/smitadisposableandplastics'
  }
];

// GET /api/products
router.get('/products', (req, res) => {
  const { category, search } = req.query;
  let results = [...PRODUCTS];

  if (category && category !== 'all') {
    results = results.filter(p => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.spec.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q))
    );
  }

  res.json({
    success: true,
    count: results.length,
    data: results
  });
});

// POST /api/inquiries
router.post('/inquiries', async (req, res) => {
  try {
    const { fullName, phone, businessName, city, productCategory, orderVolume, notes } = req.body;

    if (!fullName || !phone || !businessName) {
      return res.status(400).json({ success: false, message: 'Please provide full name, phone number, and business name.' });
    }

    const payload = {
      full_name: fullName,
      phone,
      business_name: businessName,
      city: city || 'Nagpur',
      product_category: productCategory || 'General Inquiry',
      order_volume: orderVolume || 'Wholesale',
      notes: notes || '',
      created_at: new Date().toISOString()
    };

    if (isConfigured && supabase) {
      const { data, error } = await supabase.from('wholesale_inquiries').insert([payload]).select();
      if (error) throw error;
      return res.status(201).json({ success: true, message: 'Inquiry saved to Supabase', data: data[0] });
    } else {
      const record = localStore.addInquiry(payload);
      return res.status(201).json({ success: true, message: 'Inquiry received and queued locally', data: record });
    }
  } catch (error) {
    console.error('Inquiry error:', error);
    res.status(500).json({ success: false, message: 'Failed to process inquiry', error: error.message });
  }
});

// POST /api/samples
router.post('/samples', async (req, res) => {
  try {
    const { contactName, phone, establishmentType, deliveryAddress } = req.body;

    if (!contactName || !phone) {
      return res.status(400).json({ success: false, message: 'Contact name and phone number are required.' });
    }

    const payload = {
      contact_name: contactName,
      phone,
      establishment_type: establishmentType || 'Restaurant',
      delivery_address: deliveryAddress || '',
      created_at: new Date().toISOString()
    };

    if (isConfigured && supabase) {
      const { data, error } = await supabase.from('sample_requests').insert([payload]).select();
      if (error) throw error;
      return res.status(201).json({ success: true, message: 'Sample request saved to Supabase', data: data[0] });
    } else {
      const record = localStore.addSample(payload);
      return res.status(201).json({ success: true, message: 'Sample request queued locally', data: record });
    }
  } catch (error) {
    console.error('Sample request error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit sample request', error: error.message });
  }
});

// GET /api/health
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    business: 'RDV - Renuka Designers Villa',
    gstin: '27AVPPT8792E1ZN',
    database: isConfigured ? 'Supabase (Connected)' : 'Local Fallback (Active)',
    timestamp: new Date().toISOString()
  });
});

export default router;
