const fs = require('graceful-fs');
const { promisify } = require('util');
const CircuitBreaker = require('opossum');

const readFile = promisify(fs.readFile);

const options = {};

const breaker = new CircuitBreaker(readFile, options);

function fire() {
  breaker.fire('./package.json', 'utf-8')
  .then()
  .catch(error => console.error(error));
  
  // breaker.on('success', () => console.log(1));
  // breaker.on('timeout', () => console.log(2));
  // breaker.on('reject', () => console.log(3));
  // breaker.on('open', () => console.log(4));
  // breaker.on('halfOpen', () => console.log(5));
  // breaker.on('close', () => console.log(6));
  // breaker.on('fallback', () => console.log(7));
  console.log(breaker.stats);
  return breaker.stats;
}

module.exports = {
  fire
};
