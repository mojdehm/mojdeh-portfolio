import { createRouter, createWebHashHistory } from 'vue-router/auto'

import Home from '../pages/index.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact.vue'
import Publications from '../pages/publications.vue'
import Research from '../pages/research.vue'
import Resume from '../pages/resume.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'contact', path: '/contact', component: Contact },
  { name: 'publications', path: '/publications', component: Publications },
  { name: 'research', path: '/research', component: Research },
  { name: 'resume', path: '/resume', component: Resume },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
