import { mutations } from "./types.js";
import TodoService from "@/services/TodoService";

export default (todoRepository) => {
  const todoService = new TodoService(todoRepository);
  return {
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
        setTimeout(async () => {
          const todosFromRepository = await todoService.readAll();
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
};
