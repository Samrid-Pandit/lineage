import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sanity',
    name: 'Sanity',
    component: () => import('../views/Sanity.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/timelines',
    name: 'Timelines',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Timelines')
  },
  {
    path: '/timeline/:id',
    name: 'Timeline',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Timeline')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const url = router.resolve({name: 'Login', query: {next: to.path}})
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (router.app.$store.getters.isLoggedIn) {
      next()
    } else {
      next(url)
    }
  } else {
    next()
  }
})

export default router
