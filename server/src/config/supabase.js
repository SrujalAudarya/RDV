import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';

let supabase = null;
let isConfigured = false;

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    isConfigured = true;
    console.log('✅ [Supabase] Connected successfully to Cloud Database');
  } catch (error) {
    console.warn('⚠️ [Supabase] Initialization failed:', error.message);
  }
} else {
  console.log('ℹ️ [Supabase] Credentials not set in server/.env. Using local persistence fallback.');
}

// In-memory fallback repository for inquiries and sample requests
export const localStore = {
  inquiries: [],
  samples: [],
  addInquiry: (data) => {
    const record = { id: `inq_${Date.now()}`, ...data, created_at: new Date().toISOString(), status: 'new' };
    localStore.inquiries.push(record);
    return record;
  },
  addSample: (data) => {
    const record = { id: `smp_${Date.now()}`, ...data, created_at: new Date().toISOString(), status: 'pending' };
    localStore.samples.push(record);
    return record;
  }
};

export { supabase, isConfigured };
