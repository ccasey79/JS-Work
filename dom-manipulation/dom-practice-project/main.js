console.log('JS Loaded!');

var form = document.getElementById('addForm');  // grab the form
var itemList = document.getElementById('items'); // grab the ul
var filter = document.getElementById('filter'); // grab the search bar



// Form submit event
form.addEventListener('submit', addItem);

// Delete an event
itemList.addEventListener('click', removeItem);

// Filter the event (search bar)
filter.addEventListener('keyup', filterItems);




// Add the items
function addItem(e) {
  e.preventDefault();

// Get Input value - remember to add .value
var newItem = document.getElementById('item').value;

// Create new Li getElement
var li = document.createElement('li');

// Add a class - to list item
li.className = 'list-group-item';

// Adding the text node (list item) with input value
li.appendChild(document.createTextNode(newItem));

// Create a Delete button Element
var deleteBtn = document.createElement('button');

// Add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append the text node - (on the delete button)
deleteBtn.appendChild(document.createTextNode('X'));

// Appending the li to the ul
itemList.appendChild(li);

// Appending Delete Button to li
li.appendChild(deleteBtn);
}




// Remove item (with delete button)
function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')) {
      var li = e.target.parentElement;
        itemList.removeChild(li);
    }
  }
}




// Filter items (on search bar)
function filterItems(e) {

  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  // Get Li's within itemList
  var items = itemList.getElementsByTagName('li');

  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
