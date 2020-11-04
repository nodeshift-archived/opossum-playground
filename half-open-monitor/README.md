# Opossum half-open monitor

This example is related to https://github.com/nodeshift/opossum/issues/484

### how to run

```sh
$ npm install
$ npm start
```

The options used in this example are:

```js
const options = {
  timeout: 20,
  errorThresholdPercentage: 1,
  resetTimeout: 5
};
```

Where each 20ms opossum will consider it a timeout failure.

The reset timeout which interfere in hal-open is 5ms.

And we have a `(Math.floor(Math.random() * Math.floor(25))` to 
generate something between 0 and 25 to be added as delay for a function that simulates a delay.

So for each function call (fire) using values bigger than 20 (which is the timeout) we will have a
failure. Then according official docs, halfOpen is emitted after resetTimeout has elapsed:

```
* Emitted after `options.resetTimeout` has elapsed, allowing for
* a single attempt to call the service again. If that attempt is
* successful, the circuit will be closed. Otherwise it remains open.
```

```console
DBG-CORE 456781: called fire function with args 22
[0] DBG-CORE 456781: fire event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] DBG-CORE 456781: timeout event emitted
[0] DBG-CORE 456781: failure event emitted
[0] DBG-CORE 456781: stats fires 1
[0] DBG-CORE 456781: circuit volume threshold  0
[0] DBG-CORE 456781: error rate 100
[0] DBG-CORE 456781: error threshold percentage 1
[0] DBG-CORE 456781: stats failures 1
[0] DBG-CORE 456781: max failures undefined
[0] DBG-CORE 456781: is half open false
[0] DBG-CORE 456781: open event emitted
[0] **** closed false error **********
[0] DBG-CORE 456781: called fire function with args 15
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: rejected event emitted, circuit is open
[0] **** closed false error **********
[0] DBG-CORE 456781: halfOpen event emitted
[0] DBG-CORE 456781: called fire function with args 9
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: close event emitted
[0] DBG-CORE 456781: success event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] %% closed true success %%%%%%%%%%
[0] DBG-CORE 456781: called fire function with args 13
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: success event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] %% closed true success %%%%%%%%%%
[0] DBG-CORE 456781: called fire function with args 21
[0] DBG-CORE 456781: fire event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] DBG-CORE 456781: timeout event emitted
[0] DBG-CORE 456781: failure event emitted
[0] DBG-CORE 456781: stats fires 5
[0] DBG-CORE 456781: circuit volume threshold  0
[0] DBG-CORE 456781: error rate 40
[0] DBG-CORE 456781: error threshold percentage 1
[0] DBG-CORE 456781: stats failures 2
[0] DBG-CORE 456781: max failures undefined
[0] DBG-CORE 456781: is half open false
[0] DBG-CORE 456781: open event emitted
[0] **** closed false error **********
[0] DBG-CORE 456781: halfOpen event emitted
[0] DBG-CORE 456781: called fire function with args 11
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: close event emitted
[0] DBG-CORE 456781: success event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] %% closed true success %%%%%%%%%%
[0] DBG-CORE 456781: called fire function with args 14
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: success event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] %% closed true success %%%%%%%%%%
[0] DBG-CORE 456781: called fire function with args 17
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: success event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] %% closed true success %%%%%%%%%%
[0] DBG-CORE 456781: called fire function with args 8
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: success event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] %% closed true success %%%%%%%%%%
[0] DBG-CORE 456781: called fire function with args 10
[0] DBG-CORE 456781: fire event emitted
[0] DBG-CORE 456781: success event emitted
[0] DBG-SEMAPHORE 456781: semaphore counter 9007199254740991
[0] DBG-SEMAPHORE 456781: semaphore released
[0] %% closed true success %%%%%%%%%%
```
