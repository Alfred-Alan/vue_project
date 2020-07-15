import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import work_order from '@/components/work_order'

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
    },
  ]
})
