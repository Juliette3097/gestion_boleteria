// src/models/Evento.js
module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        fecha_hora_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_hora_fin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        municipio_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        tableName: 'evento',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Evento;
};
