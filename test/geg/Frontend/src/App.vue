<script setup>
import { useRoute } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import DashboardView from './admin-views/DashboardView.vue';
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue';
import AppFooter from './components/Footer.vue'

const route = useRoute()
const router = useRouter()

const isAdminRoute = computed(() => {
  return router.currentRoute.value.matched.some(record => record.path.includes('/admin'))
})

const route = useRoute()
</script>

<template>
  <div>
    <AppNavbar v-if="!isAdminRoute" />
    <DashboardView v-if="isAdminRoute" />
    <div class ="pb-20 sm:pt-20 md:pt-24">
      <RouterView />
    </div>
    <AppFooter v-if="!route.meta.hideFooter" />
  </div>
</template>