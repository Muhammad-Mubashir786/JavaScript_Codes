// var test = typeof("Hello, World!");
// var test = typeof(5);
// var test = typeof(3.3);
// var test = typeof(5>3);
// var test = typeof(true);
// var test = typeof(false);
// var test = typeof([1,2,3]);
// var test = typeof({ a : 1});
// var test = typeof(function abc(){console.log("ABC")});
console.log(test);

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
