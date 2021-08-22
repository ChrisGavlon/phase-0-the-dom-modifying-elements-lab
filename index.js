// Write your code here!
main.remove(document.getElementById('main'));

const newHeader = document.createElement('h1');

document.body.appendChild(newHeader);

newHeader.id = 'victory';

newHeader.textContent = "Chris is the champion";