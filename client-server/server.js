const express = require('express');
const CircuitBreaker = require('opossum');

const options = {};
const breaker = new CircuitBreaker(randomFailure, options);

const app = express();

app.get('/', (req, res) => {
  breaker
    .fire('.\n')
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

function randomFailure(echo) {
  if (Date.now() % 5 === 0) {
    return Promise.reject(new Error('Random failure'));
  } else {
    return Promise.resolve(echo);
  }
}

app.listen(3000);
