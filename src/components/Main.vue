<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { actions } from "@/store/modules/todos/types";
import Todo from "@/components/Todo.vue";
import TodoEntity from "@/entities/Todo.js";

const store = useStore();
onMounted(() => {
  store.dispatch(actions.GET_ALL_TODOS);
});

const todos = computed(() => store.getters["todos/todos"]);
</script>

<template>
  <section id="main">
    <input id="toggle-all" type="checkbox" />
    <ul id="todo-list">
      <Todo
        v-for="[_, todo] in todos"
        :key="todo.id"
        :todo="new TodoEntity(todo)"
      ></Todo>
    </ul>
  </section>
</template>

<style scoped></style>
