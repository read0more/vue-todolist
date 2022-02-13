import mutations from "../mutations.js";

describe("todos mutation", () => {
  let state;

  beforeEach(() => {
    state = {
      todos: [
        { id: 1, done: true },
        { id: 2, done: false },
        { id: 3, done: false },
        { id: 4, done: true },
      ],
    };
  });

  test("add todo", () => {
    const newTodo = { id: 5, done: false };
    mutations.addTodo(state, newTodo);
    expect(state.todos.pop()).toEqual(newTodo);
  });
});
