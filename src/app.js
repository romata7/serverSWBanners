const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes'); // <-- Cambiamos esta línea

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', apiRoutes); // <-- Todas las rutas estarán bajo el prefijo /api

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;