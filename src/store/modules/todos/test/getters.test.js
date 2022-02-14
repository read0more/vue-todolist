import getters from "../getters.js";
import Todo from "@/entities/Todo";

describe("todos getter", () => {
  test("get todos only done", () => {
    const state = {
      todos: [
        new Todo({ id: 1, content: "내용1", done: true }),
        new Todo({ id: 2, content: "내용2", done: false }),
        new Todo({ id: 3, content: "내용3", done: false }),
        new Todo({ id: 4, content: "내용4", done: true }),
      ],
    };
    const todos = getters.todos(state);
    expect(todos).toEqual(state.todos);
  });
  test("get todos only done", () => {
    const state = {
      todos: [
        new Todo({ id: 1, content: "내용1", done: true }),
        new Todo({ id: 2, content: "내용2", done: false }),
        new Todo({ id: 3, content: "내용3", done: false }),
        new Todo({ id: 4, content: "내용4", done: true }),
      ],
    };
    const filtered = getters.doneTodos(state);
    expect(filtered).toEqual([
      new Todo({ id: 1, content: "내용1", done: true }),
      new Todo({ id: 4, content: "내용4", done: true }),
    ]);
  });
});
