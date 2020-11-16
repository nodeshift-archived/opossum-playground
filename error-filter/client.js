const axios = require('axios');
const CircuitBreaker = require('opossum');

function makeRequest(path = '') {
  return axios.get(`http://127.0.0.1:3000/${path}`);
}

const breaker = new CircuitBreaker(makeRequest, {
  errorFilter: (err) => {
    return err.response.status === 404;
  },
});

const request1 = breaker.fire().then((response) => {
  console.log(`Response: ${response.data}`);
});

const request2 = breaker.fire('not-found').catch((err) => {
  console.log(`Response: ${err.response.data}`);
});

const request3 = breaker.fire('error').catch((err) => {
  console.log(`Response: ${err.response.data}`);
});

Promise.all([request1, request2, request3]).then(() => {
  console.log(breaker.stats);
});
