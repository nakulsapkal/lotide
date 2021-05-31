const eqArrays = function(arrList1, arrList2) {
  let assertResult = true;

  if ((!Array.isArray([arrList1])) || (!Array.isArray([arrList2])) || (arrList1.length !== arrList2.length) || arrList1 === undefined || arrList2 === undefined) {
    assertResult = false;
    return assertResult;
  }
  for (let i = 0; i < arrList1.length; i++) {
    if (arrList1[i] !== arrList2[i])
      assertResult = false;
  }
  return assertResult;
}


module.exports = eqArrays;