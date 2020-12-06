import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Test from '@/components/Test'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Profile from '@/views/Profile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {
        auth: true
      },
      component: Profile
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})

export default router
