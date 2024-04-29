<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/Footer.vue'
</script>

<template>
  <div>
    <AppNavbar />
    <!-- <div class ="pb-20 sm:pt-20 md:pt-24">
      
    </div> -->
<RouterView />
  </div>
  <footer>
    <AppFooter />
  </footer>
</template>