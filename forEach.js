const fruits = ["apple", "mango", "banana", "kiwi"];
fruits.forEach(function appendIndex(fruits, index) {
  console.log(`${index}:${fruits}`);
});
num = [0, 10, 20, 30, 40, 50];
const result = num.filter(function (num) {
  return num > 20;
});
console.log(result);

let a = [1, 2, 3, 4, 5].map(function (nums) {
  return nums / 10;
});
console.log(a);

const results = [];
const drone = {
  speed: 100,
  color: "white",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (keys) {
  result.push(keys, drone[keys]);
});
console.log(result);

let boxer = new Map();
boxer.set(1, "Champion");
boxer.set(2, "runner up");
boxer.set(3, "third");
console.log(boxer);
console.log(boxer.get(1))
const repeated = [1,2,1,2,3]
const numbers = new Set(repeated);
console.log(numbers)