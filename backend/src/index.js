const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.unsubscribe(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc 
   * 
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    * 
    */