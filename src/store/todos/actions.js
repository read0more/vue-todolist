import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types.js";

export default {
  addTodoToRepository({ commit }) {
    return new Promise((resolve, reject) => {
      // todo: 실제로 todo 관리할 곳에 요청
      setTimeout(() => {
        commit(ADD_TODO);
        resolve();
      }, 500);
    });
  },
};
