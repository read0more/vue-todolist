import { mutations } from "./types.js";
import TodoService from "@/services/TodoService";

export default (todoRepository) => {
  const todoService = new TodoService(todoRepository);
  return {
    async addTodoToRepository({ commit }, todo) {
      const createTodo = await todoService.create(todo);
      return new Promise((resolve, reject) => {
        commit(mutations.ADD_TODO, createTodo);
        resolve();
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

    updateTodoToRepository({ commit }, todo) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(mutations.UPDATE_TODO, todo);
          resolve();
        }, 100);
      });
    },

    deleteTodoToRepository({ commit }, id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(mutations.DELETE_TODO, id);
          resolve();
        }, 100);
      });
    },
  };
};
