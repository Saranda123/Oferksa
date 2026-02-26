require('dotenv').config();
const express = require('express');
const pool = require('./config/db');
const cors = require('cors');
const bcrypt = require('bcrypt');
// Importamos las dependencias necesarias

const app = express();
// se crea la constante app


const loginColumns = ['nombre', 'usuario', 'username', 'correo', 'email'];

const getUsuariosColumns = async () => {
    const columnsResult = await pool.query(
        `SELECT column_name
         FROM information_schema.columns
         WHERE table_schema = 'public' AND table_name = 'usuarios'`
    );

    return new Set(columnsResult.rows.map((row) => row.column_name));
};

const findUserByLoginValue = async (loginValue) => {
    const columns = await getUsuariosColumns();
    const availableLoginColumns = loginColumns.filter((column) => columns.has(column));

    if (availableLoginColumns.length === 0) {
        throw new Error('La tabla usuarios no tiene una columna de login compatible (nombre/usuario/username/correo/email)');
    }

    for (const column of availableLoginColumns) {
        const result = await pool.query(`SELECT * FROM usuarios WHERE "${column}" = $1 LIMIT 1`, [loginValue]);
        if (result.rows.length > 0) {
            return result.rows[0];
        }
    }

    return null;
};

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
    try {
        const { usuario, password } = req.body;

        if (!usuario || !password) {
            return res.status(400).json({ error: 'Usuario y contraseña son obligatorios' });
        }

        const user = await findUserByLoginValue(usuario);

        if (!user) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const hash = user.password ?? user.contrasena ?? user['contraseña'] ?? user.clave ?? user.pass ?? user.hash;

        if (!hash || typeof hash !== 'string') {
            return res.status(500).json({
                error: 'No se encontró una contraseña hash válida en la tabla usuarios'
            });
        }

        const passwordvalida = await bcrypt.compare(password, hash);
        if (!passwordvalida) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        res.json({ message: 'Inicio de sesión exitoso' });
    } catch (err) {
        console.error('Error en /api/login:', err);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
// iniciar el servidor en el puerto 3000