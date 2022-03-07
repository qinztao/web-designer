<template>
    <el-tabs
            v-model="editableTabsValue"
            type="card"
            tabPosition="bottom"
            tab-click="tabAction"
    >
        <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
        >
            <!--<template #label>-->
            <!--<span class="tabTitle">{{item.title}}</span>-->
            <!--</template>-->
            <template #> <div>
                <component :is="item.key"></component>
            </div></template>
        </el-tab-pane>
    </el-tabs>
</template>

<script>

    import WebInfoWindow from './WebInfoWindow.vue'
    import WebGraphicInfo from './WebGraphicInfo.vue'
    import WebGraphicLine from './WebGraphicLine.vue'
    import WebModelProperty from './WebModelProperty.vue'

    export default {
        name: "WebInfoModel",
        components:{
            WebInfoWindow,
            WebGraphicInfo,
            WebGraphicLine,
            WebModelProperty
        },
        data() {
            return {

                editableTabsValue: '信息窗口',
                editableTabs: [
                    {
                        title: '信息窗口',
                        name: '信息窗口',
                        key:'WebInfoWindow',
                        content: '信息窗口',
                    },
                    {
                        title: '模型属性',
                        name: '模型属性',
                        key:'WebModelProperty',
                        content: '模型属性',
                    },
                    {
                        title: '遥测/遥信图形信息',
                        name: '遥测/遥信图形信息',
                        key:'WebGraphicInfo',
                        content: '遥测/遥信图形信息',
                    },
                    {
                        title: '调图连接',
                        name: '调图连接',
                        key:'WebGraphicLine',
                        content: '调图连接',
                    },
                ]
            }
        },
        methods:{

            tabAction(){

            }
        }
    }
</script>

<style scoped>


</style>
