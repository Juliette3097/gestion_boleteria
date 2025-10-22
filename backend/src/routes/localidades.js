// src/routes/localidades.js
const express = require('express');
const router = express.Router();
const { Localidad } = require('../models');

// Obtener todas las localidades
router.get('/', async (req, res) => {
    try {
        const localidades = await Localidad.findAll();
        res.json(localidades);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener localidades', error });
    }
});

// Crear una nueva localidad
router.post('/', async (req, res) => {
    try {
        const { codigo_localidad, nombre_localidad } = req.body;
        const localidad = await Localidad.create({ codigo_localidad, nombre_localidad });
        res.status(201).json(localidad);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear localidad', error });
    }
});

module.exports = router;
