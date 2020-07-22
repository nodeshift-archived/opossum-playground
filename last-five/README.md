```
npm install
npm start
```


Result:


```
--> Opossum versions: 5.0.0, 4.2.4, 4.2.3, 4.2.1, 4.2.0
  5 tests completed.

  go500 x 33,415 ops/sec ±10.20% (1000 runs sampled)
  go424 x 49,393 ops/sec ±9.43% (1000 runs sampled)
  go423 x 48,883 ops/sec ±13.52% (1000 runs sampled)
  go421 x 43,752 ops/sec ±9.00% (1000 runs sampled)
  go420 x 34,826 ops/sec ±7.87% (1000 runs sampled)
```


Skipped the version 4.2.2 due an error found during the tests:

```
})(window, function() {
   ^

ReferenceError: window is not defined
```
