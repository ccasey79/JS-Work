
console.log('JS loaded!');

const birthday = new Date('9-10-1981');

console.log(birthday);




let listItem = document.querySelector('#book-list li:nth-child(2) .name');

listItem.textContent = 'Flew Over the Cuckoos Nest';

// Adding a list item

let list = document.querySelector('#book-list ul');

let li = document.createElement('li');
let bookTitle = document.createElement('span');
let deleteBtn = document.createElement('span');

bookTitle.textContent = 'Jane Eyre';
deleteBtn.textContent = 'delete';

bookTitle.className = 'name';
deleteBtn.className = 'delete';

li.appendChild(bookTitle);
li.appendChild(deleteBtn);
list.appendChild(li);