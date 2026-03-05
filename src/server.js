// Servidor mínimo con endpoint para ejecutar syncMysql

const express = require('express');
const bodyParser = require('body-parser');
const { syncMysql } = require('./db/syncMysql');

const app = express();
app.use(bodyParser.json());

// Endpoint para disparar la sincronización MySQL
app.post('/syncMysql', async (req, res) => {
  try {
    const result = await syncMysql();
    if (result.ok) return res.status(200).json(result);
    return res.status(400).json(result);
  } catch (err) {
    console.error('Endpoint /syncMysql error:', err);
    return res.status(500).json({ ok: false, message: String(err) });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sync server listening on port ${PORT}. POST /syncMysql to run sync`);
});
