// src/models/Departamento.js
module.exports = (sequelize, DataTypes) => {
    const Departamento = sequelize.define('Departamento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'departamento',
        timestamps: false
    });

    return Departamento;
};
