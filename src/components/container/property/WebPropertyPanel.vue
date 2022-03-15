<template>
    <el-container style="position: relative">
        <el-main ref="propertyMain" :style="{bottom: footer + header + 6 +'px'}">
            <web-property></web-property>
        </el-main>
        <DragDivider v-model:height="header" :style="{bottom: footer + 3 + header +'px', position:'absolute'}"></DragDivider>
        <el-header :height="header + 'px'" :style="{bottom: footer + 3 +'px'}">
        </el-header>
        <DragDivider v-model:height="footer" :min="1" :style="{bottom:footer + 'px',   position: 'absolute'}"></DragDivider>
        <el-footer :height="footer +'px'" :fixed="true" style="">
            <web-bird-see-view></web-bird-see-view>
        </el-footer>
    </el-container>

</template>

<script>
    import WebBirdSeeView from './WebBirdSeeView.vue'
    import WebProperty from './WebProperty.vue'
    import DragDivider from '@/components/container/utils/DragDivider.vue'

    export default {
        name: "WebPropertyPanel",
        components: {
            WebBirdSeeView,
            WebProperty,
            DragDivider
        },
        data() {
            return {
                footer: 150,
                header: 30,
                mainHeight:100,
                minHeaderHeight:70,
            }
        },
        created(){

        }
    }
</script>

<style scoped>

    .el-main{
        position: absolute;
        width: var(--el-aside-width);
        padding: 0px;
        top: 0px;
    }

    .el-header{
        border: 1px solid;
        position: absolute;
        width: var(--el-aside-width);
        padding: 0px;
    }
    .el-footer{
        position: absolute;
        bottom: 0px;
        width: var(--el-aside-width);
        padding: 0;
    }

</style>
