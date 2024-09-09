import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 在这里定义你的路由
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log(window.__MICRO_APP_BASE_ROUTE__, '1111')
export default createRouter({
  // 👇 设置基础路由，子应用可以通过window.__MICRO_APP_BASE_ROUTE__获取基座下发的baseroute，如果没有设置baseroute属性，则此值默认为空字符串
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes
})
