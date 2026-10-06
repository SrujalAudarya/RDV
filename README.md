# RDV — Renuka Designers Villa (Full-Stack Catalog & Distribution Portal)

A high-performance, modern full-stack web application designed for **Renuka Designers Villa (RDV)**, Nagpur's premier institutional distributor for 100% compostable sugarcane bagasse tableware, commercial food delivery packaging, luxury hotel amenities, traditional terracotta kulhads, and industrial housekeeping supplies.

---

## 🌟 Architecture & Technology Stack

| Layer | Technology | Description |
|---|---|---|
| **Frontend** | **React 19 + JavaScript (Vite)** | Ultra-fast SPA with clean, light eco-luxury styling (natural warm linen backgrounds, deep forest green accents, crisp white cards), dynamic category filtering, live search, interactive eco-impact calculator, showroom gallery, and direct WhatsApp RFQ generator. |
| **Backend** | **Node.js + Express (ES Modules)** | Robust RESTful API handling product catalog querying, inquiry processing, sample requests, and health telemetry. |
| **Database** | **Supabase (PostgreSQL)** | Cloud SQL database with Row Level Security (RLS) for wholesale inquiries and sample requests, featuring automatic in-memory fallback for zero-downtime offline testing. |
| **Styling** | **Vanilla CSS Design System** | Clean, organic eco-minimalist design system inspired by sustainable dining aesthetics with deep forest green (`#1E4D2B`), fresh leaf green (`#2E7D32`), warm natural linen (`#FAF8F5`), and crisp typography. |

---

## 🚀 Quick Start Guide

### 1. Start the Node.js Backend Server
```powershell
cd c:\Users\chaud\Documents\RDV\server
npm install
npm start
```
* Backend runs on **`http://localhost:5001`**
* Test health endpoint: `http://localhost:5001/api/health`

### 2. Start the React Frontend Application
```powershell
cd c:\Users\chaud\Documents\RDV\client
npm install
npm run dev
```
* React dev server runs on **`http://localhost:3000`**

### 3. Production Build
```powershell
cd c:\Users\chaud\Documents\RDV\client
npm run build
npm run preview
```

---

## 🗄️ Supabase Database Configuration

The application is pre-configured with a dual-mode storage engine:
1. **Cloud Supabase Mode**: If `.env` contains your Supabase credentials, inquiries and sample requests persist directly to your cloud PostgreSQL database.
2. **Local Fallback Mode**: If `.env` is omitted or credentials are blank, the backend automatically maintains an in-memory queue so all forms, buttons, and endpoints function flawlessly without crashing.

### Connecting your own Supabase project:
1. Open the [Supabase Dashboard](https://supabase.com).
2. Create a new project or select an existing one.
3. Open the **SQL Editor** and run the provided migration script located at:
   [`server/src/db/schema.sql`](file:///c:/Users/chaud/Documents/RDV/server/src/db/schema.sql)
4. Copy `server/.env.example` to `server/.env`:
   ```env
   PORT=5001
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-supabase-anon-or-service-key
   ```
5. Restart the server (`npm start`). The terminal will display:
   `⚡ Connected to Supabase Cloud Database`.

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service uptime, business details, and active database mode. |
| `GET` | `/api/products` | Retrieve all products (Supports `?category=bagasse` and `?search=tray`). |
| `POST` | `/api/inquiries` | Submit wholesale inquiry & RFQ (`fullName`, `phone`, `businessName`, `category`, etc.). |
| `POST` | `/api/samples` | Submit sample pack testing request for commercial establishments. |

---

## 🏬 Key Business Integrations

* **Direct Online Demo Store**: [Smita Disposable & Plastics on Vyapar](https://vyaparapp.in/store/smitadisposableandplastics)
* **Registered Address**: 23/A Dev Nagar, Opposite Sanjay Traders, Orange City Hospital Road, Khamla, Nagpur &ndash; 440015
* **GPS Coordinates**: `21.11465442, 79.06713864` ([Google Maps](https://www.google.com/maps/search/Renuka%20Designers%20Villa/@21.11465442,79.06713864,17z?hl=en))
* **Wholesale Phone Lines**: `+91 8378965139` &bull; `+91 9860544366` &bull; `+91 9665668952`
* **Official GSTIN**: `27AVPPT8792E1ZN`
* **Direct WhatsApp Dispatch**: Automatically formats formatted WhatsApp RFQs directly to `+91 8378965139`.

---

## 📦 Master Product Divisions Covered

1. **100% Compostable Sugarcane Bagasse Tableware**: 100% agri-residue, compostable plates, bowls, 3/4/5/8-compartment meal thalis, and sealable trays.
2. **Food Delivery Containers & Trays**: 123mm dia round sealable bowls (250ml - 1200ml), rectangular meal prep boxes, biryani handis.
3. **Paper Plates, Donas & Cups**: Heavy GSM ripple cups, silver laminated buffet plates, Chinese wok boxes, corrugated pizza boxes.
4. **Natural Terracotta Kulhads & Handis**: Clay chai kulhads (100ml / 150ml), dum biryani earthenware pots.
5. **Luxury Hotel & Guest Amenities**: Sealed dental/shaving kits, wooden garment hangers, soft non-woven guest slippers.
6. **Bakery & Confectionery Essentials**: Rigid golden cake boards, transparent pastry boxes, greaseproof muffin liners, kraft window bags.
7. **Institutional Hygiene & Housekeeping**: M-fold/C-fold paper dispenser rolls, commercial garbage bags, wet/dry floor mops, steel scrubbers.
