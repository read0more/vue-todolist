export default {
  addTodo: (state, newTodo) => {
    state.todos.push(newTodo);
  },
  updateTodo: (state, updatedTodo) => {
    state.todos = state.todos.map((todo) => {
      return updatedTodo.id === todo.id ? updatedTodo : todo;
    });
  },
  deleteTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
  },
};
