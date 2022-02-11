import UserService from "../UserService.js";
import UserRepositoryStub from "./UserRepositoryStub";


describe("userService test", () => {
  let userService = null;
  beforeEach(() => {
    userService = new UserService(new UserRepositoryStub());
    console.log(userService);
  });

  test("create user", () => {
    // const createdUser = userService.create(user);
    // expect(createdUser).toEqual(user);
  });

  // test("trying exists create user", () => {
  //   expect(userService.create(user)).toThrowError("test");
  // });
});
