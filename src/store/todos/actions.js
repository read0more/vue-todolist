import { INITIAL_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types.js";

// todo: 실제로 todo 관리할 곳에 요청
export default {
  addTodoToRepository({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(ADD_TODO);
        resolve();
      }, 100);
    });
  },
  getAllTodos({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const todosFromRepository = [];
        commit(INITIAL_TODO, todosFromRepository);
        resolve();
      }, 100);
    });
  },

  updateTodoToRepository({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(UPDATE_TODO);
        resolve();
      }, 100);
    });
  },

  deleteTodoToRepository({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(DELETE_TODO);
        resolve();
      }, 100);
    });
  },
};
