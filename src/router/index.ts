import { createRouter, createWebHashHistory } from 'vue-router/auto'

import Home from '../pages/index.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact.vue'
import Publications from '../pages/publications.vue'
import Research from '../pages/research.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/publications', component: Publications },
  { path: '/research', component: Research },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
