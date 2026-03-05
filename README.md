# InteligenciaNegocios — Template

Plantilla base del proyecto.

Este proyecto usará MySQL para el `Sistema de Inventario` según el documento de referencia.

3.2 Sistema de Inventario
- Motor: MySQL 8+
- Herramienta recomendada: MySQL Workbench o DBeaver

Instrucciones para sincronizar modelos MySQL (solo se crearán tablas si `DB_DIALECT=mysql`):

1. Instalar dependencias (incluye `sequelize`, `mysql2` y `express`):

```bash
npm install
```

2. Iniciar servidor que expone endpoint para sincronizar:

```bash
npm start
# Luego desde otra terminal o herramienta HTTP hacer POST a:
# http://localhost:3000/syncMysql
```

3. Opcional: ejecutar sync directo (solo para desarrollo):

```bash
DB_DIALECT=mysql DB_HOST=127.0.0.1 DB_USER=root DB_PASS=secret DB_NAME=inteligencianegocios npm run db:syncMysql
```

Notas:
- Los modelos para SQL Server no se crearán cuando `DB_DIALECT=mysql`. Más adelante se agregarán modelos específicos para SQL Server y se registrarán solo cuando `DB_DIALECT=mssql`.
- El script usa `sequelize.sync({ alter: true })` para aplicar cambios en desarrollo. Para producción, usa migraciones.

4. Usar `docker-compose` (alternativa al `docker run`):

```bash
docker-compose up -d
# Esperar que el servicio MySQL esté "healthy" y luego arrancar la app:
npm start
```

Si necesitas bajar el stack:

```bash
docker-compose down -v
```
