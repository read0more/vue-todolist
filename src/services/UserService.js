import User from "@/entities/User.js";

export default class userService {
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
    if (fields) return this.userRepository.update(id, fields);
  }
}
