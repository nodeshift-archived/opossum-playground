const CircuitBreaker = require('opossum');

let count = 0;

const throwErrorSometimes = () => new Promise((resolve, reject) => {
  if (++count % 2) return reject('Something went wrong!');
  resolve('It works!');
});

const breaker = new CircuitBreaker(throwErrorSometimes, { resetTimeout: 5000 });

const fireOpossum = () => {
  breaker
  .fire(100)
  .then((result) => {
    console.log(
      'fires',
      breaker.stats.fires,
      'successes',
      breaker.stats.successes,
      result
    );
  })
  .catch((error) => console.error(error));
};

fireOpossum();
setTimeout(() => fireOpossum(), 6000);
