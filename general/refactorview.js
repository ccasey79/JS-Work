

var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  // Using true & false combinations
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed Todos
    for(var i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // if everything is true, make everything false
    if (completedTodos === totalTodos) {
    // make everything false
    for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false;
      }
    // otherwise: make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

// CLICK HANDLERS - when user clicks & inputs data
var handlers = {

  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');     // input box - connect via getElementById
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

// VIEWING THE TODOLIST - dynamically adding the todolist to the DOM.

  var view = {
    displayTodos: function() {
    var todosUl = document.querySelector('ul');            // grabs ul element
    todosUl.innerHTML = "";                                // gets rid of any previous ul list

    for(var i = 0; i < todoList.todos.length; i++ ) {     // creates a list item for each todo list item from the array.
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];

      var todoTextCompletion = "";
      if (todo.completed === true) {
        todoTextCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextCompletion = '() ' + todo.todoText;
      }
      todoLi.textContent = todoTextCompletion;
      todosUl.appendChild(todoLi);                         // appends the todo list item to ul.
      }
    }
  };
