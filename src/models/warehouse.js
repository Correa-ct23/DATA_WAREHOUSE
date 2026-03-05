// Modelo `Warehouse` (bodega física) — representa ubicaciones donde se guarda stock
module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');

  // Definición de la tabla `warehouses`
  const Warehouse = sequelize.define('Warehouse', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    code: { type: DataTypes.STRING(64), allowNull: false, unique: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    location: { type: DataTypes.STRING(255), allowNull: true },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  }, {
    tableName: 'warehouses',
  });

  return Warehouse;
};
