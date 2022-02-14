import mutations from "../mutations.js";
import Todo from "@/entities/Todo";

describe("todos mutation", () => {
  let state;

  beforeEach(() => {
    state = {
      todos: [
        new Todo({ id: 1, content: "내용1", done: true }),
        new Todo({ id: 2, content: "내용2", done: false }),
        new Todo({ id: 3, content: "내용3", done: false }),
        new Todo({ id: 4, content: "내용4", done: true }),
      ],
    };
  });

  test("add todo", () => {
    const newTodo = new Todo({ id: 5, content: "내용5", done: false });
    mutations.addTodo(state, newTodo);
    expect(state.todos.pop()).toEqual(newTodo);
  });
});
