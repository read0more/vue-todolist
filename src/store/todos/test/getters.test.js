import getters from "../getters.js";

describe("todos getter", () => {
  test("get todos only done", () => {
    const state = {
      todos: [
        { id: 1, done: true },
        { id: 2, done: false },
        { id: 3, done: false },
        { id: 4, done: true },
      ],
    };
    const filtered = getters.doneTodos(state);
    expect(filtered).toEqual([
      { id: 1, done: true },
      { id: 4, done: true },
    ]);
  });
});
