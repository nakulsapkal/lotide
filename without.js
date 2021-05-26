const eqArrays = function(arrList1, arrList2) {
    let assertResult = true;

    if (arrList1.length !== arrList2.length)
        return false;

    for (let i = 0; i < arrList1.length; i++) {
        if (arrList1[i] !== arrList2[i])
            assertResult = false;
    }
    return assertResult;
}


const assertArraysEqual = function(arrayList1, arrayList2) {
    if (eqArrays(arrayList1, arrayList2))
        console.log("Assertion Passed: ", arrayList1, " === ", arrayList2);
    else
        console.log("Assertion Failed: ", arrayList1, " !== ", arrayList2);
}




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



let words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["world"]), ["hello", "lighthouse"]);
words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [1, 2, 3]);