var shape = {

    _acceptMethods: {},

    _methods: {},
    menuHandle: function (item) {
        this.WebContainer.menuHandle(item)
        console.log(this, item)
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

    dispatch: function (type) {

        if (!type ) {
            return
        }

        type = type.toLowerCase()
        let methods = this._acceptMethods[type]
        if (methods != null) {
            methods.forEach(method => method(arguments))
        }
    }

}


export default {
    shape
}
