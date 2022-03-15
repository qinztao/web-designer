<template>
    <el-collapse accordion ref="collapse">

        <el-collapse-item name="1">
            <template #title>
                <div class="collapseTitle" @click="_collapseItemchange" name="1">工作项目</div>
            </template>
            <div class="itemConstainer">
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
            </div>
        </el-collapse-item>
        <el-collapse-item name="2">
            <template #title>
                <div class="collapseTitle" @click="_collapseItemchange" name="2">遥信/遥测</div>
            </template>
            <div class="itemConstainer" >
                <web-graphic-shape-item :shapeItems="shapeItems" @cilckItem="_cilckItem" @dragItem="dragItem"
                                        :callback="_callBackTelemetryCallbackHandle">
                    <template #="{ content }">
                        {{content.name}}
                    </template>
                </web-graphic-shape-item>
            </div>
        </el-collapse-item>
        <el-collapse-item name="3">
            <template #title>
                <div class="collapseTitle" @click="_collapseItemchange" name="3">电网模型</div>
            </template>
            <div class="itemConstainer">
                <web-graphic-shape-item :shapeItems="shapeItems" @cilckItem="_cilckItem" @dragItem="dragItem"
                                        :callback="_callBackPowerCallbackHandle">
                    <template #="{ content }">
                        {{content.name}}
                    </template>
                </web-graphic-shape-item>
            </div>
        </el-collapse-item>
        <el-collapse-item name="4">
            <template #title>
                <div class="collapseTitle" @click="_collapseItemchange" name="4">图标库(辅助绘图)</div>
            </template>
            <div class="itemConstainer">
                <web-graphic-shape-item :shapeItems="shapeItems" @cilckItem="_cilckItem" @dragItem="dragItem" :callback="_callBackIconCallbackHandle"
                                        >
                    <template #="{ content }">
                        {{content.name}}
                    </template>
                </web-graphic-shape-item>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>

    // import WebFontFamily from '@/components/container/toolbar/WebFontFamily.vue'
    // import WebFontSize from '@/components/container/toolbar/WebFontSize.vue'

    import WebGraphicShapeItem from './WebGraphicShapeItem.vue'

    export default {
        name: "WebManagement",
        components: {
            // WebFontFamily,
            // WebFontSize,
            WebGraphicShapeItem
        },
        data() {
            return {
                currentName: '',
                shapeItems:
                    [
                        {name: '母线', title: '母线', image: '', type: 101},
                        {name: '发电机', title: '发电机', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '发电机', title: '发电机', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '发电机', title: '发电机', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '发电机', title: '发电机', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                        {name: '断路器', title: '断路器', image: '', type: 102},
                    ]
            }
        },

        props: {
            //
            // collapseItems: {
            //     type: Array,
            //     required: false,
            //     default() {
            //         return [
            //             {title: '工作项目', key: '1', cName: 'WebFontFamily'},
            //             {title: '遥信/遥测', key: '2', cName: 'WebFontSize'},
            //             {title: '电网模型', key: '3', cName: 'WebFontFamily'},
            //             {title: '图标库(辅助绘图)', key: '4', cName: 'WebFontSize'},
            //         ]
            //     }
            // }

        },


        methods: {
            _collapseItemchange() {
                // console.log(event)
                // let name = event.target.getAttribute('name');
                // if (name === this.currentName) {
                //     event.stopPropagation()
                // } else {
                //     this.currentName = name
                // }
            },

            _callBackPowerCallbackHandle(item) {
                console.log(item)
                if (item.type == 101) {
                    return -1
                }else if(item.type == 102){
                    return 1
                }
                return 0

            },
            _callBackTelemetryCallbackHandle(item) {
                console.log(item)

                if (item.type == 101) {
                    return -1
                }else if(item.type == 102){
                    return 1
                }
                return 0

            },
            _callBackIconCallbackHandle(item) {

                console.log(item)
                if (item.type == 101) {
                    return -1
                }else if(item.type == 102){
                    return 1
                }
                return 0

            },
            _cilckItem(item) {
                console.log(item)
                if (item.type == 101) {
                    return true
                }
                return false
            },
            dragItem(item) {
                console.log(item)
            }
        },
        mounted(){
            let collapseEl = this.$refs.collapse.$el
            let box = collapseEl.getBoundingClientRect()

            let children = collapseEl.children
            let countHeight = 0

            for(let ch of children){
                countHeight += ch.getBoundingClientRect().height
            }
            let height = box.height - countHeight - 50
            //
            try {
                for(let ch of children){
                    let itemConstainer = ch.querySelector('.itemConstainer')
                    if(itemConstainer){
                        itemConstainer.style.height = height + 'px'
                    }

                }
            }catch (e) {
                console.error(e)
            }


        },
    }
</script>

<style scoped>

    .el-collapse {
        height: calc(100% - 2px);
    }

    .el-card {
        width: 50px;
        height: 50px;
        display: inline-block;
    }

    .el-card .el-card__body {
        padding: 0;
    }

    .collapseTitle {
        width: 100%;
        text-align: center;
    }

    .itemConstainer{
        overflow: auto;
    }
</style>
