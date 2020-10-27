# Opossum Client-Server-error-rate

This example shows how we can use opossum in a client-server architecture.

### Client

The client consists of a simple node.js module exposing a function that requests data from a server using the built-in **http** node module.

### Server

The server is an express.js application that uses the opossum module with a **random-failure** function that determines if the response to the client will be successful or a failure.

### Steps

```sh
$ npm it
```

Open [http://localhost:3000/](http://localhost:3000/)

### Results:

#### 100% `error rate` and `error threshold percentage` 20%

browser:
```
fires: 1, failures: 1, error rate: 100
```

terminal:
```
DBG-CORE 48632: fire event emitted
DBG-CORE 48632: failure event emitted
DBG-CORE 48632: stats fires 1
DBG-CORE 48632: circuit volume threshold  0
DBG-CORE 48632: error rate 100
DBG-CORE 48632: error threshold percentage 20
DBG-CORE 48632: stats failures 1
DBG-CORE 48632: max failures undefined
DBG-CORE 48632: is half open false
DBG-CORE 48632: open event emitted
DBG-CORE 48632: halfOpen event emitted
```

#### 33% `error rate` and `error threshold percentage` 20%

browser:
```
fires: 3, failures: 1, error rate: 33.33333333333333
```

terminal:
```
DBG-CORE 48632: fire event emitted
DBG-CORE 48632: failure event emitted
DBG-CORE 48632: stats fires 3
DBG-CORE 48632: circuit volume threshold  0
DBG-CORE 48632: error rate 33.33333333333333
DBG-CORE 48632: error threshold percentage 20
DBG-CORE 48632: stats failures 1
DBG-CORE 48632: max failures undefined
DBG-CORE 48632: is half open false
DBG-CORE 48632: open event emitted
```

#### 33% `error rate` and `error threshold percentage` 70%

browser:
```
fires: 3, failures: 1, error rate: 33.33333333333333
```

terminal -- **open event not emitted**:
```
DBG-CORE 61370: fire event emitted
DBG-CORE 61370: failure event emitted
DBG-CORE 61370: stats fires 3
```
