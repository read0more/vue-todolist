import User from "@/entities/User.js";

export default class UserRepositoryStub {
  users = new Map();

  async create(user) {
    if (this.users.has(user.id)) {
      throw new Error(`${user.id}는 이미 있는 회원`);
    }

    this.users.set(user.id, user);
    return user;
  }

  async read(id) {
    return this.users.get(id);
  }

  async update(id, fields) {
    const target = await this.read(id);
    this.users.set(id, new User({ ...target, ...fields }));
    return this.read(id);
  }

  async delete(id) {
    if (!this.users.has(id)) {
      throw new Error(`${id}는 없는 회원`);
    }

    this.users.delete(id);
  }
}
