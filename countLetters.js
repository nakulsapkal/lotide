/*
Create a function called countLetters.

The function should take in a sentence (as a string) 
and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers.
 */

const countLetters = function(sentence) {

  let finalItemCounts = {};

  let itemsSorted = [];
  let finalItem = [];

  for (const iterator of sentence) {
    itemsSorted.push(iterator)
  }

  itemsSorted = itemsSorted.sort();

  for (let i = 0; i < itemsSorted.length; i++) {
    if (itemsSorted[i] !== itemsSorted[i + 1])
      finalItem.push(itemsSorted[i]);
  }

  finalItem.forEach(element => {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === element)
        count++;
    }
    if (count)
      finalItemCounts[element] = count;
  });
  return finalItemCounts;

}
module.exports = countLetters;