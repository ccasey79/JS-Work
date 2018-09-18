

// Practice file

// The original displayTodos method was replaced, just used for the console.log
// view object below represents the new displayTodos method in the document.

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

// CLICK HANDLERS - click events, handle different clicks

var handlers = {
// Click handlers below use an input, grabbing by getElementById
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
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

// VIEW - displaying list elements of the todo list (what the user sees, displays the todo's array to the screen)

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = "";
      for(var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";

        if(todo.completed === true) {
          todoTextWithCompletion = '(x) ' + todo.todoText;
        } else {
          todoTextWithCompletion = '() ' + todo.todoText;
        }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
