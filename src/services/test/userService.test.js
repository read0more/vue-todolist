import UserService from "../UserService.js";
import UserRepositoryStub from "./UserRepositoryStub";
import User from "@/entities/User";

/**
 *
 * @type {UserService}
 */
let userService = null;
describe("userService", () => {
  userService = new UserService(new UserRepositoryStub());

  describe('create', () => {
    test("create user", async () => {
      const user = new User("yk", 1234);
      const createdUser = await userService.create(user);
      expect(createdUser).toEqual(user);
    });

    test("trying exists create user", async () => {
      const user = new User("yk", 1234);
      await expect(userService.create(user)).rejects.toThrow(`${user.id}는 이미 있는 회원`);
    });
  });
});
