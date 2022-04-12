function multiply(a, b, c) {
    return a * b * c;
};

console.log(multiply(5, 6, 7));


//curriedMultiply is a curried version of multiply function.
function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
};

console.log(curriedMultiply(5)(6)(7));