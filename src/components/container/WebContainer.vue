<template>
    <el-container>
        <el-header>
            <web-menu></web-menu>
            <web-toolbar></web-toolbar>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <web-management></web-management>

            </el-aside>
            <el-container>
                <el-container>
                    <el-main>
                        <web-canvas ref="canvas"></web-canvas>
                    </el-main>
                    <el-aside width="300px" style="position: relative">
                        <web-property-panel></web-property-panel>
                    </el-aside>
                </el-container>
                <el-footer class="infoFooter">
                    <web-info-model></web-info-model>
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

    export default {
        name: "WebContainer",
        components: {
            WebCanvas,
            WebMenu,
            WebManagement,
            WebPropertyPanel,
            WebInfoModel,
            WebToolbar,
            WebStatusBar
        }
    }
</script>


<style scoped>
    .el-container {
        height: 100%;
    }

    .el-main {
        padding: 0;
    }

    .infoFooter {
        height: 140px !important;
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
