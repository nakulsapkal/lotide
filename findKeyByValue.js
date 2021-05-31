const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] === value)
        return key;
    }
  }
}


module.exports = findKeyByValue;