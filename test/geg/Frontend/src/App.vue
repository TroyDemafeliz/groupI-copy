<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import DashboardView from './admin-views/DashboardView.vue';
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue';

const route = useRoute()
const router = useRouter()

const isAdminRoute = computed(() => {
  return router.currentRoute.value.matched.some(record => record.path.includes('/admin'))
})
</script>

<template>
  <div>
    <AppNavbar v-if="!isAdminRoute" />
    <DashboardView v-if="isAdminRoute" />
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