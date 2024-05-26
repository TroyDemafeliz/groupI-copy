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
import adminAddService from '../admin-views/adminAddService.vue'
import adminManageAccount from '../admin-views/adminManageAccount.vue'
import { isAuthenticated, useAuth } from '@/auth/useAuth'
import NotFound from '../router/NotFound.vue'
import adminUserManagement from '@/admin-views/adminUserManagement.vue'
import AdminChangePassword from '../admin-views/adminChangePassword.vue'



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
      component: adminBookingsView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin-bookings',
      name: 'admin-bookings',
      component: adminBookingsView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin-projects',
      name: 'admin-projects',
      component: adminProjectsView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin-users',
      name: 'admin-users',
      component: adminUserManagement,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin-services',
      name: 'admin-services',
      component: adminServicesView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin-services-add',
      name: 'admin-add-service',

      component: adminAddService,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin-account-settings',
      name: 'admin-account-manage',
      component: adminManageAccount,
      meta: { requiresAuth: true } 
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: { hideNavbar: true, hideFooter: true, customClass: false }

    }
  ]
})

router.beforeEach(async(to, from, next) => {
  console.log('Routing to:', to.name, 'Authenticated:', isAuthenticated.value);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated.value === false) {
      await useAuth().checkAuth();
    }

    if (!isAuthenticated.value) {
      console.log('Redirect to login from:', to.name);
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router 
