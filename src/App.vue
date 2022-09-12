<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="navbar">
    <div>
      <nav>
        <router-link to="/">Post</router-link>-
        <router-link to="/authors">Authors</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  background-color: lightgreen;
  padding: 1.2rem;
}
</style>
