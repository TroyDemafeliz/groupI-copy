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
  return route.path.includes('/admin')
})

const showNavAndFooter = computed(() => {
  const path = route.path
  return !path.includes('/admin') && path !== '/login'
})

const isNotLoginPage = computed(() => {
  return route.path !== '/login';
});

const previousRoute = ref('');

watch(() => route.path, (currentPath, oldPath) => {
  if (previousRoute.value === '/') {
    window.scrollTo(0, 0);
  }
  previousRoute.value = currentPath;
}, { immediate: true });

const contentClasses = computed(() => {
  return isNotLoginPage.value ? 'pb-20 sm:pt-20 md:pt-24' : '';
});

</script>

<template>
  <div>
    <ProtectedRoute v-if="isAdminRoute"/>
    <AppNavbar v-if="showNavAndFooter" />
    <DashboardView v-if="isAdminRoute" />
    <div :class="contentClasses">
      <RouterView />
    </div>
    <AppFooter v-if="showNavAndFooter" />
  </div>
</template>