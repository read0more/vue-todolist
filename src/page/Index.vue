<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import Layout from "@/components/Layout.vue";
</script>

<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #main>
      <Main></Main>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </Layout>
</template>

<style></style>
