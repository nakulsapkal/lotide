const args = process.argv;
let pigLatinResult = "";


const piglatin = function(arg) {
    let pigLatinFormat = "";
    for (let i = 1; i < arg.length; i++) {
        pigLatinFormat += arg[i];
    }
    return pigLatinFormat += (arg[0] + "ay");
};

for (let i = 2; i < args.length; i++) {
    pigLatinResult += (piglatin(args[i]));

    if (i + 1 != args.length)
        pigLatinResult += " ";
}

console.log(pigLatinResult);