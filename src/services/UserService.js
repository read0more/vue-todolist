import User from "@/entities/User.js";

export default class UserService {
  ALLOWED_UPDATE_FIELDS = ["password"];

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   *
   * @param {User}user
   * @returns {Promise<User>}
   */
  async create(user) {
    return this.userRepository.create(user);
  }

  /**
   *
   * @param {String}id
   * @returns {Promise<User> | undefined}
   */
  async read(id) {
    return this.userRepository.read(id);
  }

  /**
   *
   * @param id
   * @param {Object} fields
   * @param {?String} fields.password
   * @returns {Promise<User>}
   */
  async update(id, fields) {
    const notAllowedFields = Object.keys(fields).filter(
      (key) => !this.ALLOWED_UPDATE_FIELDS.includes(key)
    );

    if (notAllowedFields.length) {
      throw new Error(`${notAllowedFields.join(', ')}는 변경 할 수 없다.`);
    }

    if (fields) return this.userRepository.update(id, fields);
  }

  /**
   *
   * @param id
   * @returns {Promise<void>}
   */
  async delete(id) {
    return this.userRepository.delete(id);
  }
}
