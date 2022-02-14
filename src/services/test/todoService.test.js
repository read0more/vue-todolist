import TodoService from "../TodoService.js";
import TodoRepositoryStub from "./TodoRepositoryStub.js";
import Todo from "@/entities/Todo";

/**
 *
 * @type {TodoService}
 */
let todoService = null;
describe("userService", () => {
  const todos = new Map([
    [1, { id: 1, done: true }],
    [2, { id: 2, done: false }],
    [3, { id: 3, done: false }],
    [4, { id: 4, done: true }],
  ]);
  todoService = new TodoService(new TodoRepositoryStub(todos));

  test("create", async () => {
    const newTodo = new Todo({ id: 5, content: "새 todo", done: false });
    const createdTodo = await todoService.create(newTodo);
    expect(createdTodo).toEqual(newTodo);
  });

  test("read", async () => {
    expect(await todoService.read(todos.get(1).id)).toEqual(todos.get(1));
  });

  describe("update", () => {
    test("update todo", async () => {
      const updateFields = {
        content: "changed_content",
        done: false,
      };
      const updatedUser = await todoService.update(
        todos.get(1).id,
        updateFields
      );
      expect(updatedUser).toEqual(
        new Todo({ ...todos.get(1), ...updateFields })
      );
    });

    test("not allowed field", async () => {
      const updateFields = {
        id: "not_working",
        what: "not_working_too",
      };

      await expect(
        todoService.update(todos.get(1).id, updateFields)
      ).rejects.toThrow(
        `${Object.keys(updateFields).join(", ")}는 변경 할 수 없다.`
      );
    });
  });

  describe("delete", () => {
    const id = todos.get(1).id;
    test("delete todo", async () => {
      await todoService.delete(id);
      const todo = await todoService.read(id);
      expect(todo).toEqual(undefined);
    });

    test("delete doesn't exists todo", async () => {
      await expect(todoService.delete(id)).rejects.toThrow(
        `${id}는 없는 todo`
      );
    });
  });
});
