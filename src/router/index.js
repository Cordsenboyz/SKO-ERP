import { createRouter, createWebHistory } from 'vue-router'
import LagerView from '../views/LagerView.vue'
import HomeView from '../views/HomeView.vue'
import ManagerView from '../views/ManagerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Lager',
      name: 'Lager',
      component: LagerView,
    },
    {
      path: '/Manager',
      name: 'Manager',
      component: ManagerView
    }
  ]
})

export default router
  