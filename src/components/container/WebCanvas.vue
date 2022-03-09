<template>
    <div class="canvasConstainer">
        <el-tabs
                v-model="editableTabsValue"
                type="card"
                closable
                @tab-remove="removeTab"
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
                {{ item.content }}
            </el-tab-pane>
        </el-tabs>

        <p>{{executeOperate}}</p>
    </div>

</template>

<script>
    export default {
        name: "WebCanvas",
        data() {
            return {
                executeOperate:'',
                state: 0,
                cursor: '',
                editableTabsValue: 'B',
                editableTabs: [
                    {
                        title: 'Tab 1',
                        name: 'A',
                        content: 'Tab 1 content',
                    },
                    {
                        title: 'Tab 2',
                        name: 'B',
                        content: 'Tab 2 content',
                    },
                ]
            }
        },
        methods: {

            removeTab() {

            }
        },

        created(){
            this.$shape.shape
        }


    }
</script>

<style>
    .canvasConstainer {
        border: 1px solid;
        height: calc(100% - 2px);
    }

    .el-tabs {
        height: 100%;
    }

    .title{
        display: inline-block;
        height: 30px !important;
        line-height: 30px;
    }

    .el-tabs__item{
        height: 30px !important;
        line-height: 30px !important;
    }
</style>
