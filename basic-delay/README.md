# Opossum Basic Delay

This example shows how we can use opossum with a basic delay function (halts execution for 100ms) and test opossum under a heavy load using the lowcarb module.

### Steps

```sh
$ npm install
$ npm start
```

Result:

```
  1 test completed.

  go x 99,202 ops/sec ±2.90% (10000 runs sampled)

Function executed again. The return value is:
{
  failures: 0,
  fallbacks: 0,
  successes: 1717,
  rejects: 0,
  fires: 1697,
  timeouts: 0,
  cacheHits: 0,
  cacheMisses: 0,
  semaphoreRejections: 0,
  percentiles: [Object],
  latencyTimes: [Array],
  latencyMean: 101.92836342457775
}
```

