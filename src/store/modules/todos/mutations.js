import { mutations } from "./types.js";

export default {
  [mutations.INITIAL_TODO]: (state, todos) => {
    state.todos = todos;
  },
  [mutations.ADD_TODO]: (state, newTodo) => {
    state.todos.push(newTodo);
  },
  [mutations.UPDATE_TODO]: (state, updatedTodo) => {
    state.todos = state.todos.map((todo) => {
      return updatedTodo.id === todo.id ? updatedTodo : todo;
    });
  },
  [mutations.DELETE_TODO]: (state, id) => {
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
  },
};
