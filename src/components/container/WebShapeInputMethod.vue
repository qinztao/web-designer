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
    export default {

        name: "WebShapeInputMethod",

        data() {
            return {
                currentDevice: null
            }
        },
        methods: {

            getShapeDatas(){
                return []
            },
            setActiveDevice(device) {
                this.currentDevice = device
            },
            acceptDataHandle(args){
                console.log(args)
                this.setActiveDevice(args[1])
            }
        },
        created() {
            this.$shape.shape.acceptData(this, 'setSelectedShape', this.acceptDataHandle)
        }

    }

</script>

<style scoped>

</style>
