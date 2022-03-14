
<template>
    <div v-if="currentDevice != null">
        <el-form ref="formRef" size="small">
            <el-form-item label="资源ID">
                <el-input v-model="currentDevice.resourceId" placeholder="Please input" />
            </el-form-item>
            <el-form-item label="设备名称">
                <el-input v-model="currentDevice.shapeData.ZHDBTable" placeholder="Please input" />
            </el-form-item>
            <el-form-item label="设备类型">
                <el-input v-model="currentDevice.shapeData.ENDBTable" placeholder="Please input" />
            </el-form-item>

        </el-form>

    </div>
</template>

<script>

    // import WebModelTable from '../utils/WebModelTable.vue'
    import { mapState } from 'vuex'
    export default {
        name:'WebProperty',
        data(){
            return {}
        },

        computed:mapState({
            currentDevice:'currentShape'
        }),
    };
</script>
<style scoped>
</style>
