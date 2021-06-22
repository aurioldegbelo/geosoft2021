import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home' // import a component
import Faq from '@/components/Faq' // import a component
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  // define routes and the components associated with these routes
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
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
  ]
})
