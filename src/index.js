import "./styles.css";
import { Todo, TodoList } from "./classes";
import { createTodoHtml } from "./js/components";

export const todoList = new TodoList();

todoList.todos.forEach((todo) => {
  createTodoHtml(todo);
});
// const task = new Todo('Learn JavaScript');

// todoList.newTodo( task );
// createTodoHtml( task );

// localStorage.setItem('my-key', 'ABC123');
// sessionStorage.setItem('my-key', 'ABC123');
// setTimeout(() => {
//     localStorage.removeItem('my-key');
// }, 1500);
