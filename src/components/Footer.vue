<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const leftTodos = computed(() => store.getters["todos/leftTodos"]);
const doneTodos = computed(() => store.getters["todos/doneTodos"]);
</script>

<template>
  <footer id="footer">
    <span id="todo-count"> <strong></strong> {{ leftTodos.size }} left </span>
    <ul id="filters">
      <li><a href="#/all">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button id="clear-completed">Clear completed {{ doneTodos.size }}</button>
  </footer>
</template>

<style scoped></style>
