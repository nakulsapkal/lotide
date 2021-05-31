const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const map = require('../map');


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0]);

assertArraysEqual(eqArrays(results1, results2), true);
assertArraysEqual(eqArrays(map(["Light", "House", "Labs"], x => x[0]), map(["Light", "House", "Labs"], x => x[0])), true);
assertArraysEqual(eqArrays(map(["Light", "House", "Labs"], x => x[0]), map(["light", "house", "labs"], x => x[0])), false);
assertArraysEqual(eqArrays(map(["Light", "House", "Labs"], x => x[1]), map(["light", "house", "labs"], x => x[2])), false);