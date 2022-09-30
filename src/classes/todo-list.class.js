import { Todo } from './index';

export class TodoList {
  constructor() {
    // this.todos = [];
    this.updateLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.saveToLocalStorage();
  }

  markCompleted(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
        break;
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  updateLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? (this.todos = JSON.parse(localStorage.getItem("todo")))
      : [];

    this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
  }
}
