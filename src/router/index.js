import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import FundingPage from '@/pages/FundingPage'
import FundingDetailPage from '@/pages/FundingDetailPage'
import SponsorPage from '@/pages/SponsorPage'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/funding/:id',
      name: 'FundingDetailPage',
      component: FundingDetailPage
    }
  ]
})
