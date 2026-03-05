// Modelo `Product` (MySQL): representa un artículo/sku en el inventario
module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');

  // Definición de la tabla `products`
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    sku: { type: DataTypes.STRING(64), allowNull: false, unique: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    price: { type: DataTypes.DECIMAL(12,2), allowNull: false, defaultValue: 0.0 },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  }, {
    tableName: 'products',
  });

  return Product;
};
