// src/models/Artista.js
module.exports = (sequelize, DataTypes) => {
    const Artista = sequelize.define('Artista', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        genero_musica: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        ciudad_natal: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        tableName: 'artista',
        timestamps: false
    });

    return Artista;
};
