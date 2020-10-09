const lowCarb = require('lowcarb');

const delay = require('../index.js');

lowCarb.add(delay.go, 10000);
lowCarb.run('', true, true);
