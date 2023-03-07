import { createApp } from 'vue'
import { createPinia } from 'pinia'
import forEach from 'lodash-es/forEach'

import listModule from '@/modules'

import App from './App.vue'
import router from './router'

import './assets/style/main.css'

import 'virtual:svg-icons-register'

const app = createApp(App)

forEach(listModule, module => {
  forEach(module.router, value => {
    router.addRoute(value)
  })
})

app.use(createPinia())
app.use(router)

app.mount('#app')
