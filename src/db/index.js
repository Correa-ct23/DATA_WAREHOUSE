const { Sequelize } = require('sequelize');
const path = require('path');

// Cargar variables de entorno desde .env (si existe)
require('dotenv').config();

// Importar la configuración centralizada de `src/config/database.js`
const dbConfig = require(path.join(__dirname, '..', 'config', 'database'));

const config = dbConfig;

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Registro de modelos. Solo importamos los modelos específicos de MySQL cuando
// `config.dialect === 'mysql'` para evitar crear tablas de MySQL en otras bases (ej. SQL Server).
const models = {};

if (config.dialect === 'mysql') {
  models.Product = require(path.join(__dirname, '..', 'models', 'product'))(sequelize);
  models.Warehouse = require(path.join(__dirname, '..', 'models', 'warehouse'))(sequelize);
  models.Inventory = require(path.join(__dirname, '..', 'models', 'inventory'))(sequelize);

  // Relaciones entre modelos (producto <-> inventario <-> bodega física)
  models.Product.hasMany(models.Inventory, { foreignKey: 'productId' });
  models.Warehouse.hasMany(models.Inventory, { foreignKey: 'warehouseId' });
  models.Inventory.belongsTo(models.Product, { foreignKey: 'productId' });
  models.Inventory.belongsTo(models.Warehouse, { foreignKey: 'warehouseId' });
}

module.exports = { sequelize, models, config };
