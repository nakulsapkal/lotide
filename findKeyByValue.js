const assertEqual = function(actual, expected) {
    if (actual === expected)
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    else
        console.log(`Assertion Failed: ${actual} !== ${expected}`);
};




const findKeyByValue = function(obj, value) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            if (obj[key] === value)
                return key;
        }
    }
}


const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    action: "Dare Devil",
    fictional: "Flash",
    Number1: 1,
    2: "Breaking Bad"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dare Devil"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "flash"), "fictional");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Game Of Thrones"), "fictional"); //false case
assertEqual(findKeyByValue(bestTVShowsByGenre, 1), "Number1");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), 2); //False case