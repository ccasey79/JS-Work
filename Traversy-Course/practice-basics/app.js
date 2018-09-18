
console.log('JS LOADED!');

// Define UI Vars

const form = document.querySelector('#task-form');        // FORM
const taskList = document.querySelector('.collection');   // UL
const clearBtn = document.querySelector('.clear-tasks');  // 'A' LINK
const filter = document.querySelector('#filter');         // FILTER TASKS LABEL
const taskInput = document.querySelector('#task');        // INPUT TASK

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask)
}

// Add Task
function addTask(e) {
  if(taskInput.value === '' ) {
    alert('Add a task');
  }

// Create li element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));

// Create new link createElement
const link  = document.createElement('a');

// Add class
link.className = 'delete item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li to ul
taskList.appendChild(li);

// Clear input
taskInput.value = '';

  e.preventDefault();
}
