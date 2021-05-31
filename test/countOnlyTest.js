const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result["Jason"], 1);
assertEqual(result["Karima"], undefined);
assertEqual(result["Fang"], 2);
assertEqual(result["Agouhanna"], undefined);