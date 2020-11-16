const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Ok!');
});

app.get('/not-found', (req, res) => {
  res.status(404).send('Not Found!');
});

app.get('/error', (req, res) => {
  res.status(500).send('Internal Server Error!');
});

app.listen(3000);
