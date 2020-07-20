const lowCarb = require('lowcarb');

const fileHandling = require('../index.js');

lowCarb.add(fileHandling.firefox, 10);
lowCarb.run('a', true);
