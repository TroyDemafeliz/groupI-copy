<script setup>
import AppNavbar from './components/AppNavbar.vue'
import DashboardView from './admin-views/DashboardView.vue';
import { useRoute, useRouter } from 'vue-router'
import { computed, watch, ref } from 'vue';
import AppFooter from './components/Footer.vue'
import ProtectedRoute from './components/ProtectedRoute.vue';
const route = useRoute()
const router = useRouter()

const isAdminRoute = computed(() => {
  return router.currentRoute.value.matched.some(record => record.path.includes('/admin'))
})

const previousRoute = ref('');

watch(() => route.path, (currentPath, oldPath) => {
  if (previousRoute.value === '/') {
    window.scrollTo(0, 0);
  }
  previousRoute.value = currentPath;
}, { immediate: true });

</script>

<template>
  <div>
    <ProtectedRoute v-if="isAdminRoute"/>
    <AppNavbar v-if="!isAdminRoute" />
    <DashboardView v-if="isAdminRoute" />
    <div class ="pb-20 sm:pt-20 md:pt-24">
      <RouterView />
    </div>
    <AppFooter v-if="!isAdminRoute" />
  </div>
</template>