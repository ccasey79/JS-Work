
var todoList = {
  todos: [],
  displayTodos: function() {

    if (this.todos.length === 0) {
      console.log('The todoList is empty');
    } else {
      console.log('My Todos:');
      for(var i = 0; i < this.todos.length; i++) {

        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);   // picking out each item of array & adding todoText property
        } else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    debugger;
    this.todos.push({
      todoText: todoText,                             // todoText property
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos
    for(var i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // if everythings true, make everything false
    if (completedTodos === totalTodos) {
        for( var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
      }
    // otherwise make everything true
    } else {
        for(var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};


// for loop & if statement at the top:

// 1st - checking logic if the todolist is empty
// Then else - putting the for loop in the else alternative
// to loop through the todolist items in the array.
