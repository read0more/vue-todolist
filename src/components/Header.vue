<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { actions } from "@/store/modules/todos/types";
import Todo from "@/entities/Todo.js";

const store = useStore();
const input = ref();

function onSubmit() {
  const todo = new Todo({ content: input.value, done: false });
  store.dispatch(actions.ADD_TODO_TO_REPOSITORY, todo);
}
</script>

<template>
  <header id="header">
    <h1>todos</h1>
    <form @submit.prevent="onSubmit">
      <input
        id="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        :value="input"
        @input="input = $event.target.value"
      />
    </form>
  </header>
</template>

<style scoped></style>
