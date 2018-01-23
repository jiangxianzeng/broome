import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
      //name: 'HelloWorld',
      //component: HelloWorld
    },
    //首页
    {
      path:'/home',
      component: home
    }
  ]
})
