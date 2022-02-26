import { createRouter, createWebHistory } from "vue-router";
import Index from "@/page/Index.vue";

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    { path: "/", component: Index },
    { path: "/:filter", component: Index },
  ],
});
