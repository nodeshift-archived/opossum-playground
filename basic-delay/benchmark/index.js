const lowCarb = require('lowcarb');

const delay = require('../index.js');

lowCarb.add(delay.go, 100);
lowCarb.run('', true, true);
