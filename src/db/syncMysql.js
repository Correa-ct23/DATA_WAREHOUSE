// Script de sincronización específico para MySQL.
// Exporta una función que puede ser llamada por un endpoint HTTP (ej. /syncMysql).

const { sequelize, config } = require('./index');

async function syncMysql() {
  console.log('Dialect de BD:', config.dialect);

  if (config.dialect !== 'mysql') {
    const msg = 'Sincronización omitida: DB_DIALECT no es mysql. No se crearán tablas MySQL.';
    console.log(msg);
    return { ok: false, message: msg };
  }

  try {
    // Autenticar y sincronizar modelos MySQL registrados en `src/db/index.js`.
    await sequelize.authenticate();
    console.log('Conexión OK. Sincronizando modelos MySQL...');
    await sequelize.sync({ alter: true });
    console.log('Sincronización completada.');
    return { ok: true, message: 'Sincronización completada.' };
  } catch (err) {
    console.error('Error en la sincronización:', err);
    return { ok: false, message: String(err) };
  }
}

module.exports = { syncMysql };

// Si se ejecuta directamente desde la línea de comandos, correr la sincronización
if (require.main === module) {
  (async () => {
    try {
      const result = await syncMysql();
      // cerrar la conexión global solo cuando el script se ejecuta desde CLI
      await sequelize.close();
      if (result.ok) process.exit(0);
      console.error(result.message);
      process.exit(1);
    } catch (err) {
      console.error('Error ejecutando sync desde CLI:', err);
      try { await sequelize.close(); } catch (e) {}
      process.exit(1);
    }
  })();
}
