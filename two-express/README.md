```
npm install
npm start
```

Open a new terminal and run:

```
npm test
```

The `ab` command required for this example. This is part of `httpd-tools` in fedora.

Result: 

```
[0] result: ok, fires: 1, successes: 1, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 2, successes: 2, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 3, successes: 3, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 4, successes: 4, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 5, successes: 5, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 6, successes: 6, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 7, successes: 7, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 8, successes: 8, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
[0] result: ok, fires: 9, successes: 9, failures: 0, fallbacks: 0, rejects: 0, timeouts: 0
...
...
```

This example is based on this use case: https://github.com/nodeshift/opossum/issues/181