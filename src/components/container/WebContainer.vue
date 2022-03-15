<template>
    <el-container>
        <el-header>
            <web-menu ref="menu" :menus="menus" @clickhandle="_menuHandle"></web-menu>
            <web-toolbar ref="toolbar" :toolbars="toolbars" @clickhandle="_toolbarClickHandle">
                <template v-slot="{tool}">
                    <img :src="tool.image" :title="tool.title" v-if="tool.type == 'image'"/>
                </template>
            </web-toolbar>
        </el-header>
        <el-container>
            <el-aside :width="managementWidth+ 'px'">
                <web-management ref="management"></web-management>
            </el-aside>
            <drag-divider direction="vertical" v-model:width="managementWidth" :min="managementMinWidth"></drag-divider>
            <el-container>
                <el-container>
                    <el-main>
                        <web-canvas ref="canvas" @selectedGraphic="_selectedGraphicHandle"></web-canvas>
                    </el-main>
                    <drag-divider direction="vertical" v-model:width="propertyWidth" :min="propertyMinWidth"
                                  position="right"></drag-divider>
                    <el-aside :width="propertyWidth + 'px' ">
                        <web-property-panel ref="propertyPanel"></web-property-panel>
                    </el-aside>
                </el-container>
                <drag-divider v-model:height="infoModelHeight" :min="infoModelMinHeight"></drag-divider>
                <el-footer class="infoFooter" :height="infoModelHeight + 'px'">
                    <web-info-model ref="infoModel"></web-info-model>
                </el-footer>
            </el-container>

        </el-container>
        <el-footer class="statusFooter">
            <web-status-bar></web-status-bar>
        </el-footer>
    </el-container>
