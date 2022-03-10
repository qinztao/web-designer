import {createApp} from 'vue'
import App from './App.vue'

import {createStore} from 'vuex'


import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './assets/css/bootstrap.css'

import WebDhape from './components/WebShare'

const temporaryData = require('./assets/temporaryData/6kV氮氧变电所')


const store = createStore({

    state() {

        return {
            todos: [
                {id: 1, text: '...', done: true},
                {id: 2, text: '...', done: false}
            ],
            count:0,
            _methods:{}
        }
    },
    mutations: {

        dispatch:function(type){
            let methods =  this._methods[type]
            methods.forEach(method=>method(arguments))
        }

    },

    actions:{

        increment (context){
            context.commit('dispatch')
        }
    },
    getters:{
        doneTodos(state){
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },

    inputMethod: function(scope, type, funct)
    {
        return function()
        {
            return funct.apply(scope, arguments);
        };
    },
    outputMethod: function(scope, type, funct){

        let method = function()
        {
            return funct.apply(scope, arguments);
        }

        var methods = this._methods[type]
        if(methods == null){
            methods = new Array()
            this._methods[type] = methods
        }
        methods.push(method)

        return method
    },



})

const app = createApp(App)
app.use(ElementPlus)
app.use(store)

app.config.globalProperties.$shape = WebDhape
app.config.globalProperties.$tempData = temporaryData

app.mount('#app')
