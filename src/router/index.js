import { createRouter, createWebHistory } from 'vue-router'
import LagerView from '../views/LagerView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/Lager',
      name: 'Lager',
      component: LagerView,
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: AdminView
    }
  ]
})

export default router
  