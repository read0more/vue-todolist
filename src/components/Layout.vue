<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
</script>

<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<style>
</style>
