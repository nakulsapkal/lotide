const assertEqual = require('../assertEqual');
const findKey = require('../findKey');


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "Dare Devil",
  fictional: "Flash",
  Number_1: "Breaking Bad"
};

const best = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(best, x => x.stars === 2), "noma"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "The Expanse"), "sci_fi"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "That '70s Show"), undefined); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "Dare Devil"), "action"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "Flash"), "fictional"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "Game Of Thrones"), "fictional"); //false
assertEqual(findKey(bestTVShowsByGenre, x => x === "Breaking Bad"), "Number_1"); //true