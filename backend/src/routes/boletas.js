// src/routes/boletas.js
const express = require('express');
const router = express.Router();
const { Boleta } = require('../models');

// Crear boleta
router.post('/', async (req, res) => {
    try {
        const { evento_id, localidad_id, valor, cantidad_disponible } = req.body;
        const boleta = await Boleta.create({ evento_id, localidad_id, valor, cantidad_disponible });
        res.status(201).json(boleta);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear boleta', error });
    }
});

// Simular venta de boleta
router.post('/:id/vender', async (req, res) => {
    try {
        const { cantidad } = req.body;
        const boleta = await Boleta.findByPk(req.params.id);
        if (!boleta) return res.status(404).json({ message: 'Boleta no encontrada' });

        if (boleta.cantidad_vendida + cantidad > boleta.cantidad_disponible)
            return res.status(400).json({ message: 'No hay suficientes boletas disponibles' });

        boleta.cantidad_vendida += cantidad;
        await boleta.save();
        res.json({ message: 'Venta registrada', boleta });
    } catch (error) {
        res.status(500).json({ message: 'Error al vender boleta', error });
    }
});

module.exports = router;

