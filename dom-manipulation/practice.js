console.log('JS Loaded!');

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var container = document.getElementById('main');

// Add event listeners
form.addEventListener('submit', addItem);

// Run the add item event function
function addItem(e) {
  e.preventDefault();

  // Get the input value
  var newItem = document.getElementById('item').value;

  // Create the li Element
  var newLi = document.createElement('li');

  // Add className
  newLi.className = 'list-group-item';

  // Add the text from the li
  newLi.appendChild(document.createTextNode(newItem));

  // Added the li to the ul
  itemList.append(newLi);

  container.style.backgroundColor = 'pink';
  container.style.borderColor = 'red';

}

var date = new Date();
document.getElementById('dateInfo').innerHTML = date.getFullYear();
