var shape = {

    menu:{

        proxyMenu:{
            targetHandle:function(menu){
                console.log('targetHandle', menu)
            }
        },

        handle:function(menu){

            this.proxyMenu.targetHandle(menu)
        },

    },

}


export default {
    shape
}
