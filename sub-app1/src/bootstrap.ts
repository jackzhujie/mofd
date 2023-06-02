import '../public-path'
import { Button } from '@/remoteConfig/remoteRef'
import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/index'
// 全局注册一个来自其他应用的组件
const app = createApp(App)
app.component('Button', Button)
app.use(router).use(store).mount('#app')
