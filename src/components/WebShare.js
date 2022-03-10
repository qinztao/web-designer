var shape = {

    _methods:{},

    menuHandle:function(item){
        this.WebContainer.menuHandle(item)
        console.log(this, item)
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

    dispatch:function(type){
       let methods =  this._methods[type]
        methods.forEach(method=>method())
    }

}


export default {
    shape
}
