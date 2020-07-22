const fs = require('graceful-fs');
const { promisify } = require('util');
const CircuitBreaker = require('opossum');

const readFile = promisify(fs.readFile);

const options = {};

const breaker = new CircuitBreaker(readFile, options);

function go() {
  return breaker.fire('./package.json', 'utf-8')
  .then(_ => breaker.stats)
  .catch(error => console.error(error));
}

module.exports = {
  go
};
