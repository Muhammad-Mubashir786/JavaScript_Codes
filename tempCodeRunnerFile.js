var h1 = document.createElement('h1');
h1.innerText='Type your name';
var input = document.createElement;
input.setAttribute('type', text)

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function(){
    h1.innerText = input.value;
})