var bird = {
  canFly: true,
  hasWings: true,
  hasFeathers: true,
};
var eagle1 = Object.create(bird);
console.log("Eagle1:", eagle1);
console.log("has feathers:", eagle1.hasFeathers);
console.log("has wings:", eagle1.hasWings);
console.log("can fly:", eagle1.canFly);

var eagle2 = Object.create(bird);
 console.log("eagle2:", eagle2);
console.log("has feathers:", eagle2.hasFeathers);
console.log("has wings:", eagle2.hasWings);
console.log("can fly:", eagle2.canFly);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1:", penguin1);
console.log("has feathers:", penguin1.hasFeathers);
console.log("has wings:", penguin1.hasWings);
console.log("can fly:", penguin1.canFly);

