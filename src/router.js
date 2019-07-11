import Vue from 'vue'
import Router from 'vue-router'
import AboutUser from './views/AboutUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AboutUser',
      component: AboutUser
    },
    {
      path: '/search',
      name: 'Search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Search.vue')
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: () => import('./views/Favourites.vue')
    }
  ]
})
