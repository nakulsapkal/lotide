const args = process.argv;

const reverse = function(arg) {
    reverseString = "";
    for (let j = arg.length - 1; j >= 0; j--) {
        reverseString += arg[j];
    }
    return reverseString;
};

for (let i = 2; i < args.length; i++) {
    console.log(reverse(args[i]));
}