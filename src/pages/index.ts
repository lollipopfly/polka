import Routing from './index.vue'
import { HomeLayout } from '@/shared/ui/home-layout/'

export const routes = [
  {
    path: '/',
    component: () => import('./home'),
    meta: {
      layout: HomeLayout
    }
  },
  {
    path: '/favorites',
    component: () => import('./favorites')
  }
]

export { Routing }
