//We can convert any function into currying function.

//Here is the regural function sum and we need to convert this function into currying function.
function sum(a, b, c) {
    return a * b * c;
};

//curry converter function
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        }
        else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
};

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));

//we can create the curry convertor function or also use curry convertor function from the third-party library loadash.

//we need to go to the loadash library and copy the loadash cdn link and paste the link in html file > body tag > script tag > in src attribute. then we can use the curry converter function from loadash. const curriedSum = _.curry(sum)