<template>
    <el-divider :direction="direction" :class="direction == 'horizontal' ? 'dropHorizontalDivider' : 'dropVerticalDivider'" @mousedown="mousedown"></el-divider>
</template>

<script>

    export default {
        name: "DragDivider",
        props: {
            direction: {
                type: String,
                default: 'horizontal'
            },
            position:{
                type:String,
                default:'left'
            },
            min: {
                type: Number,
                required: false,
                default:0
            },
            max: {
                type: Number,
                required: false,
                default:0
            },
            fixed: {
                type: Boolean,
                required: false,
                default: false
            },
            height:{
                type:Number,
            },
            width: {
                type:Number,
            }
        },
        emits:['update:height', 'update:width'],
        data(){
            return {
                cWidth:this.width,
                cHeight:this.height,
                originalHeight:this.height,
                originalWidth:this.width,
                prefixX:'pageX',
                prefixY:'pageY',
                drag:{
                    isdrag:false,
                    startX:0,
                    isClick:false,
                    startY:0,
                    startValue:0
                }
            }
        },

        methods:{
            mousedown(event){

                window.addEventListener('mousemove', this.mousemove)
                window.addEventListener('mouseup', this.mouseup)

                this.drag.isClick = true

                if(this.direction === 'horizontal'){

                    this.drag.startValue = ''

                    this.drag.startY = this.cHeight + event[this.prefixY]
                }else{
                    this.drag.startX = event[this.prefixX]
                }

            },
            mousemove(event){

                if(this.drag.isClick){
                    if( this.drag.isdrag == false){
                        if(this.direction === 'horizontal'){
                            let y = event[this.prefixY]
                            if(Math.abs(this.drag.startY - y) > 2){
                                this.drag.isdrag = true
                                document.body.style.cursor = 'n-resize'
                            }

                        }else{
                            let x = event[this.prefixX]
                            if(Math.abs(this.drag.startX - x) > 2){
                                this.drag.isdrag = true
                                document.body.style.cursor = 'e-resize'
                            }
                        }
                    }
                    if(this.drag.isdrag){

                        if(this.direction === 'horizontal'){
                            let count = (this.drag.startY - event[this.prefixY])
                            console.log(count)
                            if(!this.min){
                                if(this.originalHeight >= count){
                                    this.cHeight = this.originalHeight
                                    return
                                }
                                this.cHeight = count
                            }else{
                                if(count <= this.min){
                                    this.cHeight = this.min
                                    return
                                }
                                this.cHeight = count
                            }

                            this.$emit('update:height', this.cHeight)

                        }else{

                            if(this.position == 'left'){
                                let count = event[this.prefixX]
                                if(!this.min){
                                    this.cWidth = count
                                }else{
                                    if(count <= this.min){
                                        this.cWidth = this.min
                                        return
                                    }
                                    this.cWidth = count
                                }
                            }else if(this.position == 'right'){

                                let count = this.originalWidth + (this.drag.startX - event[this.prefixX])
                                if(!this.min){
                                    this.cWidth = count
                                }else{
                                    if(count <= this.min){
                                        this.cWidth = this.min
                                        return
                                    }
                                    this.cWidth = count
                                }
                            }


                            this.$emit('update:width', this.cWidth)
                        }
                    }
                }
            },
            mouseup(){
                this.drag.isClick = false
                this.drag.isdrag = false
                this.drag.startX = 0
                this.drag.startY = 0
                window.removeEventListener('mousemove', this.mousemove)
                window.removeEventListener('mouseup', this.mouseup)
                document.body.style.cursor = 'default'
            },
        }
    }
</script>

<style scoped>
    .dropHorizontalDivider{
        cursor:n-resize;
        margin:1px 0px;
        height: 2px;
    }
    .dropVerticalDivider{
        height: auto;
        cursor:e-resize;
        width: 2px;
        margin:0px 2px;
    }
</style>
