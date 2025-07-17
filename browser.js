// const { createElement } = require("react");

// let answer = prompt('What is your name?');
// if(typeof answer === 'string'){
//     var h1 = document.createElement('h1')
//     h1.innerText =answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }


// var h1 = document.createElement('h1');
// h1.innerText = "type into the input to make this text change";
// var input = document.createElement('input')
// input.setAttribute('input', 'text');
// document.body.innerText = '';
// document.body.appendChild(h1)
// document.body.appendChild(input)

// var h1 = document.createElement('h1');
// h1.innerText='Type your name';
// var input = document.createElement('input');
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function(){
//     h1.innerText = input.value;
// })

let h1 = document.querySelector('h1')
let arr = ['Example Domain','First Click','Second Click','Third Click']
function handleClick() {
    switch(h1.innerText){
        case arr[0]:
            h1.innerText =arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
}}
h1.addEventListener('click',handleClick)