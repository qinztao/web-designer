<template>
    <div v-if="tempData != null" @click.stop="cleanSelectedShape">
        <el-table :data="tempData.shapeArray" border style="width: 100%" height="700"  size="small" highlight-current-row
                  @cell-click="cellClick" @click.stop>
            <el-table-column v-for="column in columns" :prop="column.field" :label="column.label"
                             :key="column.field" width="120" sortable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {

        name: "WebShapeOutputMethod",
        data() {
            return {
                activeIndex: '0',
                tempData: null,
                columns: [
                    {field: 'resourceId', label: '资源ID'},
                    {field: 'shapeData.ENDBTable', label:'设备类型' },
                    {field: 'shapeData.ZHDBTable', label:'设备名称',}]
            }
        },
        methods: {

            cellClick(row) {
                this.$shape.shape.dispatch('setSelectedShape', row)
            },

            cleanSelectedShape(){
                this.$shape.shape.dispatch('setSelectedShape')
            },

            getShapeDatas(){
                return this.tempData.shapeArray
            },

            setTempData(data) {
                this.tempData = data
            }
        },
        created() {
            console.log(this.$tempData)
            this.setTempData(this.$tempData)
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid;
        display: flex;
    }

    .activeDiv {
        border: 5px slateblue solid;
    }

</style>
