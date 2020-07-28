# Opossum File-Handling Example

This example uses the opossum module to read a file from the filesystem using the built-in **fs** module and also lowcarb for test opossum under heavy load.

### Steps

```sh
$ npm install
$ npm start
```
result:

```
> lowcarb


  1 test completed.

  go x 15,139 ops/sec ±8.59% (1000 runs sampled)

Function executed again. The return value is:
{
  failures: 0,
  fallbacks: 0,
  successes: 1999,
  rejects: 0,
  fires: 2001,
  timeouts: 0,
  cacheHits: 0,
  cacheMisses: 0,
  semaphoreRejections: 0,
  percentiles: [Object],
  latencyTimes: [Array],
  latencyMean: 1924.7098549274638
}
```

