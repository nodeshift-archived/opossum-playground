const niv = require('npm-install-version');

niv.install('opossum@5.0.0');
niv.install('opossum@4.2.4');
niv.install('opossum@4.2.3');
niv.install('opossum@4.2.1');
niv.install('opossum@4.2.0');

const Cb500 = niv.require('opossum@5.0.0');
const Cb424 = niv.require('opossum@4.2.4');
const Cb423 = niv.require('opossum@4.2.3');
const Cb421 = niv.require('opossum@4.2.1');
const Cb420 = niv.require('opossum@4.2.0');

const delay = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

const options = {};
const b500 = new Cb500(delay, options);
const b424 = new Cb424(delay, options);
const b423 = new Cb423(delay, options);
const b421 = new Cb421(delay, options);
const b420 = new Cb420(delay, options);

function go500() {
  return b500.fire(100)
  .then(_ => b500.stats)
  .catch(error => console.error(error));
}

function go424() {
  return b424.fire(100)
  .then(_ => b424.stats)
  .catch(error => console.error(error));
}

function go423() {
  return b423.fire(100)
  .then(_ => b423.stats)
  .catch(error => console.error(error));
}

function go421() {
  return b421.fire(100)
  .then(_ => b421.stats)
  .catch(error => console.error(error));
}

function go420() {
  b420.fire(100)
  .then(_ => b420.stats)
  .catch(error => console.error(error));
}


module.exports = {
  go500,
  go424,
  go423,
  go421,
  go420
};
