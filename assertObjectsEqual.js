const eqArrays = function(arrList1, arrList2) {
    for (let i = 0; i < arrList1.length; i++) {
        if (arrList1[i] !== arrList2[i]) {
            return false;
        }
    }
    return true;
}


const eqObjects = function(object1, object2) {
    let keysObject1 = [];
    let valuesObject1 = [];
    let keysObject2 = [];
    let valuesObject2 = [];

    keysObject1 = Object.keys(object1);
    valuesObject1 = Object.values(object1);
    keysObject2 = Object.keys(object2);
    valuesObject2 = Object.values(object2);

    keysObject1 = keysObject1.sort();
    keysObject2 = keysObject2.sort();
    valuesObject1 = valuesObject1.sort();
    valuesObject2 = valuesObject2.sort();


    if (keysObject1.length !== keysObject2.length)
        return false;

    for (let i = 0; i < keysObject1.length; i++) {

        if ((Array.isArray(valuesObject1[i]) && Array.isArray(valuesObject2[i])) && (valuesObject1[i].length === valuesObject2[i].length)) {
            return eqArrays(valuesObject1[i], valuesObject2[i]);

        } else {
            if ((keysObject1[i] !== keysObject2[i]) || (valuesObject1[i] !== valuesObject2[i])) {
                return false;
            }
        }
    }

    return true;
};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
    const inspect = require('util').inspect; // <= add this line
    if (eqObjects(object1, object2))
        console.log(`Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    else
        console.log(`Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); //true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); //false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); //true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); //false