require('dotenv').config();
const express = require('express');
const pool = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));