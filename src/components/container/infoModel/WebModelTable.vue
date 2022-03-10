<template>
    <el-table :data="dataTable" border style="width: 100%" height="100%" size="small" @cell-dblclick="celldblclick"
              @cell-click="cellClick">
        <el-table-column v-for="column in columns" :prop="column.field" :label="column.label"
                         :key="column.field" width="160" sortable>
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
                    return []
                }
            },
            dataTable:{
                type: Array,
                required: true
            }
        },

        data() {

            return {

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
        },
         created(){
         }
    }
</script>

<style scoped>

</style>
