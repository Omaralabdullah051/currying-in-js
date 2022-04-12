function discount(price, disc) {
    return price - price * disc;
};

//Imperative pattern(everytime we need to pass the discount parameter into discount function,which is common for all customer)
const customer1D = discount(600, .1);
const customer2D = discount(700, .1);
const customer3D = discount(800, .1);
console.log(customer1D);


//Declarative Pattern
//We can convert the imperative pattern to declarative pattern by using currying techique.

function discount1(disc) {
    return (price) => {
        return price - price * disc;
    };
};

const tenPercentDiscount = discount1(0.1);
const customer4D = tenPercentDiscount(600);
const customer5D = tenPercentDiscount(700);
const customer6D = tenPercentDiscount(800);
console.log(customer4D);
//now we don't need to pass the discount parameter into discount1 function everytime which is common for all customer.

//if we want to give 20% discount to the customer who buy more than 1000 taka,we can easily do this.
const tweentyPercentDiscount = discount1(0.2);
const customer7D = tweentyPercentDiscount(1200);
const customer8D = tweentyPercentDiscount(1500);
const customer9D = tweentyPercentDiscount(1800);
console.log(customer7D);
