const express = require('express');
const app = express();

app.get('/opossum', (req, res) => {
  res.send('ok');
});

app.listen(3001);
