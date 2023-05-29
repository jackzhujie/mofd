import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/index.ts'

import microApp from '@micro-zoe/micro-app'

microApp.start()

createApp(App).use(router).use(store).mount('#app')
