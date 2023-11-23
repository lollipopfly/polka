import Routing from './index.vue'
import { HomeLayout } from '@/widgets/home-layout/'

export const routes = [
  {
    path: '/',
    name: 'home',
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
    path: '/bookshelf',
    component: () => import('./bookshelf')
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: () => import('./book')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('./not-found'),
    meta: {
      layout: HomeLayout
    }
  }
]

export { Routing }
