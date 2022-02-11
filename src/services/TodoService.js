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
   * @param id
   * @param {Object} fields
   * @param {?String} fields.content
   * * @param {?Boolean} fields.done
   * @returns {Promise<TodoEntity>}
   */
  async update(id, fields) {
    const notAllowedFields = Object.keys(fields).filter(
      (key) => !this.ALLOWED_UPDATE_FIELDS.includes(key)
    );

    if (notAllowedFields.length) {
      throw new Error(`${notAllowedFields.join(", ")}는 변경 할 수 없다.`);
    }

    if (fields) return this.todoRepository.update(id, fields);
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
