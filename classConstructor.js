// class StationaryBike {
//   constructor(position, gears) {
//     this.position = position;
//     this.gears = gears;
//   }
// }
// class Treadmill {
//   constructor(position, modes) {
//     this.position = position;
//     this.modes = modes;
//   }
// }
// class Gym {
//   constructor(openHrs, StationaryBikePos, TreadmillPos) {
//     this.openHrs = openHrs;
//     this.StationaryBike = new StationaryBike(StationaryBikePos, 8);
//     this.Treadmill = new Treadmill(TreadmillPos, 5);
//   }
// }

// var boxingGym = new Gym("7 - 22", "rightCorner", "leftCorner");

// console.log(boxingGym.openHrs);
// console.log(boxingGym.StationaryBike);
// console.log(boxingGym.Treadmill);

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightStatus() {
    console.log("Lights On?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passenger, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passenger = passenger;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed on?", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightStatus();
    console.log("Lights are 100% operational");
  }
}

var myFirstTrain = new Train("white", false);
console.log(myFirstTrain);
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("green", false);

var train4 = new Train("red", false);
train4.toggleLights();
train4.lightStatus();
train4.getSelf();
train4.getPrototype();

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200,true,"OrangeLine",true)
highSpeed1.toggleHighSpeed();
train5.lightStatus();
train5.toggleLights();
