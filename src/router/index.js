import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import FundingPage from '@/pages/FundingPage'
import SponsorPage from '@/pages/SponsorPage'
import LoginPage from '@/pages/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/funding',
          name: 'FundingPage',
          component: FundingPage
        },
        {
          path: '/sponsors',
          name: 'SponsorPage',
          component: SponsorPage
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
