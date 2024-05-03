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
import adminAddService from '../admin-views/adminAddService.vue'
import NotFound from '../router/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { hideNavbar: true, hideFooter: true, customClass: false }
    },
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
      path: '/admin-services-edit',
      name: 'admin-edit-service',
      component: adminEditService,
      props: true
    },
    {
      path: '/admin-services-add',
      name: 'admin-add-service',
      component: adminAddService
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: { hideNavbar: true, hideFooter: true, customClass: false }
    }
  ]
})


export default router 

