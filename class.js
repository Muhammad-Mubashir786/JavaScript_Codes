class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  turboOn() {
    console.log("Turbo is on!");
  }
}

const Car1 = new Car("Black", 300);
console.log(Car1);
console.log(Car1.turboOn());

class Animal {}
// var myDog = Object.create(Animal);
var myDog = new Animal();
console.log(Animal);

// class Animal {}
class Mammal extends Animal {}
class Elephant extends Mammal {}

class Ring {}
const bicycle = {
  bell: function () {
    return "Watch out";
  },
};
const door = {
  bell: function () {
    return "Open the door";
  },
};

function ringTheBell(purpose) {
  console.log(purpose);
}
console.log(door.bell);
console.log(bicycle.bell);

ringTheBell(bicycle);
ringTheBell(door);

"abc".concat("def");
["abc"].concat["def"];
["abc"] + ["def"];

class Birds {
    useWings(){
        console.log('flying');
    }
}
class Eagle extends Birds{
    useWings(){
        super.useWings();
        console.log("Barley flapping");
    }
}
class Penguin extends Birds{
    useWings(){
        console.log("Diving");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();