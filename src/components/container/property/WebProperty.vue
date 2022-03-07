
<template>
    <div>
        <el-table
                ref="mytable"
                :data="table_data"
                style="width: 100%"
        >
            <el-table-column v-if="radio" type="index" width="50"></el-table-column>
            <el-table-column
                    align="center"
                    v-for="(item,index,key) in table_columns"
                    :item="item"
                    :key="key"
                    :index="index"
                    :label="item.label"
            >
                <template  #default="scope">
                    <el-input v-if="scope.row.edit"
                              size="small"
                              v-model="scope.row[item.prop]"
                              :placeholder="'请输入'+item.label"
                    ></el-input>
                    <span v-if="!scope.row.edit">{{scope.row[item.prop]}}</span>
                </template>
            </el-table-column>
            <!--<el-table-column label="操作" align="center">-->
            <!--<template #default="scope">-->
            <!--&lt;!&ndash; 全局控制的编辑 &ndash;&gt;-->
            <!--<div v-if="is_edit&&scope.row.add==undefined" style="display: inline-block;">-->
            <!--&lt;!&ndash; 编辑 &ndash;&gt;-->
            <!--<el-button-->
            <!--size="mini"-->
            <!--v-if="!scope.row.edit"-->
            <!--@click="handleEdit(scope.$index, scope.row)"-->
            <!--type="primary"-->
            <!--&gt;Edit</el-button>-->
            <!--&lt;!&ndash; 保存 &ndash;&gt;-->
            <!--<el-button-->
            <!--size="mini"-->
            <!--type="success"-->
            <!--:plain="true"-->
            <!--v-if="scope.row.edit"-->
            <!--@click="handleSave(scope.$index, scope.row)"-->
            <!--&gt;Save</el-button>-->
            <!--</div>-->
            <!--&lt;!&ndash; 添加控制 &ndash;&gt;-->
            <!--<div v-if="scope.row.add!=undefined&&scope.row.add" style="display: inline-block;">-->
            <!--&lt;!&ndash; 保存 &ndash;&gt;-->
            <!--<el-button-->
            <!--size="mini"-->
            <!--type="success"-->
            <!--:plain="true"-->
            <!--v-if="scope.row.edit"-->
            <!--@click="handleSave(scope.$index, scope.row)"-->
            <!--&gt;Save</el-button>-->
            <!--</div>-->
            <!--&lt;!&ndash; 全局控制删除 &ndash;&gt;-->
            <!--<el-button-->
            <!--size="mini"-->
            <!--v-if="is_delete&&scope.row.add==undefined"-->
            <!--:plain="true"-->
            <!--type="danger"-->
            <!--@click="handleDelete(scope.$index, scope.row)"-->
            <!--&gt;Delete</el-button>-->
            <!--</template>-->
            <!--</el-table-column>-->
        </el-table>
    </div>
</template>

<script>
    export default {
        name:'WebProperty',
        methods: {
            //隔行变色
            tableRowClassName() {
                //选取DOM节点
                var trs = this.$refs.mytable.$el
                    .getElementsByTagName("tbody")[0]
                    .getElementsByTagName("tr");
                for (var i in trs) {
                    if (i % 2 == 0) {
                        //当隔行变色未true时改变颜色
                        if (this.space_color) {
                            trs[i].style.backgroundColor = "#f0f9eb";
                        } else {
                            trs[i].style.backgroundColor = "";
                        }
                    }
                }
            },

            //编辑
            handleEdit(index, row) {
                console.log(index, row);
                row.edit = true;
            },
            //删除
            handleDelete(index, row) {
                console.log(index, row);

                this.table_data.splice(index, 1);

                this.$message({
                    message: "删除成功！",
                    type: "success"
                });
            },
            //保存
            handleSave(index, row) {
                console.log(index, row);
                row.edit = false;

                delete this.table_data[index].add;

                this.$message({
                    message: "保存成功！",
                    type: "success"
                });
            },
            handleAdd() {
                var addDataJson = {};
                for (var key in this.new_date_json) {
                    if (key === "edit") {
                        delete addDataJson[key];
                    } else if (key === "add") {
                        delete addDataJson[key];
                    } else {
                        addDataJson[key] = "";
                    }
                }
                addDataJson.edit = true;
                addDataJson.add = true;
                this.table_data.push(addDataJson);
            },
            //初始化编辑属性
            initEditAttribute() {
                // var self = this;
                // var edit = self.edit;

                var dataArray = [
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333,
                        sex: 18
                    },
                    {
                        date: "2016-05-02",
                        sex: 18,
                        name: "王小虎",
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        sex: 18,
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333
                    }
                ];

                if (dataArray.length > 0) {
                    //添加编辑事件
                    for (var index in dataArray) {
                        dataArray[index]["edit"] = false;
                        this.table_data.push(dataArray[index]);
                    }

                    if (Object.keys(this.new_date_json).length === 0) {
                        //新增时，初始化数据结构
                        this.initAddDataJson(dataArray[0]);
                    }
                }
                console.log("this.tableData:", this.table_data);
            },
            initAddDataJson(dataArray) {
                //新增时，初始化数据结构
                var dataJson = dataArray;
                var newDateJson = {};
                for (var key in dataJson) {
                    if (key === "edit") {
                        newDateJson[key] = "true";
                    } else {
                        newDateJson[key] = "";
                    }
                }
                newDateJson["add"] = true;
                this.new_date_json = newDateJson;
            }
        },
        mounted: function() {
            this.initEditAttribute();
            //确保方法在页面渲染后调用
            this.$nextTick(function() {
                /////方法
                this.tableRowClassName();
            });
        },
        watch: {
            space_color: function() {
                //监听数据变化
                this.$nextTick(function() {
                    /////方法
                    this.tableRowClassName();
                });
            },
            table_data: function() {
                //监听数据变化f
                this.$nextTick(function() {
                    /////方法
                    this.tableRowClassName();
                });
            }
        },
        data() {
            return {
                new_date_json: {}, //数据结构
                multipleSelection: [], //复选框，数据
                is_edit: true, //是否可编辑
                is_delete: true, //是否可删除
                selection: true, //是否需要复选框
                radio: false, //单选变色
                space_color: true, //隔行变色
                //表头信息
                table_columns: [
                    {
                        prop: "date",
                        label: "日期",
                        width: "100"
                    },
                    {
                        prop: "name",
                        label: "姓名",
                        width: "100"
                    }
                ],
                //表格数据
                table_data: [
                    // {
                    //   date: "2016-05-03",
                    //   name: "王小虎",
                    //   province: "上海",
                    //   city: "普陀区",
                    //   address: "上海市普陀区金沙江路 1518 弄",
                    //   zip: 200333,
                    //   sex: 18
                    // },
                    // {
                    //   date: "2016-05-02",
                    //   sex: 18,
                    //   name: "王小虎",
                    //   province: "上海",
                    //   city: "普陀区",
                    //   address: "上海市普陀区金沙江路 1518 弄",
                    //   zip: 200333
                    // },
                    // {
                    //   date: "2016-05-04",
                    //   name: "王小虎",
                    //   sex: 18,
                    //   province: "上海",
                    //   city: "普陀区",
                    //   address: "上海市普陀区金沙江路 1518 弄",
                    //   zip: 200333
                    // }
                ]
            };
        }
    };
</script>
<style scoped>
</style>
