<template>

    <el-tabs class="infoModel"
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
                style="height: 100%"
        >
            <template #>
                <component :is="item.key"></component>
            </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script>

    import WebInfoWindow from './WebInfoWindow.vue'
    import WebTelemetryGraphicProperty from './WebTelemetryGraphicProperty.vue'
    import WebGraphicLine from './WebCallGraphicLine.vue'
    import WebModelProperty from './WebModelProperty.vue'

    export default {
        name: "WebInfoModel",
        components: {
            WebInfoWindow,
            WebTelemetryGraphicProperty,
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
                        key: 'WebInfoWindow',
                        content: '信息窗口',
                    },
                    {
                        title: '模型属性',
                        name: '模型属性',
                        key: 'WebModelProperty',
                        content: '模型属性',
                    },
                    {
                        title: '遥测/遥信图形属性',
                        name: '遥测/遥信图形属性',
                        key: 'WebTelemetryGraphicProperty',
                        content: '遥测/遥信图形属性',
                    },
                    {
                        title: '调图连接',
                        name: '调图连接',
                        key: 'WebGraphicLine',
                        content: '调图连接',
                    },
                ]
            }
        },
        methods: {

            tabAction() {

            }
        }
    }
</script>

<style>
    .infoModel > .el-tabs__content {
        height: calc(100% - 32px);
    }

    .infoModel .el-tabs__item {
        font-size: 12px;
    }

    .infoModel .el-tabs__header {
        margin-top: 2px !important;
    }

</style>
