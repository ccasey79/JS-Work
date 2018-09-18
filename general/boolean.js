
// Object incorporating booleans

// also changing text into objects
// this is due to objects represent more data than using text


var todoList = {
  todos: [],                              // start with no items in list
  displayTodos: function() {
    console.log('My Todos: ',this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({                     // add the new list objects
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;   // this references the property above (addTodo) todoText,
    this.displayTodos();                        // then assigns to the variable todoText. Only changes the property.
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

todoList.addTodo('first test');
todoList.toggleCompleted(0);
