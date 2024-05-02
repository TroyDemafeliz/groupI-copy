import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../customer-views/HomeView.vue'
import AboutView from '../customer-views/AboutView.vue'
import ProjectsView from '../customer-views/ProjectsView.vue'
import ServicesView from '../customer-views/ServicesView.vue'
import RequestMeetingView from '../customer-views/RequestMeetingView.vue'
// import DashboardView from '../admin-views/DashboardView.vue'
import ProjectsGallery from '../projects/ProjectsGallery.vue'
import adminBookingsView from '../admin-views/adminBookingsView.vue'
import adminProjectsView from '../admin-views/adminProjectsView.vue'
import adminServicesView from '../admin-views/adminServicesView.vue'
import Login from '../components/Login.vue'
import adminEditService from '../admin-views/adminEditService.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/request',
      name: 'request',
      component: RequestMeetingView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: ProjectsGallery
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {customClass: true }
    },
    {
      path: '/admin-dashboard',
      name: 'dashboard',
      component: adminBookingsView
    },
    {
      path: '/admin-bookings',
      name: 'admin-bookings',
      component: adminBookingsView
    },
    {
      path: '/admin-projects',
      name: 'admin-projects',
      component: adminProjectsView
    },
    {
      path: '/admin-services',
      name: 'admin-services',
      component: adminServicesView
    },
    {
      path: '/admin-edit-service',
      name: 'admin-edit-service',
      component: adminEditService
    }
  ]
})

export default router
