-- ===================================================================
-- RDV - Renuka Designers Villa
-- Supabase / PostgreSQL Database Schema
-- ===================================================================

-- 1. Table for Wholesale Inquiries & RFQs
CREATE TABLE IF NOT EXISTS wholesale_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_name TEXT NOT NULL,
  city TEXT DEFAULT 'Nagpur',
  product_category TEXT NOT NULL,
  order_volume TEXT,
  notes TEXT,
  status TEXT DEFAULT 'new', -- new, contacted, quoted, fulfilled
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE wholesale_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public insert (for website form submissions)
CREATE POLICY "Allow public insert on inquiries" 
ON wholesale_inquiries FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated read (for admin / dashboard)
CREATE POLICY "Allow authenticated read on inquiries" 
ON wholesale_inquiries FOR SELECT 
TO authenticated 
USING (true);


-- 2. Table for Sample Kit Requests
CREATE TABLE IF NOT EXISTS sample_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  establishment_type TEXT,
  delivery_address TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE sample_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on sample_requests" 
ON sample_requests FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow authenticated read on sample_requests" 
ON sample_requests FOR SELECT 
TO authenticated 
USING (true);
