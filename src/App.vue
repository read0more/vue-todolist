<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <header id="header">
    <h1>todos</h1>
    <input id="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
  </header>
  <section id="main">
    <input id="toggle-all" type="checkbox">
    <ul id="todo-list">
      <li class="todo">
        <div class="view">
          <input class="toggle" type="checkbox">
          <label></label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text">
      </li>
    </ul>
  </section>
  <footer id="footer">
				<span id="todo-count">
					<strong></strong> 0 left
				</span>
    <ul id="filters">
      <li><a href="#/all">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button id="clear-completed">
      Clear completed 0
    </button>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
