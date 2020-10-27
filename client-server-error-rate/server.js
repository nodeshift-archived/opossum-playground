const express = require('express');
const CircuitBreaker = require('opossum');

const options = { 
  errorThresholdPercentage: 20 
};

const breaker = new CircuitBreaker(randomFailure, options);

const app = express();

app.get('/', (req, res) => {
  breaker
    .fire('\n')
    .then((result) => {
      result += `success: ${breaker.stats.successes}`;
      res.send(result);
    })
    .catch((err) => {
      const { fires, failures } = breaker.stats;
      const errorRate = failures / fires * 100;
      err += `fires: ${fires}, failures: ${failures}, error rate: ${errorRate}`;
      res.send(err);
    });
});

function randomFailure(echo) {
  if (Date.now() % 5 === 0) {
    return Promise.reject('\n');
  } else {
    return Promise.resolve(echo);
  }
}

app.listen(3000);
