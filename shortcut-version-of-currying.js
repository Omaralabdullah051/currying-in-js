function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
};

console.log(curriedMultiply(5)(6)(7));


//shortcut version of currying
const multiply = a => b => c => a * b * c;
console.log(multiply(5)(6)(7));

