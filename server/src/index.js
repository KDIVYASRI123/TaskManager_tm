import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=>res.json({ok:true, message:'Task Dashboard API'}));
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

start();
