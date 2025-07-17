var result = 30;
if(result >= 40){
    console.log("You have passed the exam");
} else{
    console.log("You have failed the exam");
}


var place = 'first';
if(place === 'first'){
    console.log("Gold");
}else if(place === 'second'){
    console.log("Silver");
} else if(place === 'third'){
    console.log("Bronze");
} else {
    console.log("No medal");
}

var age = 20;
switch(age){
    case 18:
        console.log("You are eligible to vote");
        break;
    case 20:
        console.log("You are eligible to stand for election");
        break;
    case 30:
        console.log("You are eligible to be a president");
        break;
    default:
        console.log("You are not eligible for any political position");
        break;
}