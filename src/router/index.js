import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import LeadersView from '../views/LeadersView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/leaders',
    name: 'leaders',
    component: LeadersView
  },
  {
    path:'/admin',
    name: 'admin',
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

