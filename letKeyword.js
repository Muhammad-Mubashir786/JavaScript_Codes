let user;
console.log(user);
// let user = 'Candy';
user = "Anna";
console.log(user);

let date = new Date();
console.log(date);

function iceCream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIcecream = new iceCream("Kiwi");
let appleIcecream = new iceCream("apple");
kiwiIcecream;
appleIcecream;

let apple = new String("apple");
console.log(apple);
let pear = "pear";
"abcd".match(/d/);
a = new RegExp("abc");
new Date();
console.log(new Error());
console.log(new Map());
// console.log(new Promise());
new Promise((resolve, reject) => {}); // Valid, but doesn't resolve/reject anything

console.log(new Set());
console.log(new WeakMap());
console.log(new WeakSet());
