import getActions from "../actions.js";
import { mutations } from "../types.js";
import Todo from "@/entities/Todo.js";
import TodoRepositoryStub from "@/services/test/TodoRepositoryStub";

describe("todos actions", () => {
  let commitStub = null;
  let actions = null;
  beforeEach(() => {
    actions = getActions(new TodoRepositoryStub());
    commitStub = jest.fn();
  });

  test("commit addTodo", async () => {
    const newTodo = new Todo({ id: 1, content: "새 todo", done: false });
    await actions.addTodoToRepository({ commit: commitStub }, newTodo);
    expect(commitStub).toHaveBeenCalledWith(mutations.ADD_TODO, newTodo);
  });

  test("get all todos", async () => {
    await actions.getAllTodos({ commit: commitStub });
    // todo: 실제로 통신을 하게 되면 빈 배열 하드 코딩 대신 response에 대한 mock으로
    expect(commitStub).toHaveBeenCalledWith(mutations.INITIAL_TODO, new Map());
  });

  test("commit updateTodo", async () => {
    await actions.updateTodoToRepository({ commit: commitStub });
    expect(commitStub).toHaveBeenCalledWith(mutations.UPDATE_TODO);
  });

  test("commit deleteTodo", async () => {
    await actions.deleteTodoToRepository({ commit: commitStub });
    expect(commitStub).toHaveBeenCalledWith(mutations.DELETE_TODO);
  });
});
