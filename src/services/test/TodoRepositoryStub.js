import Todo from "@/entities/Todo.js";

export default class TodoRepositoryStub {
  constructor(todos) {
    this.todos = todos ?? new Map();
  }

  async create(todo) {
    const id = this.todos.size + 1;
    const createdTodo = { ...todo, id };
    this.todos.set(id, createdTodo);
    return createdTodo;
  }

  async read(id) {
    return this.todos.get(id);
  }

  async readAll() {
    return this.todos;
  }

  async update(id, fields) {
    const target = await this.read(id);
    this.todos.set(id, new Todo({ ...target, ...fields }));
    return this.read(id);
  }

  async delete(id) {
    if (!this.todos.has(id)) {
      throw new Error(`${id}는 없는 todo`);
    }

    this.todos.delete(id);
  }
}
