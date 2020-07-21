const express = require('express');
const axios = require('axios');

const CircuitBreaker = require('opossum');

const app = express();

const breaker = new CircuitBreaker(requestToOtherServer, {});

app.get('/opossum', (req, res) => {
  breaker
    .fire()
    .then((result) => {
      const {
        fires,
        successes,
        failures,
        fallbacks,
        rejects,
        timeouts,
      } = breaker.stats;
      console.log(
        `result: ${result.data}, fires: ${fires}, successes: ${successes}, failures: ${failures}, fallbacks: ${fallbacks}, rejects: ${rejects}, timeouts: ${timeouts}`
      );
      res.send('');
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

function requestToOtherServer() {
  return axios.get('http://127.0.0.1:3001/opossum');
}

app.listen(3000);
