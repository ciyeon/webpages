import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/LoginView.vue')
  },
  {
    path:'/operate',
    name:'operate',
    component:()=>import('../views/OperateView.vue'),
    children:[
      {
        path: '/operate/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/operate/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },{
        path:'/operate/test',
        name:'test',
        component:()=> import('../views/TestView.vue')
      }
    ]
  },
  {
    path:'*',
    redirect:'/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
