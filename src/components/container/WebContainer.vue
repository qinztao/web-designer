<template>
    <el-container>
        <el-header>
            <web-menu ref="menu"></web-menu>
            <web-toolbar ref="toolbar"></web-toolbar>
        </el-header>
        <el-container>
            <el-aside :width="managementWidth+ 'px'">
                <web-management ref="management"></web-management>
            </el-aside>
            <drag-divider direction="vertical" v-model:width="managementWidth" :min="managementMinWidth"></drag-divider>
            <el-container>
                <el-container>
                    <el-main>
                        <web-canvas ref="canvas"></web-canvas>
                    </el-main>
                    <drag-divider direction="vertical" v-model:width="propertyWidth" :min="propertyMinWidth" position="right"></drag-divider>
                    <el-aside :width="propertyWidth + 'px'">
                        <web-property-panel ref="propertyPanel"></web-property-panel>
                    </el-aside>
                </el-container>
                <drag-divider  v-model:height="infoModelHeight" :min="infoModelMinHeight"></drag-divider>
                <el-footer class="infoFooter" :height="infoModelHeight + 'px'">
                    <web-info-model ref="infoModel"></web-info-model>
                </el-footer>
            </el-container>

        </el-container>
        <el-footer class="statusFooter">
            <web-status-bar></web-status-bar>
        </el-footer>
    </el-container>
</template>
<script>
    import WebCanvas from './WebCanvas.vue'
    import WebPropertyPanel from './property/WebPropertyPanel.vue'

    import WebMenu from './menu/WebMenu.vue'
    import WebManagement from './management/WebManagement.vue'
    import WebToolbar from './toolbar/WebToolbar.vue'
    import WebInfoModel from './infoModel/WebInfoModel.vue'
    import WebStatusBar from './statusbar/WebStatusBar.vue'

    import DragDivider from '@/components/container/utils/DragDivider.vue'

    export default {
        name: "WebContainer",
        components: {
            WebCanvas,
            WebMenu,
            WebManagement,
            WebPropertyPanel,
            WebInfoModel,
            WebToolbar,
            WebStatusBar,
            DragDivider
        }, data(){
            return {
                managementWidth:300,
                managementMinWidth:120,
                infoModelHeight:140,
                infoModelMinHeight:40,
                propertyWidth:300,
                propertyMinWidth:10,
            }
        },
        methods:{
            menuHandle:function(item){
                console.log('WebContainer', item)
            }
        },

        created(){
            this.$shape.shape.WebContainer = this.$.type.methods
        }
    }
</script>


<style scoped>

    .dropVerticalDivider{
        height: auto;
        cursor:e-resize;
    }
    .dropHorizontalDivider{
        cursor:n-resize;
        margin:1px 0px;
    }
    .el-container {
        height: 100%;
    }

    .el-main {
        padding: 0;
    }

    .infoFooter {
        border: 1px solid;
    }

    .statusFooter {
        height: 32px;
        border: 1px solid;
    }

    .el-footer {
        padding: 0;
    }

</style>
