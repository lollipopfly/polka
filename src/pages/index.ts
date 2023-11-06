import Routing from './index.vue'
import { HomeLayout } from '@/widgets/home-layout/'

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
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: () => import('./book')
  }
]

export { Routing }
