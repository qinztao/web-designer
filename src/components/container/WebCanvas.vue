<template>
    <div class="canvasConstainer">
        <el-tabs
                v-model="currentGraphic"
                type="card"
                closable
                @tab-remove="removeTab"
                @tab-click="tabClick"
        >
            <el-tab-pane
                    v-for="item in editableTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
            >
                <component :is="item.content" :ref="item.name"></component>
            </el-tab-pane>
        </el-tabs>
    </div>

</template>

<script>

    import WebInput from '@/components/container/WebShapeInputMethod.vue'
    import WebOutput from '@/components/container/WebShapeOutputMethod.vue'

    export default {
        name: "WebCanvas",
        components: {
            WebInput,
            WebOutput
        },
        data() {
            return {
                executeOperate: '',
                state: 0,
                cursor: '',
                currentGraphic: '',
                tabIndex: 1,
                editableTabs: [
                    {
                        title: 'Tab 1',
                        name: 'A',
                        content: 'WebInput',
                    },
                    {
                        title: 'Tab 2',
                        name: 'B',
                        content: 'WebOutput',
                    },
                ]

            }
        },
        methods: {
            addGraphic() {
                this.editableTabs.push({
                    title: '新建图纸' + this.tabIndex,
                    name: '新建图纸' + this.tabIndex,
                    content: 'WebInput',
                })
                this.tabIndex++
            },

            openGraphic(graphicInfo) {
                this.editableTabs.push({
                    title: graphicInfo.title,
                    name: graphicInfo.name,
                    content: 'WebInput',
                })
            },

            tabClick(label) {
                console.log(label.props.name)
                this.$emit('selectedGraphic', this.currentGraphic)
            },

            removeTab(targetName) {

                const tabs = this.editableTabs
                let activeName = this.currentGraphic
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            const nextTab = tabs[index + 1] || tabs[index - 1]
                            if (nextTab) {
                                activeName = nextTab.name
                            }
                        }
                    })
                }

                this.currentGraphic = activeName
                this.editableTabs = tabs.filter((tab) => tab.name !== targetName)

            },

            getAllShapes(graphicName) {

                if (this.$refs[graphicName] != null) {
                   return this.$refs[graphicName][0].getAllShapeDatas()
                }
            }

            // saveGraphic(args){
            //     console.log(args)
            // },
            //
            // getShapeDatas(args){
            //     console.log(args)
            // }
        },

        created() {
            //     this.$store.dispatch('register', {
            //         el:this,type: 'saveGraphic', method:this.saveGraphic
            //     })
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

    .title {
        display: inline-block;
        height: 30px !important;
        line-height: 30px;
    }

    .el-tabs__item {
        height: 30px !important;
        line-height: 30px !important;
    }

    .canvasConstainer .el-tabs__content {
        height: calc(100% - 46px);
    }

</style>
