<template>
    <el-container>
        <el-main>
            <web-property></web-property>
        </el-main>
        <DragDivider v-model:height="header"></DragDivider>
        <el-header :height="header + 'px'">
        </el-header>
        <DragDivider v-model:height="footer" :min="1"></DragDivider>
        <el-footer :height="footer +'px'" :fixed="true">
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
            }
        }
    }
</script>

<style scoped>

</style>
