export default {

    state: {
        currentShape:null,
        allShapes:[],
        currentToolbarStatus:null,
        drawStatus:false,
        currentMenu:null,
        currentGraphValue:'',

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
        },
        setCurrentGraphValue(state, payload){
            state.currentGraphValue = payload.graphValue
        },
        setAllShapes(state, payload){
            state.allShapes = payload.allShapes
        }


    },

    actions: {

        register(state, scope){
            let method = function () {
                return scope.method.apply(scope.el, arguments)
            }

            state.getters[scope.type] = method
        },

        setAllShapes(state, payload){
            state.commit('setAllShapes', payload)
        }

    },

    getters: {

        getAllShapes: (state)=> {
            return state.allShapes
        }

    }
}
