import express from 'express';
import path from 'path';
import { PORT, NODE_ENV } from './lib/env.js';

const app = express();
const __dirname = path.resolve();

// API routes
app.get('/home', (req, res) => {
    res.json("vanakam paramakudi");
});

app.get('/about', (req, res) => {
    res.json("about page");
});

// Serve frontend only in production
if (NODE_ENV === 'production') {
    const frontendPath = path.join(__dirname, '../frontend/dist');
    app.use(express.static(frontendPath));
    app.use((req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
}

app.listen(PORT || 3000, () => {
    console.log('NODE_ENV =', NODE_ENV);
    console.log(`Server running on port ${PORT || 3000}`);
});