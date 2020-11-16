# Opossum Error-Filter Example

This example shows how we can use the errorFilter option of opossum.

### Server

The server is an express.js application that exposes 3 endpoints.

<table>
<tbody>
  <tr>
    <td>/</td>
    <td>returns a 200 status code.</td>
  </tr>
  <tr>
    <td>/not-found</td>
    <td>returns a 404 status code.</td>
  </tr>
  <tr>
    <td>/error</td>
    <td>returns a 500 status code.</td>
  </tr>
</tbody>
</table>

### Client

The client consists of a simple node.js module making a request for each of the server's available endpoints and when all request complete, it logs the breaker's stats.

### Steps

```
$ npm start

$ npm run client
```

Output

```
Response: Ok!
Response: Not Found!
Response: Internal Server Error!
{
  failures: 1, <--- when got 500
  fallbacks: 0,
  successes: 2, <--- when got 200, 404
  rejects: 0,
  fires: 3,
  timeouts: 0,
  cacheHits: 0,
  cacheMisses: 0,
  semaphoreRejections: 0,
  percentiles: {
    '0': 17,
    '1': 21,
    '0.25': 17,
    '0.5': 20,
    '0.75': 21,
    '0.9': 21,
    '0.95': 21,
    '0.99': 21,
    '0.995': 21
  },
  latencyTimes: [ 17, 20, 21 ],
  latencyMean: 19.333333333333332
}
```
