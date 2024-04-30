<script setup>
import { useRoute } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div>
    <AppNavbar v-if="!route.meta.hideNavbar" />
    <div class ="pb-0 sm:pt-20 md:pt-24">
      <RouterView />
    </div>
    <AppFooter v-if="!route.meta.hideFooter" />
  </div>
</template>