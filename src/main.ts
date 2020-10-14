import { createApp } from 'vue'
import App from './App'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style/index.styl'

import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(Antd).mount('#app')
