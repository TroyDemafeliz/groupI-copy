import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/AdminHome.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ServicesView from '../components/AdminServices.vue'
import RequestMeetingView from '../components/RequestMeeting.vue'
import DashboardView from '../views/DashboardView.vue'
import ProjectsGallery from '../projects/ProjectsGallery.vue'
import Login from '../components/Login.vue'

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
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { hideNavbar: false, hideFooter: true }
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
      meta: { hideNavbar: true, hideFooter: true, customClass: false }
    }
  ]
})

export default router
