import { mutations } from "./types.js";

export default {
  [mutations.INITIAL_TODO]: (state, todos) => {
    state.todos = new Map([...todos.entries()]);
  },
  [mutations.ADD_TODO]: (state, newTodo) => {
    state.todos.set(newTodo.id, newTodo);
  },
  [mutations.UPDATE_TODO]: (state, updatedTodo) => {
    state.todos.set(updatedTodo.id, updatedTodo);
  },
  [mutations.DELETE_TODO]: (state, id) => {
    state.todos.delete(id);
  },
};
