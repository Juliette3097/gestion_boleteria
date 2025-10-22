// src/routes/eventos.js
const express = require('express');
const router = express.Router();
const { Evento, Artista, Boleta, Localidad } = require('../models');

// Obtener todos los eventos con artistas y boletas
router.get('/', async (req, res) => {
    try {
        const eventos = await Evento.findAll({
            include: [
                { model: Artista, through: { attributes: [] } },
                { model: Boleta, include: [Localidad] }
            ]
        });
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos', error });
    }
});

// Crear un nuevo evento
router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion, fecha_hora_inicio, fecha_hora_fin, municipio_id, direccion, artistaIds } = req.body;
        const evento = await Evento.create({ nombre, descripcion, fecha_hora_inicio, fecha_hora_fin, municipio_id, direccion });

        // Asociar artistas (si se envían)
        if (artistaIds && artistaIds.length > 0) {
            await evento.setArtistas(artistaIds);
        }

        res.status(201).json({ message: 'Evento creado correctamente', evento });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear evento', error });
    }
});

module.exports = router;
