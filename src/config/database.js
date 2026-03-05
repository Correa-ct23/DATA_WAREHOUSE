// Configuración de base de datos centralizada (ubicada en src/config)
require('dotenv').config();

const dialect = process.env.DB_DIALECT || 'mysql';

module.exports = {
  dialect,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'inteligencianegocios',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || (dialect === 'mysql' ? 3306 : 1433),
  logging: process.env.DB_LOG === 'true' ? console.log : false,
};
