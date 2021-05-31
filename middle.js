const middle = function(sourceArr) {
  const arrayLength = sourceArr.length;
  const middleOfArray = [];
  if (arrayLength < 3)
    return middleOfArray;

  if ((sourceArr.length % 2) !== 0)
    middleOfArray.push(sourceArr[Math.ceil((arrayLength / 2) - 1)]);
  else {
    middleOfArray.push(sourceArr[(arrayLength / 2) - 1]);
    middleOfArray.push(sourceArr[arrayLength / 2]);
  }
  return middleOfArray;
}

module.exports = middle;