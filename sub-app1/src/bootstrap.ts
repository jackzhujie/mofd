import '../public-path'
import { createApp, defineAsyncComponent, version } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/index'
import { Button } from '@/remoteConfig/remoteRef'
console.log(Button, 'version')
// 全局注册一个来自其他应用的组件
const app = createApp(App)
// app.unmount()
app.component('Button', Button)
app.use(router).use(store).mount('#app1')
