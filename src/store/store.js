export default {

    state: {
        currentShape:null,
        allShapes:[],
        currentToolbarStatus:null,
        drawStatus:false,
        currentMenu:null

    },
    mutations: {

        setCurrentShape(state, payload){
            state.currentShape = payload.currentShape
        },
        setCurrentToolbarStatus(state, payload){
            state.currentToolbarStatus = payload.toolbarStatus
        },

        setDrawStatus(state, payload){
            state.drawStatus = payload.drawStatus
            console.log(state)
        }

    },

    actions: {

        register(state, scope){


            let method = function () {
                return scope.method.apply(scope.el, arguments)
            }

            state.getters[scope.type] = method

        }


        // increment(context) {
        //     context.commit('dispatch')
        // }
    },
    getters: {

        getAllShapes: (state)=> {



            return state.allShapes
        }
        // getTodoById: (state) => (id) => {
        //     return state.todos.find(todo => todo.id === id)
        // }

    }
}
