var storeManager = {}
    storeManager.movement = 4;
    storeManager.rangeTilesPerTurn = 4;
    storeManager.socialSkills = 50;
    storeManager.streetSmarts = 50;
    storeManager.health = 30;
    storeManager.specialAbility = "Finding business opportunities";
    storeManager.greeting = "Let's make some money!";

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 20,
    specialAbility: "young and ambitious",
    greeting: "Ready to assist!"
}
storeManager.nextAchievement = "Open a new store";
assistantManager.nextAchievement="Get promoted";

console.log(storeManager);
console.log(assistantManager);

var table = {
    legs: 4,
    color: "brown",
    material: 'wood',
    priceUSD: 100,
}

console.log(table);
console.log(table.color);

var house = {
    rooms: 3,
    color: "White",
    priceUSD: 10000,
}

var house2 = {}
house2.rooms = 4;
house2.color = "Grey";
house2.priceUSD = 12000;

console.log(house);

house.windows = 10;
console.log(house);

house.windows = 12;
console.log(house.windows);

var house3 = {};
house3["rooms"]=5;
house3['color']='Off-white';
house3['priceUSD']=14000;
house3.windows = 15;
console.log(house3);

var car = {};
car.make = "Toyota";
car["Model Year"] = 2025;
car.priceUsd = 30000;
car['1999'] = "OLD";
car["Model"] = "Camry";
console.log(car);

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed : 100,
    altitude : 200,
    color: "Red",
}
for(var i=0;i<arrOfKeys.length;i++){
    console.log(drone[arrOfKeys[i]]);
}