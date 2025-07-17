

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log("Currency One: " + currencyTwo);


function consoleLog(val){
    console.log(val);
    return val;
}
consoleLog('hello');

function doubleIt(val){
    return val * 2;
}
function objectMaker(val){
    return {
        prop: val,
    }
}
objectMaker(20);
// console.log(doubleIt(10).toString(2));
// console.log(objectMaker(doubleIt(100)));

let result = objectMaker(doubleIt(5));
console.log(result);



let counter = 3
function example(){
    console.log(counter);
    counter--;
    if(counter ===0){
        return;
    }
    example();
}
console.log(example());