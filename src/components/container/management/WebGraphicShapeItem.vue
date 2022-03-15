<template>
    <div class="shapeItem"  @mousedown="mousedown(index)" @mouseup="mouseup" v-for="(shape, index) in shapeItems"   :class="activeIndex == index ?'active': ''" :key="index">
        <slot v-bind:content="shape">
            {{shape.name}}
        </slot>
    </div>
</template>

<script>
    export default {
        name: "WebGraphicShapeItem",
        emits:['cilckItem','dragItem'],

        props:{
            shapeItems:{
                type:Array,
                default(){
                    return[
                        {name:'母线', title:'母线',image:'', type:101},
                        {name:'发电机', title:'发电机',image:'', type:102},
                    ]
                }
            },
            callback:{
                type:Function,
                required:true,
            }
        },
        data(){
            return {
                activeIndex:-1,
            }
        },

        methods:{
            mousedown(index){
                console.log(index)

               let item = this.shapeItems[index]

                this.activeIndex = index
                let result = this.callback(item)

                // let callbackValue = this.$emit('cilckItem', item)
                console.log('result',result)
                this.activeName  = item.name

            },

            mouseup(event){
                console.log('mouseup', event)
            },

            click(){

            },
            dragItem(){

            }
        }

    }
</script>

<style scoped>

    .shapeItem{
        width: 50px;
        height: 50px;
        display: inline-block;
        line-height: 50px;
        text-align:center;
        cursor: pointer;
        border: 1px transparent solid;
    }

    .active{

        border: 1px #5a6268 dashed;
    }

</style>
