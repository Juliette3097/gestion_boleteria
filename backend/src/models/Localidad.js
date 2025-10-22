// src/models/Localidad.js
module.exports = (sequelize, DataTypes) => {
    const Localidad = sequelize.define('Localidad', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo_localidad: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        nombre_localidad: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'localidad',
        timestamps: false
    });

    return Localidad;
};
