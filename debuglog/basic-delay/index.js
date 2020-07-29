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
  return breaker.fire(100)
    .then(_ => breaker.stats)
    .catch(error => console.error(error))
}

go();