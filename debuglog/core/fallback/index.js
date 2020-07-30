const CircuitBreaker = require('opossum');

const delay = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

const breaker = new CircuitBreaker(delay);

breaker.fallback(() => 'Sorry, out of service right now');

breaker
  .fire(20000) // opossum default timeout is 10 sec
  .then((_) => {
    console.log(
      'fires',
      breaker.stats.fires,
      'fallbacks',
      breaker.stats.fallbacks
    );
  })
  .catch((error) => console.error(error));

breaker.on('fallback', (result) => console.log(result));
