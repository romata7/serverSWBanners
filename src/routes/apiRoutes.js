const express = require('express');
const router = express.Router();

// Importar todas las rutas individuales
const clientRoutes = require('./clientRoutes');
// Futuras importaciones:
// const serviceRoutes = require('./serviceRoutes');
// const orderRoutes = require('./orderRoutes');
// const paymentRoutes = require('./paymentRoutes');

// Combinar todas las rutas bajo prefijos específicos
router.use('/clients', clientRoutes);
// Futuras rutas:
// router.use('/services', serviceRoutes);
// router.use('/orders', orderRoutes);
// router.use('/payments', paymentRoutes);

module.exports = router;