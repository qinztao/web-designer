<template>

    <el-menu
            mode="horizontal"
            @select="clickHandle">
        <el-sub-menu :index="m.id+ ''" v-for="m in menus" :key="m.id">
            <template #title> {{m.desc}}</template>
            <template v-for="subItem in m.children" :key="m.id+'-'+subItem.id">
                <el-menu-item v-if="subItem.children == null" :class="subItem.name == '-' ? 'divider': ''"
                              :index="m.id+'-'+subItem.id">
                    <template v-if="subItem.name == '-'">
                        <el-divider></el-divider>
                    </template>
                    <template v-else>
                        <el-icon>
                        </el-icon>
                        {{subItem.desc}}
                    </template>
                </el-menu-item>
                <el-sub-menu v-else :index="m.id+'-'+subItem.id" :key="m.id+'-'+subItem.id">
                    <template #title>
                        <el-icon>
                        </el-icon>
                        {{subItem.desc}}
                    </template>
                    <el-menu-item v-for="gItem in subItem.children" :key="m.id + '-'+ subItem.id + '-' + gItem.id"
                                  :index="m.id + '-'+ subItem.id + '-' + gItem.id">
                        <template v-if="gItem.name == '-'">
                            <el-divider></el-divider>
                        </template>
                        <template v-else>
                            <el-icon>
                            </el-icon>
                            {{gItem.desc}}
                        </template>

                    </el-menu-item>

                </el-sub-menu>

            </template>

        </el-sub-menu>

    </el-menu>

</template>

