// class Animal {
//   constructor(color = "yellow", energy = 100) {
//     this.color = color;
//     this.energy = energy;
//   }
//   isActive() {
//     if (this.energy > 0) {
//       this.energy -= 20;
//       console.log("Energy is decreasing:", this.energy);
//     } else if (this.energy <= 0) {
//       this.sleep();
//     }
//   }
//   sleep() {
//     this.energy += 20;
//     console.log("Energy is increasing:", this.energy);
//   }
//   getColor() {
//     console.log(this.color);
//   }
// }

// class Cat extends Animal {
//   constructor(
//     sound = "furr",
//     highJump = true,
//     climbTrees = true,
//     color,
//     energy
//   ) {
//     super(color, energy);
//     this.sound = sound;
//     this.highJump = highJump;
//     this.climbTrees = climbTrees;
//   }
//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class bird extends Animal {
//   constructor(sound = "chirp", canFly = true, color, energy) {
//     super(color, energy);
//     this.canFly = canFly;
//     this.sound = sound;
//   }
// }
// class HouseCat extends Cat {
//   constructor(
//     houseCatSound = "meow",
//     sound,
//     highJump,
//     climbTrees,
//     color,
//     energy
//   ) {
//     super(sound, highJump, climbTrees, color, energy);
//     this.houseCatSound = houseCatSound;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }

//     console.log(this.houseCatSound);
//   }
// }

// class Tiger extends Cat{
//     constructor(tigerSound="roar", highJump,climbTrees,sound,color,energy){
//         super(sound,highJump,climbTrees,color,energy)
//         this.tigerSound=tigerSound
//     }
//     makeSound(option){
//         if(option){
//             super.makeSound();
//         }
//         console.log(this.tigerSound)
//     }
// }

// class Parrot extends bird{
//     constructor(canTalk = true, sound, canFly,color,energy){
//         super(sound,canFly,color,energy)
//         this.canTalk=canTalk

//     }
//     makeSound(option){
//         if(option){
//             super.makeSound();
//         }
//         if(this.canTalk){
//             console.log("I am a talking Parrot");
//         }
//     }
// }

// var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
// var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

// polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
// fiji.makeSound(); // 'chirp'

// polly.color; // yellow
// polly.energy; // 100

// polly.isActive(); // Energy is decreasing, currently at: 80

// var penguin = new bird("shriek", false, "black and white", 200); // setting all the custom properties
// penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

// penguin.sound; // 'shriek'
// penguin.canFly; // false
// penguin.color; // 'black and white'
// penguin.energy; // 200
// penguin.isActive(); 


    class Animal {

    }

    class Cat extends Animal {
      constructor() {
        super();
        this.noise = "meow";
      }
    }

    var result = new Animal();
    console.log(result.noise);