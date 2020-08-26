const CircuitBreaker = require('opossum');

const delay = (delay, a, b, c) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

const breaker = new CircuitBreaker(delay);

breaker.fallback((delay, a, b, c) => `Sorry, out of service right now. But your parameters are: ${delay}, ${a}, ${b} and ${c}`);

breaker
  .fire(20000, 1, 2, 3) // opossum default timeout is 10 sec
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
