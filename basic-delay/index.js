const CircuitBreaker = require("opossum");

const delay = (delay) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, delay);
});

const breaker = new CircuitBreaker(delay);

breaker.fire(2000).then(() => {
  console.log(breaker.stats);
});
