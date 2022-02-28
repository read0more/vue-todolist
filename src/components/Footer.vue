<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const leftTodos = computed(() => store.getters["todos/leftTodos"]);
const doneTodos = computed(() => store.getters["todos/doneTodos"]);
</script>

<template>
  <footer id="footer">
    <span id="todo-count"> <strong></strong> {{ leftTodos.size }} left </span>
    <ul id="filters">
      <li><router-link to="/all">All</router-link></li>
      <li><router-link to="/active">Active</router-link></li>
      <li><router-link to="/completed">Completed</router-link></li>
    </ul>
    <button id="clear-completed">Clear completed {{ doneTodos.size }}</button>
  </footer>
</template>

<style scoped></style>
