// function addTwoNums(){
//     var a =5;
//     var b = 10;
//     var c = a+b;
//     console.log(c);
// }
// addTwoNums();

// function addNums(a,b){
//     var c = a+b;
//     console.log(c);
// }
// addNums(5,10);
// addNums(5,5);



function letterFinder(word, match){
    for(i=0;i<word.length;i++){
        if(word[i]===match){
            console.log("Found the", match, 'at', i);
        }
        else{
            console.log("-----No match found at", i)
        }
    }
}
letterFinder("test", "t");
