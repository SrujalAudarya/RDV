import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to RDV - Renuka Designers Villa Backend API',
    endpoints: {
      products: '/api/products',
      inquiries: '/api/inquiries (POST)',
      samples: '/api/samples (POST)',
      health: '/api/health'
    }
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`🚀 RDV Backend Server is running on http://localhost:${PORT}`);
});
