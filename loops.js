for(var i=1;i<=3;i++){
    console.log(i);
}
console.log("GO");

for(var i=10;i>=1;i--){
    console.log(i);
}
console.log("New Year");

var num = 3;
while(num >0){
    console.log(num);
    num--;
}
console.log("Lets go");

for(var year = 2020;year<=2023;year++){
    console.log("Year: "+year);
    for(var month = 1; month<=3;month++){
        console.log("------------",month)
    }
}
for(var i = 2020;i<=2023;i++){
    console.log("Year: "+i);
    for(var j = 1; j<=3;j++){
        console.log("------------",j)
    }
}
console.log("Table of 2");
for(var i =2;i<3;i++){
    for(var j = 1;j<=10;j++){
        console.log(i+" X "+j+" = "+i*j);
    }
}

    for(var i =50;i>10;i=i-10){
        for(var j = 10;j>4;j=j-5){
            console.log(i+" divided "+j+" = "+i/j);
        }
    }