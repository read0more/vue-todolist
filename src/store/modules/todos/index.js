import state from "./state.js";
import getters from "./getters.js";
import getActions from "./actions.js";
import mutations from "./mutations.js";
import TodoRepositoryStub from "@/services/test/TodoRepositoryStub";

export default {
  namespaced: true,
  state,
  getters,
  actions: getActions(new TodoRepositoryStub()),
  mutations,
};
