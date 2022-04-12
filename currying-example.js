function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
};

//By following the currying technique, we can split the function in multiple steps and when we call this steps,everytime we get the partial function. So,Currying function is a combination of multiple partial function.
const step1 = curriedMultiply(5);//partial function
const step2 = step1(6);//partial function
const step3 = step2(7);//partial function
console.log(step3);

// When we have a common steps that will helps us.Because we don't need to pass common steps parameter every time.

//When we call the partial functions, Closure gives us the access of outer function's scope from the partial function. that is why when we call the curriedMultiply function which recieves an argument a that returns a partial function and a variable is stored in closure scope.And when we call this partial funciton which recieves an argument b that returns another partial function and b variable is stored in closure scope. This partial function receives an argument c that returns the total addition of a,b,c.In the last steps,Closure gives us the access of a,b variable. that is why we get the result.