import { createRouter, createWebHistory } from 'vue-router'

import homeView from '../views/HomePage.vue'
import galleryView from '../views/GalleryPage.vue'
import socialView from '../views/SocialsPage.vue'
import notFoundPage from '../views/404Page.vue'
import projectsView from '../views/ProjectsPage.vue'

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/:pathMatch(.*)',
    component: notFoundPage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: projectsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
