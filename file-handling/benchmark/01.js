const lowCarb = require('lowcarb');

const fileHandling = require('../index.js');

lowCarb.add(fileHandling.fire, 1);
lowCarb.run();
