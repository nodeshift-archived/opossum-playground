const lowCarb = require('lowcarb');

const fileHandling = require('../index.js');

lowCarb.add(fileHandling.firefox, 1);
lowCarb.run();
