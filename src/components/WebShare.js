
function eventDriven() {

    var shape = {

        _acceptMethods: {},
        _methods: {},

        _mouseMethods:{},


        _params:{
            type:[]
        },


        dispatchMouseMove:function(){
            let type = 'mousemove'
            let methods = this._acceptMethods[type]
            if (methods != null) {
                methods.forEach(method => method(arguments))
            }
        },

        mousemove:function(scope, funct){

            let type = 'mousemove'
            let method = function () {
                return funct.apply(scope, arguments);
            }

            var methods = this._mouseMethods[type]
            if (methods == null) {
                methods = new Array()
                this._mouseMethods[type] = methods
            }
            methods.push(method)

            return method
        },



        addParams:function(type, data){
            this._params.type.push(type)
            this._params[type] = data
        },

        acceptData: function (scope, type, funct) {

            if (!type) {
                return
            }

            type = type.toLowerCase()

            let method = function () {
                return funct.apply(scope, arguments);
            }


            var methods = this._acceptMethods[type]
            if (methods == null) {
                methods = new Array()
                this._acceptMethods[type] = methods
            }
            methods.push(method)

            return method
        },

        outData: function (scope, type, funct) {

            if (!type) {
                return
            }
            type = type.toLowerCase()

            let method = function () {
                return funct.apply(scope, arguments);
            }

            this._methods[type] = method

            return method
        },

        pullData:function(type){

            if (!type ) {
                return
            }

            type = type.toLowerCase()
            let method = this._methods[type]
            return method(arguments)
        },

        _dispatch: function (type) {

            if (!type ) {
                return
            }

            type = type.toLowerCase()
            let methods = this._acceptMethods[type]
            if (methods != null) {
                methods.forEach(method => method(arguments))
            }
        },

        dispatch: function (params) {

            if (!params ) {
                return
            }
            // params = this._params
            let types = params.type

            for(let i = 0, len = types.length; i < len; i++){
                let type = types[i]
                let param = params[type]
                type = type.toLowerCase()
                let methods = this._acceptMethods[type]
                if (methods != null) {
                    methods.forEach((method) =>{
                        method(param)
                    })
                }
            }

            this._params = {
                type:[]
            }
        }

    }

    this.dispatch = shape.dispatch.bind(shape)
    this.pullData = shape.pullData.bind(shape)
    this.outData = shape.outData.bind(shape)
    this.acceptData = shape.acceptData.bind(shape)
    this.addParams = shape.addParams.bind(shape)
    this.mousemove = shape.mousemove.bind(shape)

}


export default new eventDriven()
