const without = function(sourceArray, itemToRemove) {
  let outputArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    let isSame = true;
    let j = 0;
    while (j != itemToRemove.length) {
      if (sourceArray[i] === itemToRemove[j])
        isSame = false;
      j++;
    }
    if (isSame)
      outputArray.push(sourceArray[i]);
  }
  return outputArray;
}

module.exports = without;