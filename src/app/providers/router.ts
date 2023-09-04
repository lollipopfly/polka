import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/pages'

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../../pages/home/index.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     }
//   ]
// })

// export default router
