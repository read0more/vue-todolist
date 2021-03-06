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
  const newUser = new User({ id: "yk", password: 1234 });

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

  describe("read", () => {
    test("read user", async () => {
      const user = await userService.read(newUser.id);
      expect(user).toEqual(newUser);
    });

    test("read doesn't exists user", async () => {
      const user = await userService.read("");
      expect(user).toBe(undefined);
    });
  });

  describe("update", () => {
    test("update user", async () => {
      const updateFields = {
        password: "changed_password",
      };
      const updatedUser = await userService.update(newUser.id, updateFields);
      expect(updatedUser).toEqual(new User({ ...newUser, ...updateFields }));
    });

    test("not allowed field", async () => {
      const updateFields = {
        id: "not_working",
        what: "not_working_too",
      };
      await expect(
        userService.update(newUser.id, updateFields)
      ).rejects.toThrow(
        `${Object.keys(updateFields).join(", ")}는 변경 할 수 없다.`
      );
    });
  });

  describe("delete", () => {
    test("delete user", async () => {
      await userService.delete(newUser.id);
      const user = await userService.read(newUser.id);
      expect(user).toEqual(undefined);
    });

    test("delete doesn't exists user", async () => {
      await expect(userService.delete(newUser.id)).rejects.toThrow(
        `${newUser.id}는 없는 회원`
      );
    });
  });
});
