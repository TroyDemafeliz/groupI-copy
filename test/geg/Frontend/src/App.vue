<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <div>
    <AppNavbar />
    <div class ="pb-20 sm:pt-20 md:pt-24">
      <RouterView />
    </div>

  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>