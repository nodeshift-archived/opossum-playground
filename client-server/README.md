# Opossum Client-Server Example

This example shows how we can use opossum in a client-server architecture.

### Client

The client consists of a simple node.js module exposing a function that requests data from a server using the built-in **http** node module.

### Server

The server is an express.js application that uses the opossum module with a **random-failure** function that determeans if the response to the client will be successful or a failure.

### Steps

```sh
$ npm install
$ npm start
```

results:

```
success: 39
success: 40
success: 41
failures: 6, fallbacks: 0, rejects: 0, timeouts: 0
success: 42
success: 43
failures: 7, fallbacks: 0, rejects: 0, timeouts: 0
success: 44
success: 45
failures: 8, fallbacks: 0, rejects: 0, timeouts: 0
failures: 9, fallbacks: 0, rejects: 0, timeouts: 0
failures: 10, fallbacks: 0, rejects: 0, timeouts: 0
success: 46
failures: 11, fallbacks: 0, rejects: 0, timeouts: 0
success: 47
success: 48
failures: 12, fallbacks: 0, rejects: 0, timeouts: 0
```
