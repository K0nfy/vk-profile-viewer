import Vue from 'vue'
import Router from 'vue-router'
import AboutUser from './views/AboutUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      props: (route) => ({ routeId: route.query.id, routeName: route.query.name }),
      component: () => import('./views/Search.vue')
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: () => import('./views/Favourites.vue')
    }
  ]
})
