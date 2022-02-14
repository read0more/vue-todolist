import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types.js";

export default {
  [ADD_TODO]: (state, newTodo) => {
    state.todos.push(newTodo);
  },
  [UPDATE_TODO]: (state, updatedTodo) => {
    state.todos = state.todos.map((todo) => {
      return updatedTodo.id === todo.id ? updatedTodo : todo;
    });
  },
  [DELETE_TODO]: (state, id) => {
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
  },
};
