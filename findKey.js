// Lodash's example code for findKey shows us that instead of just supporting callback functions, it can support "iteratee shorthand" using objects and arrays. We can safely ignore these examples since our function will be simpler and not need to support this.

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.


const assertEqual = function(actual, expected) {
    if (actual === expected)
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    else
        console.log(`Assertion Failed: ${actual} !== ${expected}`);
};


const findKeyOfInnerObject = (x, y) => { if (y(x)) return true; };


const findKey = function(object, callback) {
    for (const key1 in object) {
        if (object.hasOwnProperty.call(object, key1)) {
            if (typeof object[key1] === 'object') {
                if (findKeyOfInnerObject(object[key1], callback))
                    return key1;
            } else {
                if (callback(object[key1]))
                    return key1;
            }
        }

    }
}


const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    action: "Dare Devil",
    fictional: "Flash",
    Number_1: "Breaking Bad"
};

const best = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
};

assertEqual(findKey(best, x => x.stars === 2), "noma"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "The Expanse"), "sci_fi"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "That '70s Show"), undefined); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "Dare Devil"), "action"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "Flash"), "fictional"); //true
assertEqual(findKey(bestTVShowsByGenre, x => x === "Game Of Thrones"), "fictional"); //false
assertEqual(findKey(bestTVShowsByGenre, x => x === "Breaking Bad"), "Number1"); //false