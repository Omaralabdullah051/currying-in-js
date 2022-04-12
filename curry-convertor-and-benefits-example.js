function log(date, importance, message) {
    console.log(
        `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} :${importance} :${message}`
    );
};

//here we convert the log function into currying function
const curriedLog = _.curry(log);

curriedLog(new Date(), "DEBUG", "Some debug");

const logNow = curriedLog(new Date());
//now we don't need to pass the date parameter everytime which is common.
logNow("INFO", "info message");