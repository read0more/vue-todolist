import actions from "../actions.js";
import Todo from "@/entities/Todo";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../types.js";

describe("todos actions", () => {
  test("commit addTodo", async () => {
    const commitStub = jest.fn();
    await actions.addTodoToRepository({ commit: commitStub });
    expect(commitStub).toHaveBeenCalledWith(ADD_TODO);
  });
});
