export default class UserRepositoryStub {
    users = new Map();

    async create(user) {
        this.users.set(user.id, user);
        return user;
    }
}