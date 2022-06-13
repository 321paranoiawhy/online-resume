import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入公共样式
import common
createApp(App).use(store).use(router).mount('#app')
