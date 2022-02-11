import TodoService from "../TodoService.js";
import TodoRepositoryStub from "./TodoRepositoryStub.js";
import Todo from "@/entities/Todo";
import User from "@/entities/User";

/**
 *
 * @type {TodoService}
 */
let todoService = null;
describe("userService", () => {
  todoService = new TodoService(new TodoRepositoryStub());
  const todos = [
    { id: 1, done: true },
    { id: 2, done: false },
    { id: 3, done: false },
    { id: 4, done: true },
  ];

  test("create", async () => {
    const createdTodo = await todoService.create(todos[0]);
    expect(createdTodo).toEqual(todos[0]);
  });

  test("read", async () => {
    expect(await todoService.read(todos[0].id)).toEqual(todos[0]);
  });

  describe("update", () => {
    test("update todo", async () => {
      const updateFields = {
        content: "changed_content",
        done: false,
      };
      const updatedUser = await todoService.update(todos[0].id, updateFields);
      expect(updatedUser).toEqual(new Todo({ ...todos[0], ...updateFields }));
    });

    test("not allowed field", async () => {
      const updateFields = {
        id: "not_working",
        what: "not_working_too",
      };

      await expect(
          todoService.update(todos[0].id, updateFields)
      ).rejects.toThrow(
          `${Object.keys(updateFields).join(", ")}는 변경 할 수 없다.`
      );
    });
  });

  describe("delete", () => {
    test("delete todo", async () => {
      await todoService.delete(todos[0].id);
      const todo = await todoService.read(todos[0].id);
      expect(todo).toEqual(undefined);
    });

    test("delete doesn't exists todo", async () => {
      await expect(todoService.delete(todos[0].id)).rejects.toThrow(
          `${todos[0].id}는 없는 todo`
      );
    });
  });
});
