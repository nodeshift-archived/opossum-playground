const CircuitBreaker = require('opossum');

const throwError = () => new Promise((_, reject) => {
  reject('Something went wrong!');
});

const breaker = new CircuitBreaker(throwError);

breaker
  .fire(100)
  .then((_) => {
    console.log(
      'fires',
      breaker.stats.fires,
      'successes',
      breaker.stats.successes
    );
  })
  .catch((error) => console.error(error));
