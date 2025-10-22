// src/routes/artistas.js
const express = require('express');
const router = express.Router();
const { Artista } = require('../models');

// Listar artistas
router.get('/', async (req, res) => {
    try {
        const artistas = await Artista.findAll();
        res.json(artistas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener artistas', error });
    }
});

// Crear artista
router.post('/', async (req, res) => {
    try {
        const { nombres, apellidos, genero_musica, ciudad_natal } = req.body;
        const artista = await Artista.create({ nombres, apellidos, genero_musica, ciudad_natal });
        res.status(201).json(artista);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear artista', error });
    }
});

module.exports = router;
