import { mutations } from "./types.js";
import TodoService from "@/services/TodoService";
import TodoRepositoryStub from "@/services/test/TodoRepositoryStub";
import Todo from "@/entities/Todo";

const todoService = new TodoService(new TodoRepositoryStub());
export default {
  async addTodoToRepository({ commit }, todo) {
    await todoService.create(todo);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(mutations.ADD_TODO, todo);
        resolve();
      }, 100);
    });
  },
  getAllTodos({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const todosFromRepository = [];
        commit(mutations.INITIAL_TODO, todosFromRepository);
        resolve();
      }, 100);
    });
  },

  updateTodoToRepository({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(mutations.UPDATE_TODO);
        resolve();
      }, 100);
    });
  },

  deleteTodoToRepository({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(mutations.DELETE_TODO);
        resolve();
      }, 100);
    });
  },
};
