/*
countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
As shown in the example image above, only keys which have a truthy value should be counted in the resulting object. All other strings (either set to false or not included at all in the object) should not be counted. That said, if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.

*/

//countOnly will be given an array and an object
//it will return an object containing counts of everything that the input object listed.
//only keys which have a truthy value should be counted in the resulting object
//All other strings (either set to false or not included at all in the object) should not be counted
//if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  let finalItemCounts = {};

  let items = [];
  for (const key in itemsToCount) {
    if (Object.hasOwnProperty.call(itemsToCount, key)) {
      if (itemsToCount[key] === true)
        items.push(key)
    }
  }

  items.forEach(element => {
    let count = 0;
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i] === element)
        count++;
    }
    if (count)
      finalItemCounts[element] = count;
  });
  return finalItemCounts;
}

module.exports = countOnly;