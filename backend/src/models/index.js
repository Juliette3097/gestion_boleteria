const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Departamento = require('./Departamento')(sequelize, DataTypes);
const Municipio = require('./Municipio')(sequelize, DataTypes);
const Artista = require('./Artista')(sequelize, DataTypes);
const Localidad = require('./Localidad')(sequelize, DataTypes);
const Evento = require('./Evento')(sequelize, DataTypes);
const Boleta = require('./Boleta')(sequelize, DataTypes);

// asociaciones
Departamento.hasMany(Municipio, { foreignKey: 'departamento_id' });
Municipio.belongsTo(Departamento, { foreignKey: 'departamento_id' });

Municipio.hasMany(Evento, { foreignKey: 'municipio_id' });
Evento.belongsTo(Municipio, { foreignKey: 'municipio_id' });

Evento.belongsToMany(Artista, { through: 'evento_artista', foreignKey: 'evento_id' });
Artista.belongsToMany(Evento, { through: 'evento_artista', foreignKey: 'artista_id' });

Localidad.hasMany(Boleta, { foreignKey: 'localidad_id' });
Evento.hasMany(Boleta, { foreignKey: 'evento_id' });
Boleta.belongsTo(Localidad, { foreignKey: 'localidad_id' });
Boleta.belongsTo(Evento, { foreignKey: 'evento_id' });

module.exports = {
    sequelize,
    Departamento,
    Municipio,
    Artista,
    Localidad,
    Evento,
    Boleta
};