<script>

    // import {mapGetters } from 'vuex'

    export default {
        name: "WebMenu",
        props: {
            menus: {
                type: Array,
                default() {
                    return [
                        {
                            id: 1, name: 'workSpace', desc: '工作空间', children: [
                                {id: 1, name: 'newCreateWorkSpace', desc: '新建工作空间', icon: ''},
                                {id: 2, name: 'toggleWorkSpace', desc: '切换工作空间', icon: ''},
                                {id: 3, name: '-'},
                                {id: 4, name: 'updateProjectType', desc: '更改项目类型', icon: ''},
                                {id: 5, name: 'recycled', desc: '回收站', icon: 'btn_projectRecycle.png'},
                                {id: 6, name: 'keyboardShortcuts', desc: '快捷键配置', icon: ''},
                                {id: 6, name: 'options', desc: '选项', icon: ''},
                                {id: 7, name: 'quit', desc: '退出', icon: ''},
                            ]
                        },
                        {
                            id: 2, name: 'project', desc: '项目', children: [
                                {id: 1, name: 'openProject', desc: '打开项目', icon: ''},
                                {id: 2, name: 'closeProject', desc: '关闭项目', icon: ''},
                                {id: 3, name: '-'},
                                {id: 4, name: 'newProject', desc: '新建项目', icon: ''},
                                {id: 5, name: 'deleteProject', desc: '删除项目', icon: 'btn_projectRecycle.png'},
                                {id: 6, name: '-'},
                                {id: 7, name: 'errorDetection', desc: '错误检测', icon: 'btn_projectRecycle'},
                                {id: 8, name: 'generateTopology', desc: '生成拓扑', icon: 'btn_projectRecycle'},
                                {id: 9, name: 'generateIndex', desc: '生成索引', icon: 'btn_projectRecycle'},
                                {id: 10, name: 'compileFormula', desc: '编辑公式', icon: ''},
                                {id: 11, name: 'modelingLibrary', desc: '建模入库', icon: 'btn_projectRecycle'},
                                {id: 12, name: '-'},
                                {id: 13, name: 'man-machineHMI', desc: '人机交互界面(HML)', icon: 'btn_projectRecycle'},
                                {id: 12 - 1, name: '-'},
                                {id: 14, name: 'loadRunMode', desc: '加载运行方式', icon: ''},
                                {
                                    id: 15,
                                    name: 'projectDataUniformity',
                                    desc: '数据一致化(已SVN打版)',
                                    icon: 'btn_projectRecycle'
                                },
                                {id: 16, name: '-'},
                                {id: 17, name: 'settingColor', desc: '颜色配置', icon: ''},
                                {id: 18, name: '-'},
                                {id: 19, name: 'importSVG', desc: 'SVG导入', icon: 'btn_projectRecycle'},
                                {id: 20, name: 'importBatchSVG', desc: 'SVG批量导入', icon: 'btn_projectRecycle'},
                                {id: 21, name: 'exportSVG', desc: 'SVG导出', icon: 'btn_projectRecycle'},
                                {id: 22, name: 'importCAO', desc: 'CAO导入', icon: 'btn_projectRecycle'},
                                {id: 23, name: 'exportCAO_XML', desc: 'CAO_XML导出', icon: ''},
                                {id: 24, name: '-'},
                                {id: 23, name: 'exportData', desc: '数据导出(压缩包)', icon: ''},
                                {id: 23, name: 'importData', desc: '数据导入(压缩包)', icon: ''},
                            ]
                        },
                        {
                            id: 3, name: 'graph', desc: '图纸', children: [
                                {id: 1, name: 'newGraph', desc: '新建图纸', icon: 'btn_projectRecycle'},
                                {id: 2, name: 'deleteGraph', desc: '删除图纸', icon: ''},
                                {id: 4, name: 'saveAsGraph', desc: '图纸另存为', icon: ''},
                                {id: 5, name: 'renameGraph', desc: '图纸重命名', icon: ''},
                                {id: 6, name: '-'},
                                {id: 7, name: 'saveCurrentGraph', desc: '保存当前图纸', icon: ''},
                                {id: 8, name: 'saveAllGraph', desc: '保存全部图纸', icon: ''},
                                {id: 9, name: 'closeCurrentGraph', desc: '关闭当前图纸', icon: ''},
                                {id: 10, name: 'openGraphLocation', desc: '打开图纸位置', icon: 'btn_projectRecycle'},
                                {id: 12 - 2, name: '-'},
                                {id: 11, name: 'saveImagePng', desc: '保存为PNG图片', icon: ''},
                                {id: 12, name: '-'},
                                {id: 13, name: 'graphicPropertise', desc: '图形属性', icon: ''},
                                {id: 14, name: 'LayerControl', desc: '图层控制', icon: ''},
                                {id: 14 - 1, name: '-'},
                                {id: 15, name: 'calcCartesianCoordinates', desc: '计算迪卡尔坐标', icon: ''},
                                {id: 16, name: 'cartesianCoordinatesLayoutGraph', desc: '迪卡尔坐标布局图纸', icon: ''},
                                {id: 16 - 1, name: '-'},
                                {id: 17, name: 'exportExcelGraph', desc: 'Excel导出图形', icon: ''},
                                {id: 18, name: 'importExcelGraph', desc: 'Excel导入图形', icon: ''},
                                {id: 19, name: 'exportExcelData', desc: 'Excel导出数据', icon: ''},
                                {id: 20, name: 'importExcelData', desc: 'Excel导入数据', icon: ''},
                            ]
                        }, {
                            id: 4, name: 'model', desc: '模型', children: [
                                {id: 1, name: 'compileModelParam', desc: '模型参数编辑', icon: ''},
                                {id: 8, name: '-'},
                                {id: 2, name: 'compileModelDataProperties', desc: '模型数据属性编辑', icon: ''},
                                {id: 4, name: 'compileGrapihcProperties', desc: '图元图形属性编辑', icon: ''},
                                {id: 5, name: 'compileTelemetryDataProperties', desc: '遥测遥信数据属性编辑', icon: ''},
                                {id: 6, name: '-'},
                                {id: 7, name: 'configurationModel', desc: '模型配置', icon: ''},
                            ]
                        },
                        {
                            id: 5, name: 'tool', desc: '工具', children: [
                                {id: 1, name: 'compileModelParam', desc: '变压器标幺参数计算器', icon: ''},
                                {id: 2, name: 'compileModelDataProperties', desc: '线路标幺参数计算器', icon: ''},
                                {id: 8, name: '-'},
                                {id: 4, name: 'compileGrapihcProperties', desc: '海上风电评估', icon: ''},
                            ]
                        }, {
                            id: 6, name: 'compile', desc: '编辑', children: [
                                {id: 1, name: 'Undo', desc: 'Undo', icon: ''},
                                {id: 2, name: 'Redo', desc: 'Redo', icon: ''},
                                {id: 8, name: '-'},
                                {id: 3, name: 'compileGrapihcProperties', desc: '剪切', icon: ''},
                                {id: 4, name: 'compileGrapihcProperties', desc: '拷贝', icon: ''},
                                {id: 5, name: 'compileGrapihcProperties', desc: '粘贴', icon: ''},
                                {id: 6, name: '-'},
                                {id: 7, name: 'compileGrapihcProperties', desc: '删除', icon: ''},
                                {id: 9, name: 'compileGrapihcProperties', desc: '格式刷', icon: ''},
                                {id: 10, name: 'compileGrapihcProperties', desc: '向左旋转90度', icon: ''},
                                {id: 11, name: 'compileGrapihcProperties', desc: '向右旋转90度', icon: ''},
                                {id: 12, name: 'compileGrapihcProperties', desc: '向左翻转', icon: ''},
                                {id: 13, name: 'compileGrapihcProperties', desc: '向右翻转', icon: ''},
                                {id: 14, name: 'compileGrapihcProperties', desc: '向下翻转', icon: ''},
                                {id: 15, name: 'compileGrapihcProperties', desc: '向上翻转', icon: ''},
                            ]
                        }, {
                            id: 7, name: 'arrangeBar', desc: '排列栏', children: [
                                {id: 1, name: 'Undo', desc: '左对齐', icon: ''},
                                {id: 2, name: 'Redo', desc: '右对齐', icon: ''},
                                {id: 3, name: 'compileGrapihcProperties', desc: '上对齐', icon: ''},
                                {id: 4, name: 'compileGrapihcProperties', desc: '下对齐', icon: ''},
                                {id: 5, name: 'compileGrapihcProperties', desc: '横向居中对齐', icon: ''},
                                {id: 7, name: 'compileGrapihcProperties', desc: '纵向居中对齐', icon: ''},
                                {id: 9, name: 'compileGrapihcProperties', desc: '成组', icon: ''},
                                {id: 10, name: 'compileGrapihcProperties', desc: '拆组', icon: ''},
                                {id: 11, name: 'compileGrapihcProperties', desc: '竖分布', icon: ''},
                                {id: 12, name: 'compileGrapihcProperties', desc: '横分布', icon: ''},
                                {id: 13, name: 'compileGrapihcProperties', desc: '等宽', icon: ''},
                                {id: 14, name: 'compileGrapihcProperties', desc: '等高', icon: ''},
                                {id: 15, name: 'compileGrapihcProperties', desc: '等高宽', icon: ''},
                                {id: 16, name: 'compileGrapihcProperties', desc: '上移', icon: ''},
                                {id: 17, name: 'compileGrapihcProperties', desc: '下移', icon: ''},
                                {id: 18, name: 'compileGrapihcProperties', desc: '置顶', icon: ''},
                                {id: 19, name: 'compileGrapihcProperties', desc: '置底', icon: ''},
                                {id: 20, name: 'compileGrapihcProperties', desc: '拆出图符', icon: ''},
                            ]
                        }, {
                            id: 8, name: 'characters', desc: '文字', children: [
                                {id: 1, name: 'Undo', desc: '文字横向居中', icon: ''},
                                {id: 2, name: 'Redo', desc: '文字横向居左', icon: ''},
                                {id: 3, name: 'compileGrapihcProperties', desc: '文字横向居右', icon: ''},
                                {id: 4, name: 'compileGrapihcProperties', desc: '文字纵向置底', icon: ''},
                                {id: 5, name: 'compileGrapihcProperties', desc: '文字纵向居中', icon: ''},
                                {id: 7, name: 'compileGrapihcProperties', desc: '文字纵向置顶', icon: ''},
                                {id: 6, name: 'compileGrapihcProperties', desc: '边框自适应', icon: ''},
                            ]
                        },
                        {
                            id: 9, name: 'software', desc: '软件', children: [
                                {id: 1, name: 'Undo', desc: '启动图符编辑器', icon: ''},
                                {id: 4, name: '-'},
                                {id: 2, name: 'Redo', desc: '控制台', icon: ''},
                                {id: 5, name: '-'},
                                {
                                    id: 3, name: 'projectAssistant', desc: '工程辅助', icon: '', children: [
                                        {id: 1, name: 'findDevice', desc: '根据设备名称找设备', icon: ''},
                                        {id: 3, name: 'locationIcon', desc: '极端方式图符定位', icon: ''},
                                        {id: 4, name: 'IDlocationIcon', desc: '根据ID定位图符', icon: ''},
                                        {id: 5, name: 'dataVarIDlocationIcon', desc: '根据DataVarID定位图符', icon: ''},
                                        {id: 6, name: 'conditionChooseShape', desc: '按条件选择图元', icon: ''},
                                        {id: 7, name: 'projectFaultProcessing', desc: '项目容错处理', icon: ''},
                                        {id: 8, name: 'resetSaveGraph', desc: '所有图纸重新保存', icon: ''},
                                    ]
                                },

                            ]
                        },{
                            id: 10, name: 'SVN', desc: 'SVN', children: [
                                {id: 1, name: 'projectCheckOut', desc: '项目检出', icon: 'btn_projectRecycle'},
                                {id: 2, name: 'projectUpdateNewestVersion', desc: '项目更新至最新版本', icon: ''},
                                {id: 3, name: 'projectPlayVersion', desc: '项目打版', icon: 'btn_projectRecycle'},
                                {id: 4, name: '-'},
                                {id: 5, name: 'cleanSVN', desc: 'SVN清理', icon: ''},
                            ]
                        },
                    ]
                }
            }
        },
        data() {
            return {
                activeIndex: '1',
                menuItems:{},
            }
        },
        methods: {

            clickHandle(index) {

                console.log(this.menuItems[index])
                this.$emit('clickhandle',this.menuItems[index])
            },



        },
        // computed:{
        //     ...mapGetters([
        //         'doneTodos',
        //         'getTodoById'
        //     ])
        // }
        created() {

            let menuItems = {}

            this.menus.forEach((item)=>{
                let mId = item.id
                menuItems[mId] = item

                if(item.children != null) {

                    item.children.forEach((childItem)=>{
                        let cId = childItem.id
                        menuItems[mId + '-' +cId] = childItem

                        if(childItem.children != null){
                            childItem.children.forEach((gItem)=>{
                                menuItems[mId + '-' + cId + '-' + gItem.id] = gItem
                            })
                        }
                    })
                }
            })

            this.menuItems = menuItems;
        }
    }
</script>

<style scoped>
    .el-menu {
        height: 29px;
    }

    .el-divider--horizontal {
        margin: 1px 0;
    }

    .divider {
        height: 2px !important;
        padding: 0 !important;
    }
</style>
