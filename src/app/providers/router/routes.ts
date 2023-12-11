import { HomeLayout } from '@/widgets/home-layout/'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home'),
    meta: {
      layout: HomeLayout
    }
  },
  {
    path: '/favorites',
    component: () => import('@/pages/favorites')
  },
  {
    path: '/bookshelf',
    component: () => import('@/pages/bookshelf')
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: () => import('@/pages/book')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/not-found'),
    meta: {
      layout: HomeLayout
    }
  }
]
