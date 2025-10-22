// src/models/Municipio.js
module.exports = (sequelize, DataTypes) => {
    const Municipio = sequelize.define('Municipio', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        departamento_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'municipio',
        timestamps: false
    });

    return Municipio;
};
