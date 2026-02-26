require('dotenv').config();
const express = require('express');
const pool = require('./config/db');
const cors = require('cors');
// Importamos las dependencias necesarias

const app = express();
// se crea la constante app

app.use(cors());
app.use(express.json());
// solicitudes cors y json

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
// Ruta de prueba

app.get('/api/inmuebles', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inmuebles');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los inmuebles' });
    }
});
//ruta API

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
// iniciar el servidor en el puerto 3000