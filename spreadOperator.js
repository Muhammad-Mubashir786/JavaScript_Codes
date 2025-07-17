// let top3 = ["Lahore", "Islamabad", "Berlin"];
// function showItinerary(place1, place2, place3) {
//   console.log("Visit: " + place1);
//   console.log("Visit: " + place2);
//   console.log("Visit: " + place3);
// }
// // showItinerary((top3[0], top3[1], top3[2]));
// showItinerary(...top3);

// const [] = top3;
// const [first, second, ...secondVisit] = top3;
// console.log("First visit:", first);
// console.log("Second visit:", second);
// console.log("Later visits:", secondVisit);

// function addTaxToPrices(taxRate, ...itemsBrought) {
//   return itemsBrought.map((item) => taxRate * item);
// }
// let taxRate = 100;
// let shoppingCart = addTaxToPrices(1.1, 22, 54, 34, 8, 9);
// console.log(shoppingCart);

// const [one, two, ...rest] = [1,2,3,4,5,6];
// console.log(one)
// console.log(two)
// console.log(rest)

// function sum(...number){
//   return number.reduce((total,num)=>total+num,0);
// }
// console.log(sum(1,2,3,4))

// const fruits = ['apple','mango','banana'];
// const veggies = ['onion','chilli','tomato'];
// let veggiesFruits = [...fruits,...veggies, 'Potato'];
// console.log(veggiesFruits)
// const fruits2 = [...fruits];
// fruits.pop();
// console.log(fruits,'not',fruits2)
// const flying = {wings : 2};
// const car = {wheels: 4};
// const flyingCar = {...flying,...car,engine:'jet engine'};
// console.log(flyingCar)

// let a = "hello";
// let b = [...a]
// console.log(b)

// const car1 = {
//   speed:120,
//   color:'blue',
// }
// const car2 = {...car1}
// car1.speed=200;
// console.log(car1.speed,car2.speed)

const topSixRestaurants = ['a','b','c','d','e','f'];
const [first, second,third,...remaining] = topSixRestaurants;
console.log(`First restaurant: ${first}`);
console.log(`second restaurant: ${second}`);
console.log(`third restaurant: ${third}`);
console.log(`Remaining restaurant: ${remaining}`);


function unknownArgs(...args){
  for(var i =0;i<args.length;i++){
    console.log(args[i])
  }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");

const favoriteBaseballTeams = ["Yankees", "Mets", "Dodgers", "Giants", "Red Sox", "Cubs"];
const favoriteFootballTeams = ["Patriots", "Giants", "Jets", "Eagles", "Steelers", "Cowboys"];
const merge = [...favoriteBaseballTeams,...favoriteFootballTeams];
console.log(merge);