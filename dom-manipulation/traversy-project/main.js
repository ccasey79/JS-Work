
console.log('JS Loaded!');

let form = document.getElementById('addForm');
let itemsList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// Delete event
itemsList.addEventListener('click', removeItem); 

// Filter event
filter.addEventListener('keyup', filterItems );

// add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    let deleteBtn = document.createElement('button');

    // Add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node to the button
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append the button now to the li
    li.appendChild(deleteBtn);

    // Append li to the list (ul)
    itemsList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    
    // Convert text to lowercase
    let text = e.target.value.toLowerCase();

    // Get all items within the item list (li's)
    let items = itemsList.getElementsByTagName('li');

    // Convert to an array as it's providing as a html collection
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}