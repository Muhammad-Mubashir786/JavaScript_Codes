// 
var dairy = ["cheese",'sour cream', 'milk', 'yogurt','ice cream', 'milkshake']
function logDairy(){
    for(product of dairy){
        console.log(product);
    }
}
logDairy();
const animal = {
    canJump: true
};
const bird = Object.create(animal)
bird.canFly = true;
bird.hasFeathers = true;
function birdCan(){
    for(let prop of bird){
        console.log(`${prop}: ${bird[prop]}`)
    }
}
// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan(){
    for(let animals in bird){
        console.log(`${animals}: ${bird[animals]}`);
    }
}
animalCan();