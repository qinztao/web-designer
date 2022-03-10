<template>
    <div class="model-property">
        <div class="model-main">
            <web-model-table :columns="columns" :dataTable="tableData"></web-model-table>
        </div>
        <div class="model-footer">
            <el-form ref="formRef" :inline="true" size="small">
                <el-form-item>
                    <el-checkbox label="显示连接线" :checked="showLine" v-model="showLine"></el-checkbox>
                </el-form-item>
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
                <el-form-item>
                    <el-button @click="settings">设置</el-button>
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

    import WebModelTable from './WebModelTable.vue'

    export default {
        name: "WebModelProperty",
        components: {
            WebModelTable
        },
        data() {
            return {
                columns: [
                    {field: 'resourceId', label: '资源ID'},
                    {field: 'shapeData.ENDBTable', label: '设备类型'},
                    {field: 'shapeData.ZHDBTable', label: '设备名称'}
                ],

                currentTabName:'',
                tableData: [],
                shapeSelected: false,
                rows: 1,
                showLine: true,
                selectedMode: false,
                isClean: false,
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


            selectedModeHandle(value) {
                if (value) {
                    if (this.shapeSelected == false) {
                        this.cleanSelectValue()
                        this.isClean = true
                    }
                } else {
                    this.isClean = false
                }
            },

            cleanSelectValue() {

                this.currentVoltageLevel = ''
                this.currentSubstation = ''
                this.currentDevice = ''
            },

            refresh() {
                this.tableData = this.$shape.shape.pullData('getShapeDatas', this.currentTabName)
            },
            settings() {
                if (!this.currentDevice) {
                    this.$message({
                        message: "请选择有效的设备类型！",
                        type: "error"
                    });
                }
            },

            eidtPanelshapeSelected(value) {
                this.shapeSelected = value
            },

            acceptDataHandle(args) {
                console.log(args)
                this.eidtPanelshapeSelected(args[1] == null)
            },

            setTableData(args) {
                this.tableData = args[1]
            }
        },

        created() {
            this.$shape.shape.acceptData(this, 'setSelectedShape', this.acceptDataHandle)
            this.$shape.shape.acceptData(this, 'setDeviceModelData', this.setTableData)

        }
    }
</script>

<style>

    .model-property {
        height: 100%;
        width: 100%;
        position: relative
    }

    .model-main {
        border: 1px solid;
        width: 100%;
        position: absolute;
        bottom: 26px;
        top: 0px;
    }

    .model-footer {
        height: 26px;
        border: 0px solid;
        width: 100%;
        position: absolute;
        bottom: 0px;
        text-align: left;
    }

    .model-footer .el-form-item--small {
        margin-bottom: 0px !important;
        margin-right: 10px !important;
    }

    .model-footer .el-form-item__label {
        margin-bottom: 0px;

    }

    .model-footer .el-checkbox--small {
        margin-bottom: 0px;
    }

</style>
