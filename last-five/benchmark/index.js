const lowCarb = require('lowcarb');

const delay = require('../index.js');

lowCarb.add(delay.go501, 1000);
lowCarb.add(delay.go500, 1000);
lowCarb.add(delay.go424, 1000);
lowCarb.add(delay.go423, 1000);
lowCarb.add(delay.go421, 1000);

lowCarb.run('Opossum versions: 5.0.1, 5.0.0, 4.2.4, 4.2.3, 4.2.1', false, true);
