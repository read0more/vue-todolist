import mutations from "../mutations.js";
import Todo from "@/entities/Todo";

describe("todos mutation", () => {
  let state;

  beforeEach(() => {
    state = {
      todos: new Map([
        [1, new Todo({ id: 1, content: "내용1", done: true })],
        [2, new Todo({ id: 2, content: "내용2", done: false })],
        [3, new Todo({ id: 3, content: "내용3", done: false })],
        [4, new Todo({ id: 4, content: "내용4", done: true })],
      ]),
    };
  });

  test("initial todo", () => {
    const emptyState = { todos: null };
    mutations.initialTodo(emptyState, state.todos);
    expect(emptyState.todos).toEqual(state.todos);
  });

  test("add todo", () => {
    const newTodo = new Todo({ id: 5, content: "내용5", done: false });
    mutations.addTodo(state, newTodo);
    expect(state.todos.get(5)).toEqual(newTodo);
  });

  test("update todo", () => {
    const updatedTodo = new Todo({
      id: 3,
      content: "변경된 내용3",
      done: true,
    });
    mutations.updateTodo(state, updatedTodo);
    expect(state.todos.get(3)).toEqual(updatedTodo);
  });

  test("delete todo", () => {
    const id = 4;
    mutations.deleteTodo(state, id);
    expect(state.todos.get(id)).toBe(undefined);
  });
});
