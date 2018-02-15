import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'

import signin from '@/components/signin'
import External from '@/components/External'
import coming from '@/components/coming'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode :'history',
  routes: [
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
      name: 'login',
      component: signin
    },
    ,
    {
      path: '/external/:id',
      name: 'external',
      component: External
    },
    {
      path: '/coming',
      name: 'coming',
      component: coming
    }
  ]
})