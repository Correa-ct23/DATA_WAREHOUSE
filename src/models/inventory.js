// Modelo `Inventory` — registra cantidades de `Product` por `Warehouse` (bodega física)
module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');

  // Definición de la tabla `inventories`
  const Inventory = sequelize.define('Inventory', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    productId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    warehouseId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    reserved: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  }, {
    tableName: 'inventories',
  });

  return Inventory;
};
