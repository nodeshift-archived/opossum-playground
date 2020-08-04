const CircuitBreaker = require('opossum');

const sleep = require('util').promisify(setTimeout);

let delay = 20;
let timeError = null;

function fakeService() {
  return new Promise((resolve, reject) => {
    if (timeError) {
      let msPassed = new Date().getTime() - timeError;
      if (msPassed > 5000) {
        delay = 20;
        timeError = null;
      }
    }
    if (delay > 1000) {
      timeError = new Date().getTime();
      return reject(new Error());
    }
    setTimeout(() => {
      console.log('\x1b[33m%s\x1b[0m',`Service responding in ${delay}ms`);
      resolve('hello');
      delay = delay * 2;
    }, delay);
  });
}

const breaker = new CircuitBreaker(fakeService, { cache: false });

breaker.fallback(() => console.log('\x1b[31m%s\x1b[0m', 'use cache to keep receiving "hello"'));

function fireOpossum() {
  breaker
    .fire()
    .then((result) => {
      if (result) console.log('\x1b[36m%s\x1b[0m', result);
      console.log(
        'fires',
        breaker.stats.fires,
        'cache hits',
        breaker.stats.cacheHits,
        'cache misses',
        breaker.stats.cacheMisses
      );
    })
    .catch((error) => console.error(error));
}

(async function main() {
  for (let i = 0; i < 10; i++) {
    fireOpossum();
    await sleep(1000);
  }
})();
