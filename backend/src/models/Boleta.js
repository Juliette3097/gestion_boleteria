// src/models/Boleta.js
module.exports = (sequelize, DataTypes) => {
    const Boleta = sequelize.define('Boleta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        evento_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        localidad_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        valor: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false
        },
        cantidad_disponible: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad_vendida: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: 'boleta',
        timestamps: false
    });

    return Boleta;
};
