import dotenv from 'dotenv';

dotenv.config();

export const { PORT, DB_URL, NODE_ENV } = process.env;