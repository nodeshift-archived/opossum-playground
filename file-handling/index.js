const fs = require('graceful-fs');
const { promisify } = require('util');
const CircuitBreaker = require('opossum');

const readFile = promisify(fs.readFile);

const options = {};

const breaker = new CircuitBreaker(readFile, options);

function firefox() {
  breaker.fire('./package.json', 'utf-8')
  .then()
  .catch(error => console.error(error));
  return breaker.stats;
}

module.exports = {
  firefox
};
