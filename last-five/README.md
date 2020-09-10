# Opossum Last-Five Example

This example uses the last five version of opossum on the same operation to detect different behaviors across versions (v4.2.2 skipped)

### Steps

```sh
$ npm install
$ npm start
```

Result:

```
--> Opossum versions: 5.0.1, 5.0.0, 4.2.4, 4.2.3, 4.2.1
  5 tests completed.

  go501 x 43,414 ops/sec ±7.99% (1000 runs sampled)
  go500 x 40,203 ops/sec ±12.21% (1000 runs sampled)
  go424 x 51,670 ops/sec ±13.09% (1000 runs sampled)
  go423 x 46,932 ops/sec ±8.92% (1000 runs sampled)
  go421 x 46,615 ops/sec ±9.14% (1000 runs sampled)
```

Skipped the version 4.2.2 due an error found during the tests:

```
})(window, function() {
   ^

ReferenceError: window is not defined
```
