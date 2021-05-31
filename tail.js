/*const tail = function(arr) {
    let tailArray = [];
    let j = 0;

    for (let i = 1; i < arr.length; i++) {
        tailArray[j] = arr[i];
        j++;
    }
    return tailArray;
};*/

const tail = array => array.slice(1);
module.exports = tail;