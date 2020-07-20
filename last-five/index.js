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
  b500.fire(100)
  .then()
  .catch(error => console.error(error));
  return b500.stats;
}

function go424() {
  b424.fire(100)
  .then()
  .catch(error => console.error(error));
  return b424.stats;
}

function go423() {
  b423.fire(100)
  .then()
  .catch(error => console.error(error));
  return b423.stats;
}

function go421() {
  b421.fire(100)
  .then()
  .catch(error => console.error(error));
  return b421.stats;
}

function go420() {
  b420.fire(100)
  .then()
  .catch(error => console.error(error));
  return b420.stats;
}


module.exports = {
  go500,
  go424,
  go423,
  go421,
  go420
};
