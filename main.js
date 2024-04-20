import { createApp } from 'vue'
import IndexPage from './pages/index.vue'
import './index.css'
import router from './router'

createApp(IndexPage).use(router).use(router).mount('#index')
