import dotenv from 'dotenv';

dotenv.config();

export const { PORT, MONGO_URL, NODE_ENV } = process.env;