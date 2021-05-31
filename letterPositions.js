const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here charArray
  let charArray = [];
  for (const iterator of sentence) {
    charArray.push(iterator)
  }

  for (let i = 0; i < charArray.length; i++) {
    let letterPositions = [];

    for (let j = 0; j < charArray.length; j++) {
      if (charArray[i] === charArray[j])
        letterPositions.push(j);
    }
    if (charArray[i] !== " ")
      results[charArray[i]] = letterPositions;
  }

  return results;
};

module.exports = letterPositions;