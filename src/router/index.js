import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import work_order from '@/components/work_order'
import add_order from '@/components/add_order'
import get_order from '@/components/get_order'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/work_order',
      name: 'work_order',
      component: work_order
    },{
      path: '/add_order',
      name: 'add_order',
      component: add_order
    },{
      path: '/get_order',
      name: 'get_order',
      component: get_order
    },
  ]
})
