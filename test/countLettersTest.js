const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');



const result1 = countLetters('Create a function called countLetters');

assertEqual(result1["C"], 1);
assertEqual(result1[" "], 4);
assertEqual(result1["e"], 5);
assertEqual(result1["a"], 3);
assertEqual(result1["s"], 1);
assertEqual(result1["f"], 0); //false