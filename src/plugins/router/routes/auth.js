export default [{

  path: '/auth',
  components: {
    default: () => import('@/views/auth/')
  },
  children: [
    {
      path: 'login',
      name: 'auth',
      component: () => import('@/views/auth/login/')
    },
    {
      path: 'register',
      name: 'auth.register',
      component: () => import('@/views/auth/register/')
    },
    {
      path: 'forgotten',
      name: 'auth.forgotten',
      component: () => import('@/views/auth/forgotten/')
    },
    {
      path: 'logout',
      name: 'auth.logout',
      component: () => import('@/views/auth/logout/'),
      meta: { auth: true }
    }
  ]

}]
