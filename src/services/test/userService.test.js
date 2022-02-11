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
});
