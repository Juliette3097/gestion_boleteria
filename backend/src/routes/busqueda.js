// src/routes/busqueda.js
const express = require('express');
const router = express.Router();
const { Evento, Municipio, Departamento } = require('../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const { fecha, municipio, departamento } = req.query;
        const where = {};

        if (fecha) {
            where.fecha_hora_inicio = { [Op.gte]: new Date(fecha) };
        }

        if (municipio) {
            where.municipio_id = municipio;
        }

        const eventos = await Evento.findAll({ where, include: [Municipio] });
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error en búsqueda de eventos', error });
    }
});

module.exports = router;
