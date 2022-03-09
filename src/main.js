import {createApp} from 'vue'
import App from './App.vue'

import {createStore} from 'vuex'


import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './assets/css/bootstrap.css'

import WebDhape from './components/WebShare'


const store1 = createStore({
    state() {
        return {count: 0}
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})

const app = createApp(App)
app.use(ElementPlus)
app.use(store1)

app.config.globalProperties.$shape = WebDhape

app.mount('#app')
