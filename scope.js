var globalVar ="I am a global variable";
function scope(){
    var localVar = "I am a local variable";
    console.log(globalVar);
    console.log(localVar);
}
scope();

var virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false;
        console.log("Zzz...");
    }
}
console.log(virtualPet.sleepy);
virtualPet.nap();
console.log(virtualPet.sleepy);



function addTwoNum(a,b){
    console.log(a+b);
}
function randomNum(){
    return Math.floor((Math.random()*10)+1);
}
function specificNum(){
    return 42;
}
var useRandom = true;
var getNum;
if(useRandom){
    getNum = randomNum;
} else{
    getNum = specificNum;
}

addTwoNum(getNum(),getNum());
addTwoNum(specificNum(),specificNum());
addTwoNum(specificNum(),randomNum());