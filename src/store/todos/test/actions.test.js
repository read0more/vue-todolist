import actions from "../actions.js";
import {INITIAL_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO} from "../types.js";

describe("todos actions", () => {
  let commitStub = null;
  beforeEach(() => {
    commitStub = jest.fn();
  });

  test("commit addTodo", async () => {
    await actions.addTodoToRepository({commit: commitStub});
    expect(commitStub).toHaveBeenCalledWith(ADD_TODO);
  });

  test("get all todos", async () => {
    await actions.getAllTodos({commit: commitStub});
    // todo: 실제로 통신을 하게 되면 빈 배열 하드 코딩 대신 response에 대한 mock으로
    expect(commitStub).toHaveBeenCalledWith(INITIAL_TODO, []);
  });

  test("commit updateTodo", async () => {
    await actions.updateTodoToRepository({commit: commitStub});
    expect(commitStub).toHaveBeenCalledWith(UPDATE_TODO);
  });

  test("commit deleteTodo", async () => {
    await actions.deleteTodoToRepository({commit: commitStub});
    expect(commitStub).toHaveBeenCalledWith(DELETE_TODO);
  });
});