</template>
<script>
    import WebCanvas from './WebCanvas.vue'
    import WebPropertyPanel from './property/WebPropertyPanel.vue'

    import WebMenu from './menu/WebMenu.vue'
    import WebManagement from './management/WebManagement.vue'
    import WebToolbar from './toolbar/WebToolbar.vue'
    import WebInfoModel from './infoModel/WebInfoModel.vue'
    import WebStatusBar from './statusbar/WebStatusBar.vue'

    import DragDivider from '@/components/container/utils/DragDivider.vue'


    import btnNew from '@/assets/images/toolbar/btn_New.png'
    import btn_model_24 from '@/assets/images/toolbar/btn_model_24.png'
    import btn_Save from '@/assets/images/toolbar/btn_Save.png'
    import btn_saveAll from '@/assets/images/toolbar/btn_saveAll.png'
    import icon_topu from '@/assets/images/toolbar/icon_topu.png'
    import project_bug from '@/assets/images/toolbar/project_bug.png'
    import ele_text from '@/assets/images/toolbar/ele_text.png'
    import ele_tangle from '@/assets/images/toolbar/ele_tangle.png'
    import ele_none from '@/assets/images/toolbar/ele_none.png'
    import ele_line from '@/assets/images/toolbar/ele_line.png'
    import ele_overline from '@/assets/images/toolbar/ele_overline.png'
    import ele_curve from '@/assets/images/toolbar/ele_curve.png'
    import ele_circle from '@/assets/images/toolbar/ele_circle.png'

    import { mapActions } from 'vuex'

    export default {
        name: "WebContainer",
        components: {
            WebCanvas,
            WebMenu,
            WebManagement,
            WebPropertyPanel,
            WebInfoModel,
            WebToolbar,
            WebStatusBar,
            DragDivider
        }, data() {
            return {
                managementWidth: 300,
                managementMinWidth: 120,
                infoModelHeight: 140,
                infoModelMinHeight: 42,
                propertyWidth: 300,
                propertyMinWidth: 10,
                toolbars:[
                    // {id: 1, name: 'newGraphic', title: '项目图纸新建', type: 'image', image: ''},
                    // {id: 2, name: 'saveGraphic', title: '项目图纸保存', type: 'image', image: ''},
                    // {id: 3, name: 'saveAllGraphic', title: '保存所有图纸', type: 'image', image: ''},
                    // {id: 4, name: 'errorDetection', title: '项目错误检测', type: 'image', image: ''},
                    // {id: 5, name: 'generateTopology', title: '拓扑', type: 'image', image: ''},
                    // {id: 6, name: 'modelingLibrary', title: '建模入库', type: 'image', image: ''},
                    // {id: 7, name: '-'},
                    // {id: 9, name: 'font', title: '字体', type: 'select', key: 'WebFontFamily'},
                    // {id: 10, name: 'fontSize', title: '字号', type: 'select', key: 'WebFontSize'},
                    // {id: 19, name: '-'},
                    // {id: 11, name: 'none', title: '选择', type: 'image', image: ''},
                    // {id: 12, name: 'line', title: '直线', type: 'image', image: ''},
                    // {id: 13, name: 'polyline', title: '多段线', type: 'image', image: ''},
                    // {id: 14, name: 'arc', title: '弧线', type: 'image', image: ''},
                    // {id: 16, name: 'rectangle', title: '矩形', type: 'image', image: ''},
                    // {id: 17, name: 'circle', title: '圆', type: 'image', image: ''},
                    // {id: 18, name: 'characters', title: '文字', type: 'image', image: ''},
                    {id: 1, name: 'newGraphic', title: '项目图纸新建', type: 'image', image: btnNew},
                    {id: 2, name: 'saveGraphic', title: '项目图纸保存', type: 'image', image: btn_Save},
                    {id: 3, name: 'saveAllGraphic', title: '保存所有图纸', type: 'image', image: btn_saveAll},
                    {id: 4, name: 'errorDetection', title: '项目错误检测', type: 'image', image: project_bug},
                    {id: 5, name: 'generateTopology', title: '拓扑', type: 'image', image: icon_topu},
                    {id: 6, name: 'modelingLibrary', title: '建模入库', type: 'image', image: btn_model_24},
                    {id: 7, name: '-'},
                    {id: 9, name: 'font', title: '字体', type: 'select', key: 'WebFontFamily'},
                    {id: 10, name: 'fontSize', title: '字号', type: 'select', key: 'WebFontSize'},
                    {id: 19, name: '-'},
                    {id: 11, name: 'none', title: '选择', type: 'image', image: ele_none},
                    {id: 12, name: 'line', title: '直线', type: 'image', image: ele_line},
                    {id: 13, name: 'polyline', title: '多段线', type: 'image', image: ele_overline},
                    {id: 14, name: 'arc', title: '弧线', type: 'image', image: ele_curve},
                    {id: 16, name: 'rectangle', title: '矩形', type: 'image', image: ele_tangle},
                    {id: 17, name: 'circle', title: '圆', type: 'image', image: ele_circle},
                    {id: 18, name: 'characters', title: '文字', type: 'image', image: ele_text},

                ],
                menus:[

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
                            {id: 7, name: 'delete', desc: '删除', icon: ''},
                            {id: 9, name: 'formatPainter', desc: '格式刷', icon: ''},
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
                            {id: 3, name: 'upAlignment', desc: '上对齐', icon: ''},
                            {id: 4, name: 'bottomAlignment', desc: '下对齐', icon: ''},
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
        },
        methods: {

            ...mapActions(['setAllShapes']),

            _menuHandle (item) {
                console.log(this, item)

                if(item.name == 'newGraph'){
                    this.$refs.canvas.addGraphic()
                }

            },
            _toolbarClickHandle(toolbarItem){

                if(toolbarItem.name == 'newGraphic'){
                    this.$refs.canvas.addGraphic()
                }

                console.log(toolbarItem)
            },

            _selectedGraphicHandle(graphicName){

                console.log('graphicName', graphicName)

                let shapes = this.$refs.canvas.getAllShapes(graphicName)

                this.setAllShapes({allShapes:shapes})

            }
        },

        created() {


        }
    }
</script>


<style scoped>

    .dropVerticalDivider {
        height: auto;
        cursor: e-resize;
    }

    .dropHorizontalDivider {
        cursor: n-resize;
        margin: 1px 0px;
    }

    .el-container {
        height: 100%;
    }

    .el-main {
        padding: 0;
    }

    .infoFooter {
        border: 1px solid;
    }

    .statusFooter {
        height: 32px;
        border: 1px solid;
    }

    .el-footer {
        padding: 0;
    }

</style>
