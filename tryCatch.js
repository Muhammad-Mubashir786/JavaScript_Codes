// try{
//     console.log(c+d);
// } catch(err){
//     console.log("Error occurred: " + err.message);
// }

// try{
//     // console.log(c+d);
//     throw new ReferenceError();
//     // throw new Error();
// }catch(err){
//     console.log(err);
//     console.log("Error occurred: "+ err.message);
// }
// console.log("Program continued running");
// console.log(username);
// console.log((10).toString(2));

try{
    let a = b;

} catch(err){
    console.log("Error name:"+err.name);
    console.log("Error message:"+err.message);
    console.log("Error stack:"+err.stack);
}

function divide(a,b){
    if(b===0){
        throw new Error("Division by 0 is not allowed");
    }
    return a/b;
}
try{
    console.log(divide(10,0));
} catch(err){
    console.log(err.message);
}

var letter = 'abc';
console.log(letter.match(/a/));
console.log(letter.match(/d/));

function addTwoNums(a,b){
    try{
        if(typeof(a)!=='number'){
            throw new TypeError("argument a is not a number");
        } else if(typeof(b)!=='number'){
            throw new TypeError('argument b is not a number');
        }else{
            console.log(a+b);
        }

    } catch(err){
        console.log("Error",err);
    }
}
addTwoNums(5,"5");


function letterFinder(word, match){
    if(typeof(word)=='string'&& word.length>=2){
        if(typeof(match)=='string' && match.length==1){

            for(var i=0;i<word.length;i++){
                if(word[i]==match){
                    console.log("Found", match,"at",i);
                }else{
                    console.log("-------No match found at", i);
                }
            }
        }
    }else{
        console.log("Please pass the correct arguments");
    }
}
letterFinder("cat", "c");
letterFinder("cat", "z");

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")


try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

  try {
console.log('hello)
} catch(e) {
console.log('caught')
}

try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

  try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}