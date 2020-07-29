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
  return breaker.fire(20000) // opossum default timeout is 10 sec
    .then(_ => breaker.stats)
    .catch(error => console.error(error))
}

go();
