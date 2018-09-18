

// Practice file


var todos = ["item1", "item 2", "item 3"];

// It should have a function to display the todos (array)
function displayTodos() {
  console.log("My Todos: ", todos);
}

// It should have a function to add to the todos (array)
function addToDo(todo) {
  todos.push(todo);
  displayTodos();
}

// It should have a function to change the value in todos (array)
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// It should have a function to delete the value in todos (array)
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
