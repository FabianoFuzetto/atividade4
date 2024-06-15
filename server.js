const express = require('express');
const mysql = require('mysql2');
const appRoutes = require('./app');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'db', 
  user: 'user',
  password: '123456',
  database: 'db_atividade4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);


app.get('/consulta-dados', (request, response) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    connection.query('SELECT * FROM Clientes', (error, results) => {
      connection.release(); 

      if (error) {
        return response.status(500).json({ error: error.message });
      }
      response.json(results);
    });
  });
});


app.get('/consulta-fornecedores', (request, response) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    connection.query('SELECT * FROM Fornecedores', (error, results) => {
      connection.release(); 

      if (error) {
        return response.status(500).json({ error: error.message });
      }
      response.json(results);
    });
  });
});




app.use('/', appRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});