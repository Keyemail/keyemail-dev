import { createRouter, createWebHistory } from 'vue-router'

import homeView from '../views/HomePage.vue'
import galleryView from '../views/GalleryPage.vue'
import socialView from '../views/SocialsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: homeView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: galleryView
  },
  {
    path: '/socials',
    name: 'socials',
    component: socialView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
