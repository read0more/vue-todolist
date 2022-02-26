import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout.vue";

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    { path: "/", component: Layout },
    { path: "/:filter", component: Layout },
  ],
});
