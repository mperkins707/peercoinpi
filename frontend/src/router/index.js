import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import DashboardMints from '../views/DashboardMints.vue'
import Settings from '../views/Settings.vue';
import Backups from '../views/Backups.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/mints',
    name: 'Dashboard - Mints',
    component: DashboardMints
  },
  {
    path: '/dashboard/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/dashboard/backups',
    name: 'Backups',
    component: Backups
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
