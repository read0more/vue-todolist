import UserService from "../UserService.js";
import UserRepositoryStub from "./UserRepositoryStub";
import User from "@/entities/User";

describe("userService test", () => {
  /**
   *
   * @type {UserService}
   */
  let userService = null;
  beforeEach(() => {
    userService = new UserService(new UserRepositoryStub());
  });

  test("create user", async () => {
    const user = new User("yk", 1234);
    const createdUser = await userService.create(user);
    expect(createdUser).toEqual(user);
  });
});
