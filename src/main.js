import {createApp} from 'vue'
import App from './App.vue'

import {createStore} from 'vuex'


import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './assets/css/bootstrap.css'

import WebDhape from './components/WebShare'


const store = createStore({
    state() {

        return {
            todos: [
                {id: 1, text: '...', done: true},
                {id: 2, text: '...', done: false}
            ],
            count:0
        }
    },
    mutations: {
        increment(state, ccc ) {
            state.count++
            console.log(ccc)
        }
    },

    actions:{
        increment (context, ccc){
            console.log(ccc)
            context.commit('increment')
        }
    },
    getters:{
        doneTodos(state){
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }
})

const app = createApp(App)
app.use(ElementPlus)
app.use(store)

app.config.globalProperties.$shape = WebDhape

app.mount('#app')
