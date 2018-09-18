

// Object with methods example

var todoList = {
  todos: ["item 1", "item 2", "item 3", "item 4"],
  displayTodos: function() {
    console.log('My Todos: ',this.todos);
  },
  addTodo: function(newTodo) {
    this.todos.push(newTodo);
    this.displayTodos();
  },
  changeTodo: function(position, nameChange) {
    this.todos[position] = nameChange;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

todoList.deleteTodo(4);
