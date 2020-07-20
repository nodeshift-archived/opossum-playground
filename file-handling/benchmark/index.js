const lowCarb = require('lowcarb');

const fileHandling = require('../index.js');

lowCarb.add(fileHandling.go, 1000);
lowCarb.run('', true, false);
