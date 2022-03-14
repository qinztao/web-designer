import {createApp} from 'vue'
import App from './App.vue'

import {createStore} from 'vuex'


import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import WebDhape from './components/WebShare'

const temporaryData = require('./assets/temporaryData/6kV氮氧变电所')

import storeOptions from './store/store'

const store = createStore(storeOptions)

const app = createApp(App)
app.use(ElementPlus)
app.use(store)

app.config.globalProperties.$shape = WebDhape
app.config.globalProperties.$tempData = temporaryData

app.mount('#app')
