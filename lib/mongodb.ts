// lib/mongodb.ts
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log('📌 Already connected to MongoDB');
      return;
    }

    console.log('🔄 Connection attempt starting...');
    console.log('📌 Connection string format check:', 
      MONGODB_URI.startsWith('mongodb+srv://') ? 'Valid' : 'Invalid');

    const conn = await mongoose.connect(MONGODB_URI);
    
    console.log('✅ MongoDB Connected:');
    console.log('📌 Database name:', conn.connection.name);
    console.log('📌 Host:', conn.connection.host);
    console.log('📌 Port:', conn.connection.port);
  } catch (error) {
    console.error('❌ MongoDB connection error:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack
    });
    throw error;
  }
};