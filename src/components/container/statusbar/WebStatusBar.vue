<template>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8" style="text-align: left">
                <web-status-button></web-status-button>
        </el-col>
        <el-col :span="8">
            <web-zoom></web-zoom>
        </el-col>
    </el-row>
</template>

<script>

    import WebZoom from './WebZoom.vue'
    import WebStatusButton from './WebStatusButton.vue'

    export default {
        name: "WebStatusBar",
        components:{
            WebZoom,
            WebStatusButton
        }
    }
</script>

<style scoped>

</style>
