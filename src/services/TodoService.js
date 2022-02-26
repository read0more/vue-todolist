import TodoEntity from "@/entities/Todo.js";

export default class TodoService {
  ALLOWED_UPDATE_FIELDS = ["content", "done"];

  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  /**
   *
   * @param {TodoEntity}todo
   * @returns {Promise<TodoEntity>}
   */
  async create(todo) {
    return this.todoRepository.create(todo);
  }

  /**
   *
   * @param {String}id
   * @returns {Promise<TodoEntity> | undefined}
   */
  async read(id) {
    return this.todoRepository.read(id);
  }

  /**
   *
   * @returns {Promise<TodoEntity[]> | undefined}
   */
  async readAll() {
    return this.todoRepository.readAll();
  }

  /**
   *
   * @param {TodoEntity} todo
   * @returns {Promise<TodoEntity>}
   */
  async update(todo) {
    return this.todoRepository.update(todo);
  }

  /**
   *
   * @param id
   * @returns {Promise<void>}
   */
  async delete(id) {
    return this.todoRepository.delete(id);
  }
}
