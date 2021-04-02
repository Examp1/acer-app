import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  // },
  {
    path: '/',
    name: 'days',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect: 'day/1', 
    children: [
      {
        path: 'day/:id',
        name: 'day',
        component: () => import(/* webpackChunkName: "about" */ '../components/Day.vue'),
      }
    ],
  },
  // {
  //   path: '/home/day/:dayNumber',
  //   props: true,
  //   name: 'Day',
  //   children: [
  //     {
  //       // при совпадении пути с шаблоном /user/:id/profile
  //       // в <router-view> компонента User будет показан UserProfile
  //       path: 'day',
  //       component: () => import(/* webpackChunkName: "day" */ '../components/Day.vue')
  //     },
  //   ]
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
