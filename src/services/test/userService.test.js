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
  const newUser = new User("yk", 1234);

  describe("create", () => {
    test("create user", async () => {
      const createdUser = await userService.create(newUser);
      expect(createdUser).toEqual(newUser);
    });

    test("trying exists create user", async () => {
      await expect(userService.create(newUser)).rejects.toThrow(
        `${newUser.id}는 이미 있는 회원`
      );
    });
  });

  describe("read",  () => {
    test('read user', async () => {
      const user = await userService.read(newUser.id);
      expect(user).toEqual(newUser);
    });

    test('read doesn\'t exists user', async () => {
      const user = await userService.read('');
      expect(user).toBe(undefined);
    });
  });
});
