const lowCarb = require('lowcarb');

const fileHandling = require('../index.js');

lowCarb.add(fileHandling.fire, 1);
lowCarb.add(fileHandling.fire, 2);
lowCarb.add(fileHandling.fire, 3);
lowCarb.run();
