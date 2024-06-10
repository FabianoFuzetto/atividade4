const express = require('express');
const app = express();

app.get('/liveness', (request, response) => {
  return response.status(200).json({
    message: 'Trabalho dificil da pega!',
  });
});

app.get('/readiness', (req, res) => {
  return res.status(200).json({
    message: 'Quero nota 10!'
  });
});

module.exports = app;