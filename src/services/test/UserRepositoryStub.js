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
}
