import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 在这里定义你的路由
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/app1/:page*', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'app1',
    component: () => import('../views/App1.vue')
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/app2/:page*', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'app2',
    component: () => import('../views/App2.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  strict: false
})
