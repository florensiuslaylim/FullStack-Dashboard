import { LocalStorage } from 'quasar'

const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Login.vue')
      }
    ]
  },
  {
    path: '/',
    beforeEnter (to, from, next) {
      const userData = LocalStorage.getItem('token')
      if (userData) {
        next()
      } else {
        next('/login')
      }
    },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
