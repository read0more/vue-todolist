import actions from "../actions.js";
import Todo from "@/entities/Todo";

describe("todos actions", () => {
  test("commit addTodo", async () => {
    const commitStub = jest.fn();
    await actions.addTodoToRepository({ commit: commitStub });
    expect(commitStub).toHaveBeenCalledWith("addTodo");
  });
});
