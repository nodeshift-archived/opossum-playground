const CircuitBreaker = require('opossum');

const delay = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

const breaker = new CircuitBreaker(delay);

breaker
  .fire(20000) // opossum default timeout is 10 sec
  .then((_) => {})
  .catch((error) => {
    console.error(error);
    console.log(
      'fires',
      breaker.stats.fires,
      'timeouts',
      breaker.stats.timeouts
    );
  });
