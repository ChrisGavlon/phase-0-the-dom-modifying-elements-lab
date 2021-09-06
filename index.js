// Write your code here!

// main.remove(document.getElementById('main'));
//or
//main.remove(main)
//main.remove(querySelector('#main'))
const main = document.querySelector('#main')
main.remove()
const newHeader = document.createElement('h1');

document.body.appendChild(newHeader);

newHeader.id = 'victory';

newHeader.textContent = "Chris is the champion";