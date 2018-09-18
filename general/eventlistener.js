

// Displaying how event listeners connect with the document
// This is with using buttons
// Without incorporating objects.


// We want to get access to the display todos button.
// We want to run displayTodos method, when someone clicks the display todos button.


// HTML

//<button id="displayTodosButton">Display Todos</button>
//<button id="toggleAllButton">Toggle All</button>

var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});


// Displaying, creating lists to the HTML

// HTML

// <ul>
// </ul>

var todoLi = document.createElement('li');
var todosUl = document.querySelector('ul');
todosUl.appendChild(todoLi);
