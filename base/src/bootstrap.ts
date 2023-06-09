import '../public-path'
import { createApp, version } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/index'
import microApp from '@micro-zoe/micro-app'
import Button from '@/components/Button.vue'
console.log(version, 'version')
microApp.start()

createApp(App).use(router).use(store).component('Button', Button).mount('#app')
