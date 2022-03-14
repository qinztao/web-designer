<template>
    <div class="model-property">
        <div class="model-main">
            <web-model-table :columns="columns" :dataTable="tableData"></web-model-table>
        </div>
        <div class="model-footer">
            <el-form ref="formRef" :inline="true" size="small">
                <el-form-item>
                    <el-checkbox label="选中模式" :checked="selectedMode" v-model="selectedMode"
                                 @change="selectedModeHandle"></el-checkbox>
                </el-form-item>
                <el-form-item label="模型库">
                    <el-select model-value="PG">
                        <el-option label="电网数据库" value="PG"></el-option>

                    </el-select>
                </el-form-item>
                <el-form-item label="设备类型">
                    <el-select :model-value="currentDevice" @change="selectedDevice">
                        <el-option v-for="device in deviceTypes" :label="device.name" :value="device.type"
                                   :key="device.type"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电压等级">
                    <el-select :model-value="currentVoltageLevel" @change="selectedVoltage" :disabled="isClean">
                        <el-option v-for="voltage in voltageLevels" :label="voltage.name" :value="voltage.value"
                                   :key="voltage.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="厂站">
                    <el-select :model-value="currentSubstation" @change="selectedSubstation" :disabled="isClean">
                        <el-option v-for="subs in substations" :label="subs.name" :value="subs.value"
                                   :key="subs.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="内容过滤">
                    <el-select :model-value="currentFilterValue" @change="filterHandle" :disabled="isClean">
                        <el-option v-for="filter in filters" :label="filter.name" :value="filter.value"
                                   :key="filter.value"></el-option>
                    </el-select>
                </el-form-item>
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
    import WebModelTable from '../utils/WebModelTable.vue'

    export default {
        name: "WebTelemetryGraphicProperty",
        components: {
            WebModelTable
        },

        data() {
            return {

                columns: [

                ],

                tableData: [],

                rows: 1,
                isClean:false,
                selectedMode: false,
                currentFilterValue: '',
                filters: [{
                    name: '',
                    value: ''
                },
                    {
                        name: '遥测',
                        value: 'telemetry'
                    },
                    {
                        name: '遥信',
                        value: 'signaling'
                    }],
                currentDevice: '',
                deviceTypes: [
                    {name: "", type: ""},
                    {name: "母线", type: "busbarSection"},
                    {name: "并联补偿", type: "shuntCompensator"},
                    {name: "断路器", type: "breaker"},
                    {name: "隔离开关", type: "disconnector"},
                    {name: "变压器绕组", type: "transformerWinding"},
                    {name: "交流线路段", type: "aclineSegment"},
                    {name: "发电机", type: "synchronousMachine"},
                    {name: "负荷", type: "energyConsument"},
                ],
                currentVoltageLevel: '',
                voltageLevels: [
                    {name: '', value: ''},
                    {name: '220KV', value: '220'}
                ],
                currentSubstation: '',
                substations: [
                    {name: '', value: ''},
                    {name: '220kV琴湖变', value: '220kV琴湖变'}
                ]
            }
        },
        methods: {
            filterHandle(value) {
                this.currentFilterValue = value
            },

            selectedModeHandle(value) {
                console.log(value)
            },

            selectedDevice(value) {
                this.cleanSelectValue()
                this.currentDevice = value
            },

            selectedVoltage(value) {
                this.currentVoltageLevel = value
            },
            selectedSubstation(value) {
                this.currentSubstation = value
            },

            refresh() {
                console.log('刷新')
            },

            cleanSelectValue() {
                this.currentSubstation = ''
                this.currentVoltageLevel = ''
            }
        }
    }
</script>

<style scoped>

</style>
