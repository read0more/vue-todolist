<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { actions } from "@/store/modules/todos/types";
import Todo from "@/entities/Todo.js";

const props = defineProps({
  todo: Todo,
});

const store = useStore();
const isEdit = ref(false);
const editContent = ref(props["todo"].content ?? "");
const FINISH_EDIT_KEYS = ["Escape", "Enter"];

function handleEdit({ key }) {
  if (key === "Enter") {
    store.dispatch(actions.UPDATE_TODO_TO_REPOSITORY, {
      ...props["todo"],
      content: editContent,
    });
  }

  if (FINISH_EDIT_KEYS.includes(key)) {
    isEdit.value = false;
  }
}

function handleDelete() {
  store.dispatch(actions.DELETE_TODO_TO_REPOSITORY, props["todo"].id);
}

function handleDone() {
  store.dispatch(actions.UPDATE_TODO_TO_REPOSITORY, {
    ...props["todo"],
    done: !props["todo"].done,
  });
}
</script>

<template>
  <li class="todo" :class="{ editing: isEdit }">
    <div class="view" @dblclick="isEdit = true">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.done"
        @click="handleDone"
      />
      <label>{{ todo.content }}</label>
      <button class="destroy" @click="handleDelete"></button>
    </div>
    <input
      class="edit"
      type="text"
      @keyup="handleEdit"
      :value="editContent"
      @input="editContent = $event.target.value"
    />
  </li>
</template>

<style scoped></style>
