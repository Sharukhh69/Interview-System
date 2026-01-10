import mongoose from 'mongoose';
import {DB_URL} from './env.js';
export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};