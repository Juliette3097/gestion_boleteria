const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./models');

const eventosRoutes = require('./routes/eventos');
const artistasRoutes = require('./routes/artistas');
const localidadesRoutes = require('./routes/localidades');
const boletasRoutes = require('./routes/boletas');
const busquedaRoutes = require('./routes/busqueda');

const app = express();
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/eventos', eventosRoutes);
app.use('/api/artistas', artistasRoutes);
app.use('/api/localidades', localidadesRoutes);
app.use('/api/boletas', boletasRoutes);
app.use('/api/busqueda', busquedaRoutes);

// start
const PORT = process.env.PORT || 4000;
sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('DB error:', err);
});
