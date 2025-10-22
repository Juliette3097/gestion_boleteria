// src/models/EventoArtista.js
module.exports = (sequelize, DataTypes) => {
    const EventoArtista = sequelize.define('EventoArtista', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        evento_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        artista_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'evento_artista',
        timestamps: false,
        indexes: [
            { unique: true, fields: ['evento_id', 'artista_id'] }
        ]
    });

    return EventoArtista;
};
