<template>
    <el-container>
        <el-header>
            <web-menu ref="menu" @clickhandle="menuHandle"></web-menu>
            <web-toolbar ref="toolbar" :toolbars="toolbars" @clickhandle="toolbarClickHandle">
                <template v-slot="{tool}">
                    <img :src="tool.image" :title="tool.title" v-if="tool.type == 'image'"/>
                </template>
            </web-toolbar>
        </el-header>
        <el-container>
            <el-aside :width="managementWidth+ 'px'">
                <web-management ref="management" ></web-management>
            </el-aside>
            <drag-divider direction="vertical" v-model:width="managementWidth" :min="managementMinWidth"></drag-divider>
            <el-container>
                <el-container>
                    <el-main>
                        <web-canvas ref="canvas" @selectedGraphic="selectedGraphicHandle"></web-canvas>
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

                ]
            }
        },
        methods: {

            ...mapActions(['setAllShapes']),

            menuHandle (item) {
                console.log(this, item)

                if(item.name == 'newGraph'){
                    this.$refs.canvas.addGraphic()
                }

            },
            toolbarClickHandle(toolbarItem){

                if(toolbarItem.name == 'newGraphic'){
                    this.$refs.canvas.addGraphic()
                }

                console.log(toolbarItem)
            },

            selectedGraphicHandle(graphicName){
                console.log('graphicName', graphicName)

                let shapes = this.$refs.canvas.getAllShapes(graphicName)

                this.setAllShapes({allShapes:shapes})

                console.log(shapes)
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
