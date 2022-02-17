<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { actions } from "@/store/modules/todos/types";
import Todo from "@/entities/Todo.js";

const props = defineProps({
  todo: Todo,
});
</script>

<template>
  <li class="todo">
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label>{{ todo.content }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" type="text" />
  </li>
</template>

<style scoped></style>
