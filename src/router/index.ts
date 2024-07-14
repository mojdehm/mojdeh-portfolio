import { createRouter, createWebHashHistory } from 'vue-router/auto'

import Home from '../pages/index.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact.vue'
import Publications from '../pages/publications.vue'
import Research from '../pages/research.vue'
import Resume from '../pages/resume.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/publications', component: Publications },
  { path: '/research', component: Research },
  { path: '/resume', component: Resume },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
