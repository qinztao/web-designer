<template>
    <el-table :data="tableData" border style="width: 100%" height="100%" size="small" @cell-dblclick="celldblclick"
              @cell-click="cellClick">
        <el-table-column v-for="column in columns" :prop="column.field" :label="column.label"
                         :key="column.field" width="120" sortable>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "WebModelTable",
        props: {
            columns: {
                type: Array,
                default() {
                    return [
                        {field: 'date', label: '时间'},
                        {field: 'name', label: '名称'},
                        {field: 'address', label: '地址', isEdit: true},
                    ]
                }
            }
        },
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        date: '2016-05-02',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        date: '2016-05-04',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        date: '2016-05-01',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                ]
            }
        },
        methods: {

            celldblclick(row, column, cell) {
                if (row.isEdit) {
                    cell.firstChild.innerHTML = "<input text='text' value='" + row[column.property] + "'/>"
                }

            },
            cellClick(row, column, cell) {
                console.log('row ', row)
                console.log('column', column)
                console.log('cell', cell)

            }
        }
    }
</script>

<style scoped>

</style>
