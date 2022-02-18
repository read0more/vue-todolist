export default {
  todos: (state) => {
    return state.todos;
  },
  doneTodos: (state) => {
    return new Map(
      [...state.todos].filter((element) => {
        const [_, todo] = [...element];
        return todo.done;
      })
    );
  },
  leftTodos: (state) => {
    return new Map(
      [...state.todos].filter((element) => {
        const [_, todo] = [...element];
        return !todo.done;
      })
    );
  },
};
