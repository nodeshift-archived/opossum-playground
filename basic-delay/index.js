const CircuitBreaker = require('opossum');

const delay = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

const options = {};

const breaker = new CircuitBreaker(delay, options);

function go() {
  breaker.fire(100)
  .then()
  .catch(error => console.error(error));
  return breaker.stats;
}

module.exports = {
  go
};