const express = require('express');
const CircuitBreaker = require('opossum');

const app = express();

const delay = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

const options = {
  timeout: 20,
  errorThresholdPercentage: 1,
  resetTimeout: 1
};
const breaker = new CircuitBreaker(delay, options);

app.get('/', (req, res) => {
  breaker
    .fire(Math.floor(Math.random() * Math.floor(25)))
    .then((result) => {
      console.info('%%%% closed',breaker.closed,'success','%%%%%%%%%%');
      res.send('');
    })
    .catch((err) => {
      console.info('**** closed',breaker.closed,'error','**********');
      res.send('');
    });
});

app.listen(3000);
