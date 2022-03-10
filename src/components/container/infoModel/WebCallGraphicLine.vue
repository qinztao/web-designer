<template>
    <div class="model-property">
        <div class="model-main">
            <web-model-table></web-model-table>
        </div>
        <div class="model-footer">
            <el-form ref="formRef" :inline="true" size="small">
                <el-form-item>
                    <el-button @click="refresh">刷新</el-button>
                </el-form-item>
                <el-form-item>
                    <div>行:{{rows}}</div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import WebModelTable from './WebModelTable.vue'
    export default {
        name: "WebCallGraphicLine",
        components:{
            WebModelTable
        },
        data(){
            return {
                rows:1
            }
        },
        methods:{
            refresh(){
                console.log('刷新')
            },
        }
    }
</script>

<style scoped>

</style>
