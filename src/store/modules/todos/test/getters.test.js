import getters from "../getters.js";
import Todo from "@/entities/Todo";

describe("todos getter", () => {
  const state = {
    todos: new Map([
      [1, new Todo({ id: 1, content: 'aa', done: true })],
      [2, new Todo({ id: 2, content: 'bb', done: false })],
      [3, new Todo({ id: 3, content: 'cc', done: false })],
      [4, new Todo({ id: 4, content: 'dd', done: true })],
    ]),
  };

  test("get todos only done", () => {
    const todos = getters.todos(state);
    expect(todos).toEqual(state.todos);
  });
  test("get todos only done", () => {
    const filtered = getters.doneTodos(state);
    expect(filtered).toEqual(new Map([
      [1, new Todo({ id: 1, content: 'aa', done: true })],
      [4, new Todo({ id: 4, content: 'dd', done: true })],
    ]));
  });
});
