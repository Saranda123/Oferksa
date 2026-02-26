require('dotenv').config();
const express = require('express');
const pool = require('./config/db');
const cors = require('cors');
const bcrypt = require('bcrypt');
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
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los inmuebles' });
    }
});
//ruta API

app.post('/api/login', async (req, res) => {
    try{
        const { usuario, password } = req.body;

        const result = await pool.query('SELECT * FROM usuarios WHERE nombre = $1', [usuario]);
        if (result.rows.length === 0) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }
        const user = result.rows[0];
        const passwordvalida = await bcrypt.compare(password, user.password);
        if (!passwordvalida) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }
        res.json({ message: 'Inicio de sesión exitoso' });
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
// iniciar el servidor en el puerto 3000