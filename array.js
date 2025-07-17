var fruits = ["apple", "banana", "cherry"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "GTR") {
      console.log(i * 300, "GTR is a fast car");
    } else console.log(i * 100, arr[i]);
  }
}
var cars = ["Supra", "GTR", "MarkX"];
listArrayItems(cars);

var car = ["Toyota", "Porsche", "BMW"];
car.push("Mercedes");
car.push("Lexus");
car.pop();
console.log(car);

function arrBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var languages = arrBuilder("c++", "JavaScript","Python");
console.log(languages);



var letters = ['a', 'b', 'c'];
for(var i=0;i<letters.length;i++){
  console.log(letters[i]);
}

var letter = 'abcd';
for(var i =0;i<letter.length;i++){
  console.log(letter[i]);
}

var veggies = ['onion','parsley','carrot'];
console.log(veggies.length);
console.log(veggies[0]);
console.log(veggies[1]);
for(var i= 0;i<veggies.length;i++){
  console.log(veggies[i]);
}

var greeting = 'Howdy';
console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);
for(var i= 0;i<greeting.length;i++){
  console.log(greeting[i]);
}

var greet = 'hello ';
var name = 'world';
console.log(greet + name);
console.log(greet.concat(name));

console.log(greet.charAt(0));
console.log("Wo".concat("rl").concat("d"));
console.log("Hello".indexOf("l"));
console.log("Hello".lastIndexOf("l"));
console.log("Ho-ho-ho".split("-"));
console.log("Ho-ho-ho".toUpperCase());
console.log("HI".toLowerCase());



var clothes = [];
clothes.push("A");
clothes.push("B");
clothes.push("C");
clothes.push("D");
clothes.push("E");
console.log(clothes[2]);


var favCar={};
favCar.color = 'Black';
favCar.convertible = true;
favCar.turnKey = function(){
  console.log('Engine is running');
}
favCar.lightsOn = function(){
  console.log('Lights are on');
}
favCar.turnKey();
favCar.lightsOn();
console.log(favCar);




let arr = [1,2];
arr.push(3);
console.log(arr);
