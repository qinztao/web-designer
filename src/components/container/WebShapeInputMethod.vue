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

        <p>{{currentToolbarStatus}}</p>

</template>

<script>

    import { mapState } from 'vuex'
    export default {

        name: "WebShapeInputMethod",

        data() {
            return {
            }
        },
        computed:mapState({
            currentDevice:'currentShape',
            currentToolbarStatus:'currentToolbarStatus'
        }),
        methods: {

            getShapeDatas(){
                return []
            },

            getSelectedShape(){
                return this.currentDevice
            },

            setActiveDevice(device) {
                this.currentDevice = device
            },
            acceptDataHandle(args){
                console.log(args)
                this.setActiveDevice(args)
            }
        },

        watch:{
            currentToolbarStatus(newValue, oldValue){
                console.log(newValue, oldValue)
            }
        },
        created() {
        }

    }

</script>

<style scoped>

</style>
