export default {
  addTodoToRepository({ commit }) {
    return new Promise((resolve, reject) => {
      // todo: 실제로 todo 관리할 곳에 요청
      setTimeout(() => {
        commit("addTodo");
        resolve();
      }, 500);
    });
  },
};
