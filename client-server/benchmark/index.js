const lowCarb = require('lowcarb');

const client = require('../index');
 
lowCarb.add(client.go, 1000);
lowCarb.run('', false, true);